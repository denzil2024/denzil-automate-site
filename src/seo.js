/* ------------------------------------------------------------------ *
 * Per-page SEO head management for the SPA.
 *
 * React renders the body, but the <head> (title, description, canonical,
 * Open Graph, Twitter, JSON-LD) has to be kept in sync as the user moves
 * between routes, and baked into the prerendered HTML snapshots so crawlers
 * and link unfurlers see the right tags without running our JavaScript.
 *
 * Every page calls applySeo() in an effect with its own values. The helper
 * upserts each tag in place, so navigating Landing -> post -> back never
 * leaves a stale canonical or OG image behind.
 * ------------------------------------------------------------------ */

export const ORIGIN = 'https://automate.workwithdenzil.com';

function upsertMeta(attr, key, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data) {
  let el = document.getElementById('page-jsonld');
  if (data == null) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = 'page-jsonld';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Sync the document head for the current page.
 *
 * @param {object}  opts
 * @param {string}  opts.title        Full document/OG title.
 * @param {string}  opts.description  Meta + OG + Twitter description.
 * @param {string}  opts.path         Route path, e.g. '/blog/speed-to-lead'.
 * @param {string} [opts.image]       OG/Twitter image (absolute or site-rooted). Defaults to the site card.
 * @param {string} [opts.type]        OG type: 'website' (default) or 'article'.
 * @param {object} [opts.jsonLd]      Optional per-page JSON-LD graph. Removed when omitted.
 */
export function applySeo({ title, description, path, image, type = 'website', jsonLd = null, robots = 'index, follow, max-image-preview:large, max-snippet:-1' }) {
  const url = ORIGIN + path;
  const img = image
    ? (image.startsWith('http') ? image : ORIGIN + image)
    : `${ORIGIN}/og-cover.jpg`;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', robots);
  upsertLink('canonical', url);

  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:image', img);

  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', img);

  setJsonLd(jsonLd);
}
