/* ------------------------------------------------------------------ *
 * Full production build: bundle, then prerender every route.
 *
 *   1. `vite build`  -> dist/ with hashed assets and the SPA shell.
 *   2. prerender     -> dist/<route>/index.html static snapshots.
 *
 * dist/ is committed and served by server.js, so this runs locally
 * before a push. Use `npm run vite-build` for a bundle-only build.
 * ------------------------------------------------------------------ */

import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const run = (args) => execFileSync(process.execPath, args, { cwd: root, stdio: 'inherit' });

run([join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'build']);
run([join(root, 'scripts', 'prerender.js')]);

console.log('[build] done: bundled and prerendered.');
