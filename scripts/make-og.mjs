/* One-off: render public/og-cover.jpg (1200x630) matching the site brand.
   Run with `node scripts/make-og.mjs`. Not part of the build. */
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'og-cover.jpg');

const html = `<!doctype html><html><head><meta charset="utf-8"/>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700;800&family=Inter:wght@400;500&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; background:#08090f; font-family:'DM Sans',sans-serif; overflow:hidden; }
  .stage { position:relative; width:1200px; height:630px; padding:84px 88px; display:flex; flex-direction:column; justify-content:space-between; }
  .glow1 { position:absolute; top:-180px; right:-120px; width:560px; height:560px; border-radius:50%;
           background:radial-gradient(circle, rgba(109,94,252,.42), transparent 66%); }
  .glow2 { position:absolute; bottom:-220px; left:-140px; width:560px; height:560px; border-radius:50%;
           background:radial-gradient(circle, rgba(22,192,136,.20), transparent 66%); }
  .brand { position:relative; display:flex; align-items:center; gap:20px; }
  .mk { width:74px; height:74px; }
  .bword { font-size:34px; font-weight:700; color:#fff; letter-spacing:-.01em; }
  .bword span { color:#c3b4ff; }
  h1 { position:relative; font-size:78px; line-height:1.04; font-weight:800; letter-spacing:-.03em; color:#fff; max-width:980px; }
  h1 .grad { background:linear-gradient(100deg,#8b7bff,#a98bff 52%,#3fe0a6);
             -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .foot { position:relative; display:flex; align-items:center; gap:18px; color:#aab; font-family:Inter,sans-serif; font-size:24px; font-weight:500; }
  .dot { width:7px; height:7px; border-radius:50%; background:#6d5efc; }
</style></head><body>
  <div class="stage">
    <div class="glow1"></div><div class="glow2"></div>
    <div class="brand">
      <svg class="mk" viewBox="0 0 34 34" fill="none">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d5efc"/><stop offset="1" stop-color="#a575ff"/></linearGradient></defs>
        <rect width="34" height="34" rx="10" fill="url(#g)"/>
        <g fill="#fff">
          <rect x="12.1" y="6.4" width="1.7" height="5.6" rx="0.85"/><circle cx="12.95" cy="5.9" r="1.6"/>
          <rect x="20.2" y="6.4" width="1.7" height="5.6" rx="0.85"/><circle cx="21.05" cy="5.9" r="1.6"/>
          <rect x="6.5" y="14.8" width="4.1" height="7.2" rx="2.05"/><rect x="23.4" y="14.8" width="4.1" height="7.2" rx="2.05"/>
          <rect x="8.9" y="10.8" width="16.2" height="15.7" rx="7"/>
        </g>
        <rect x="11.3" y="16.3" width="11.4" height="5.7" rx="2.85" fill="#2c2658"/>
        <ellipse cx="15" cy="19.15" rx="1.3" ry="2.05" fill="#fff"/><ellipse cx="19" cy="19.15" rx="1.3" ry="2.05" fill="#fff"/>
      </svg>
      <span class="bword">Denzil <span>Automations</span></span>
    </div>
    <h1>Done-for-you AI automations that <span class="grad">run your busywork end to end.</span></h1>
    <div class="foot">Lead response<span class="dot"></span>Follow-ups<span class="dot"></span>Bookings<span class="dot"></span>Billing &amp; support</div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: OUT, type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('wrote', OUT);
