const db = require('../database');

const getAll = () => {
  return db.query('SELECT * FROM name');
};

const getOne = (paramId) => {
  const sqlQuery = 'SELECT * FROM name WHERE id=' + paramId;
  const data = db.query(sqlQuery);
  console.log('Data:', data);
  return data[0]; // Returns an array, we only want 1 row
};

const getOneDangerously = (paramId) => {
  return db.query(`SELECT * FROM name WHERE id=${paramId} OR 1=1`);
};

module.exports ={
  getAll,
  getOne,
  getOneDangerously
};