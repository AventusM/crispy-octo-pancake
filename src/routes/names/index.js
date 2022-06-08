const express = require('express');
const router = express.Router();
const services = require('../../services');

router.get('/', async (req, res, next) => {
  try {
    let response;
    if(req.query.id){
      response = await services.names.getOne(req.query.id);
    } else {
      response = await services.names.getAll();
    }
    res.status(200).json(response);
  } catch(e) {
    console.error(e.message);
    next(e);
  }
});

router.get('/unsafe', async (req, res) => {
  try {
    const response = await services.names.getOneDangerously(req.params.id);
    res.status(200).json(response);
  } catch(e) {
    console.error(e.message);
  }
});

module.exports = router;