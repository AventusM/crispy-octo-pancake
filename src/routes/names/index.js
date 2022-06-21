const express = require('express');
const router = express.Router();
const services = require('../../services');
const middlewares = require('../../middlewares');

router.get('/', async (_req, res, next) => {
  try {
    console.log('/names router path');
    const response = await services.names.getAll();
    res.status(200).json(response);
  } catch(e) {
    console.error(e.message);
    next(e);
  }
});

router.get('/:id', [middlewares.names.checkNamesParameters], async (req, res, next) => {
  try {
    console.log('/names/:id router path');
    const response = await services.names.getOne(req.params.id);
    res.status(200).json(response);
  } catch(e) {
    console.error(e.message);
    next(e);
  }
});

router.get('/unsafe/:id', async (req, res, next) => {
  try {
    console.log('/names/unsafe/:id router path');
    const response = await services.names.getOneDangerously(req.params.id);
    res.status(200).json(response);
  } catch(e) {
    console.error(e.message);
    next(e);
  }
});

module.exports = router;