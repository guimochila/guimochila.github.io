const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet());

app.use('/static', express.static('static'));

app.get('/sw.js', (_, res) => {
  res.sendFile(path.join(__dirname, 'sw.js'));
});

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port);
