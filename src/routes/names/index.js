const express = require('express');
const router = express.Router();
const services = require('../../services');
const db = require('../../services/database');

router.get('/', async (req, res, next) => {
  try {
    let response;
    if(req.query.id){
      const sql = 'SELECT * FROM names WHERE id=' + req.query.id;
      const data = await db.query(sql);
      response = data.rows;
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
    const oneName = await services.names.getOneDangerously(req.params.id);
    res.status(200).json(oneName);
  } catch(e) {
    console.error(e.message);
  }
});

module.exports = router;