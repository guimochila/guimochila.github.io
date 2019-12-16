const compression = require('compression');
const express = require('express');
const next = require('next');
const helmet = require('helmet');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const server = express();
let expressServer = null;

app.prepare().then(() => {
  server.use(helmet());
  server.use(compression());

  // Handling requests to SW
  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '.next', 'service-worker.js');
    res.sendFile(filePath);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  expressServer = server.listen(port);
});

// Handle SIGNTERMs
process.on('SIGINT', function onSignint() {
  console.warn(
    `Got SIGINT (aka ctrl-c in docker). Graceful shutdown ${new Date().toISOString()}`,
  );
  shutdown();
});
process.on('SIGTERM', function onSigterm() {
  console.warn(
    `Got SIGTERM (docker container stop). Graceful shutdown ${new Date().toISOString()}`,
  );
  shutdown();
});

function shutdown() {
  if (expressServer) {
    expressServer.close(function onServerClosed(error) {
      if (error) {
        console.error(error);
        process.exitCode = 1;
      }

      process.exit();
    });
  }

  process.exit(1);
}
