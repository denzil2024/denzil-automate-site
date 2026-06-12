import http from 'http';
import { readFile } from 'fs/promises';

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const html = await readFile(new URL('./index.html', import.meta.url));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

server.listen(PORT, () => {
  console.log(`Site running on port ${PORT}`);
});
