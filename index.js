const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.disable('X-powered-by');
/* app.use(function (req, res, next) {
  res.header('X-powered-by', 'Blood, sweat, and tears');
  res.header('X-Content-Type-Options', 'nosniff');
  next();
}); */

app.get('/', (_req, res) => {
  console.log('Accessed!');
  res.status(200).json({ message: 'Hello!' });
});

app.get('*', (_req, res) => {
  console.log('Error page');
  res.status(404).json({ message: 'Not found', error: 404 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server running on PORT:' + PORT);
});
