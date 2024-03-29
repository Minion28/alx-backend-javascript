const express = require('express');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
