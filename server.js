const express = require('express');
const next = require('next');
const helmet = require('helmet');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, '.next', pathname);
  app.serveStatic(req, res, filePath);
};

app.prepare().then(() => {
  const server = express();
  server.use(helmet());
  server.use(handle);

  server.get('/service-worker.js', ServiceWorker(app));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port);
});
