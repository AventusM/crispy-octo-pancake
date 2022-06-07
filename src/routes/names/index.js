const express = require('express');
const router = express.Router();
const services = require('../../services');

router.get('/', (req, res, next) => {
  try {
    let response;
    if(req.query.id){
      response = services.names.getOne(req.query.id);
    } else {
      response = services.names.getAll();
    }
    res.status(200).json(response);
  } catch(e) {
    console.error(e.message);
    next(e);
  }
});

router.get('/unsafe', (req, res) => {
  try {
    const oneName = services.names.getOneDangerously(req.params.id);
    res.status(200).json(oneName);
  } catch(e) {
    console.error(e.message);
  }
});

module.exports = router;