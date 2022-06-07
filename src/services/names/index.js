const db = require('../database');

const getAll = () => {
  const data = db.query('SELECT * FROM name');
  return data;
};

const getOne = (paramId) => {
  const data = db.query(`SELECT * FROM name WHERE id=${paramId}`);
  console.log('Data:', data);
  return data[0]; // Returns an array, we only want 1 row
};

const getOneDangerously = (paramId) => {
  const data = db.query(`SELECT * FROM name WHERE id=${paramId} OR 1=1`);
  return data;
};

module.exports ={
  getAll,
  getOne,
  getOneDangerously
};