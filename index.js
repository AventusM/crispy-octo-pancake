const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.disable('X-powered-by');

// https://regbrain.com/article/cache-headers-express-js
// Fix the following issue: ZAP Scan Baseline Report #11
const setCache = function (req, res, next) {
  res.set('Cache-control', 'no-store');
  next();
};

// now call the new middleware function in your app

app.use(setCache);

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
