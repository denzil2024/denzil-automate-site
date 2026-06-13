/* ------------------------------------------------------------------ *
 * Prerender every route to a static HTML snapshot.
 *
 * This is a client-rendered React SPA. To give crawlers and link
 * unfurlers real HTML (correct <title>, description, canonical, Open
 * Graph and JSON-LD) without running our JavaScript, we boot the built
 * site, drive a headless browser through each route, and write the
 * resulting HTML to dist/<route>/index.html.
 *
 * server.js serves those snapshots; main.jsx hydrates them in place
 * (we stamp <html data-prerendered="true">), so there is no flash and
 * the page stays a normal SPA after load.
 *
 * Runs locally as part of `npm run build`. dist/ is committed and served,
 * so the production host (Railway) never needs a browser of its own.
 * ------------------------------------------------------------------ */

import { createServer } from 'http';
import { readFile, stat, mkdir, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join, extname, normalize } from 'path';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 5099;
const BASE = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

async function statSafe(p) { try { return await stat(p); } catch { return null; } }

/* Static server for dist/, always falling back to the unmodified SPA shell
 * (never to a snapshot) so every route renders fresh from the app. */
function startServer() {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      urlPath = normalize(urlPath).replace(/^(\.\.[\\/])+/, '').replace(/^[\\/]+/, '');
      const target = join(DIST, urlPath);
      const st = await statSafe(target);
      if (st && st.isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[extname(target).toLowerCase()] || 'application/octet-stream' });
        return res.end(await readFile(target));
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(await readFile(join(DIST, 'index.html')));
    } catch {
      res.writeHead(500); res.end('error');
    }
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

/* Discover routes: the two static pages plus every post link the blog
 * index renders, so new posts are picked up with no list to maintain. */
async function discoverRoutes(page) {
  await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle2', timeout: 45000 });
  const slugs = await page.evaluate(() =>
    [...document.querySelectorAll('a[href^="/blog/"]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => /^\/blog\/[a-z0-9-]+$/.test(h)));
  return ['/', '/blog', ...new Set(slugs)];
}

function outPathFor(route) {
  if (route === '/') return join(DIST, 'index.html');
  if (route === '/404') return join(DIST, '404.html');
  return join(DIST, route.replace(/^\//, ''), 'index.html');
}

async function snapshot(page, route) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle2', timeout: 45000 });
  // Wait until the app has rendered AND applySeo has run for THIS route
  // (canonical now points at the route we asked for).
  const want = route === '/' ? `${BASE}/`.replace(/\/$/, '/') : route;
  await page.waitForFunction((expected) => {
    const root = document.getElementById('root');
    if (!root || root.children.length === 0) return false;
    const c = document.querySelector('link[rel="canonical"]');
    if (!c) return false;
    const href = c.getAttribute('href') || '';
    const path = href.replace(/^https?:\/\/[^/]+/, '') || '/';
    return path === expected;
  }, { timeout: 15000 }, want === `${BASE}/` ? '/' : route);
  // Mark for in-place hydration by main.jsx.
  await page.evaluate(() => document.documentElement.setAttribute('data-prerendered', 'true'));

  // Build FAQPage structured data from the post's visible "Frequently Asked
  // Questions" section, so the schema always matches what readers see (a
  // Google requirement) with no second copy to keep in sync. Injected as its
  // own ld+json block; React never touches head scripts outside #root.
  if (route.startsWith('/blog/')) {
    await page.evaluate(() => {
      const h2s = [...document.querySelectorAll('.bp-prose h2')];
      const faqH2 = h2s.find((h) => /frequently asked questions/i.test(h.textContent || ''));
      if (!faqH2) return;
      const faqs = [];
      let q = null, a = '';
      for (let el = faqH2.nextElementSibling; el && el.tagName !== 'H2'; el = el.nextElementSibling) {
        if (el.tagName === 'H3') {
          if (q && a) faqs.push({ q, a: a.trim() });
          q = (el.textContent || '').trim(); a = '';
        } else if (q && el.tagName === 'P') {
          a += (a ? ' ' : '') + (el.textContent || '').trim();
        }
      }
      if (q && a) faqs.push({ q, a: a.trim() });
      if (!faqs.length) return;
      const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      };
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'faq-jsonld';
      s.textContent = JSON.stringify(data);
      document.head.appendChild(s);
    });
  }

  // Pull the page's own metadata for the sitemap / llms.txt, straight from
  // what the app rendered (canonical, description, and the BlogPosting dates).
  const meta = await page.evaluate(() => {
    const canon = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    const desc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    let posting = null;
    const s = document.getElementById('page-jsonld');
    if (s) {
      try {
        const graph = JSON.parse(s.textContent)['@graph'] || [];
        posting = graph.find((g) => g['@type'] === 'BlogPosting') || null;
      } catch { /* ignore */ }
    }
    return {
      url: canon,
      title: document.title,
      description: desc,
      published: posting?.datePublished || null,
      modified: posting?.dateModified || posting?.datePublished || null,
    };
  });

  const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
  return { html, meta: { ...meta, route, isPost: route.startsWith('/blog/') } };
}

const ORIGIN = 'https://automate.workwithdenzil.com';
const SITE_NAME = 'Denzil Automations';
const SITE_DESC = 'Done-for-you AI automation agency. We design and build automations that run lead response, follow-ups, bookings, billing and support, wired into the tools you already use.';
const CONTACT = 'https://wa.me/254781246345';

const xmlEscape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function oneLine(s, max = 165) {
  const t = (s || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:]$/, '') + '…';
}

/* Build sitemap.xml, robots.txt and llms.txt from the metadata the app
 * rendered for each route. Written into dist/ (committed and served). */
async function writeSeoFiles(metas) {
  const posts = metas
    .filter((m) => m.isPost)
    .sort((a, b) => (b.modified || '').localeCompare(a.modified || ''));
  const newest = posts.reduce((acc, p) => (p.modified > acc ? p.modified : acc), posts[0]?.modified || '');

  // --- sitemap.xml ---
  const urlEntry = (loc, lastmod, changefreq, priority) =>
    `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n` +
    (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : '') +
    `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  // Static pages (contact, privacy, terms): everything that is not the home,
  // the blog index, a post, or the 404.
  const staticPages = metas.filter((m) => !m.isPost && !['/', '/blog', '/404'].includes(m.route));
  const entries = [
    urlEntry(`${ORIGIN}/`, newest, 'weekly', '1.0'),
    urlEntry(`${ORIGIN}/blog`, newest, 'weekly', '0.9'),
    ...posts.map((p) => urlEntry(p.url, p.modified, 'monthly', '0.8')),
    ...staticPages.map((m) => urlEntry(
      m.url, null,
      m.route === '/contact' ? 'monthly' : 'yearly',
      m.route === '/contact' ? '0.6' : '0.3',
    )),
  ];
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
  await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');

  // --- robots.txt ---
  const robots =
    `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`;
  await writeFile(join(DIST, 'robots.txt'), robots, 'utf-8');

  // --- llms.txt (llmstxt.org) ---
  const postLines = posts
    .map((p) => `- [${p.title.replace(/ \| Denzil Automations$/, '')}](${p.url}): ${oneLine(p.description)}`)
    .join('\n');
  const llms =
    `# ${SITE_NAME}\n\n` +
    `> ${SITE_DESC}\n\n` +
    `${SITE_NAME} builds custom automation systems for growing businesses, so the busywork runs itself and no lead is ever lost. The blog shares practical, deeply researched playbooks on responding to leads faster, following up automatically, capturing leads on WhatsApp, and putting day-to-day operations on autopilot.\n\n` +
    `## Blog\n\n${postLines}\n\n` +
    `## Contact\n\n- Book a call or message us on WhatsApp: ${CONTACT}\n- Website: ${ORIGIN}/\n`;
  await writeFile(join(DIST, 'llms.txt'), llms, 'utf-8');
}

async function main() {
  if (!(await statSafe(join(DIST, 'index.html')))) {
    console.error('[prerender] dist/index.html missing. Run `vite build` first.');
    process.exit(1);
  }
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    const routes = [...await discoverRoutes(page), '/contact', '/privacy', '/terms', '/404'];
    console.log(`[prerender] ${routes.length} routes:`, routes.join(', '));

    // Capture all snapshots first, then write, so the server never serves
    // a half-written snapshot back to a later render.
    const captured = [];
    for (const route of routes) {
      const { html, meta } = await snapshot(page, route);
      captured.push({ out: outPathFor(route), html, meta });
      console.log(`[prerender]   rendered ${route}`);
    }
    for (const { out, html } of captured) {
      await mkdir(dirname(out), { recursive: true });
      await writeFile(out, html, 'utf-8');
    }
    console.log(`[prerender] wrote ${captured.length} snapshots.`);

    await writeSeoFiles(captured.map((c) => c.meta));
    console.log('[prerender] wrote sitemap.xml, robots.txt, llms.txt.');
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => { console.error('[prerender] failed:', err); process.exit(1); });
