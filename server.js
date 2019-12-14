const express = require('express');
const next = require('next');
const helmet = require('helmet');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use(helmet());

  // Handling requests to SW
  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '.next', 'service-worker.js');
    res.sendFile(filePath);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port);
});
