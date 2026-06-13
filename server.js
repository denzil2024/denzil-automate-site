import http from 'http';
import { readFile, stat } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join, normalize, extname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

async function statSafe(p) { try { return await stat(p); } catch { return null; } }

async function send(res, filePath) {
  const ext = extname(filePath).toLowerCase();
  const headers = { 'Content-Type': MIME[ext] || 'application/octet-stream' };
  if (/[\\/]assets[\\/]/.test(filePath)) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }
  res.writeHead(200, headers);
  res.end(await readFile(filePath));
}

const server = http.createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    urlPath = normalize(urlPath).replace(/^(\.\.[\\/])+/, '').replace(/^[\\/]+/, '');
    const target = join(DIST, urlPath);

    // 1. A real file (css, js, images, robots, sitemap, llms)
    const st = await statSafe(target);
    if (st && st.isFile()) return await send(res, target);

    // 2. A prerendered snapshot at dist/<route>/index.html
    const snap = join(target, 'index.html');
    const ss = await statSafe(snap);
    if (ss && ss.isFile()) return await send(res, snap);

    // 3. Unknown route: serve the prerendered 404 page with a real 404 status
    //    (every valid route has a snapshot above, so anything here is genuinely
    //    not found, not a soft-404).
    const notFound = join(DIST, '404.html');
    const nf = await statSafe(notFound);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(nf && nf.isFile() ? await readFile(notFound) : 'Not found');
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

server.listen(PORT, () => console.log(`Denzil site running on port ${PORT}`));
