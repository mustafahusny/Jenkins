const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Hello, World!');
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`started listening on :${PORT}`);
});

// vim: set ts=2 sw=2 et:
