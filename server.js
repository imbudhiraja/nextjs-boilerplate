const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV === 'development' });
const handle = app.getRequestHandler();
const PORT = 3000;

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // handle GET request to /service-worker.js
      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname);

        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    })
      .listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${PORT}`);
      });
  });
