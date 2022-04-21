const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/', (_req, res) => {
  res.send('Hello DevSecOps World!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server running on PORT:' + PORT);
});
