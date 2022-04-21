const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello DevSecOps World!');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
