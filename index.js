const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.disable('X-powered-by');

// https://regbrain.com/article/cache-headers-express-js
// Fix the following issue: ZAP Scan Baseline Report #11
const setCache = function (req, res, next) {
  // here you can define period in second, this one is 5 minutes
  const period = 60 * 5;

  // you only want to cache for GET requests
  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`);
  } else {
    // for the other requests set strict no caching parameters
    res.set('Cache-control', 'no-store');
  }

  // remember to call next() to pass on the request
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
