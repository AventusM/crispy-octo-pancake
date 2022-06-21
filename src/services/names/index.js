const db = require('../database');

const getAll = async () => {
  const data= await db.query('SELECT * FROM names');
  return data.rows;
};
  
const getOne = async (paramId) => {
  console.log('getOne paramId =', paramId);
  const data = await db.query('SELECT * FROM names WHERE id = $1', [paramId]);
  console.log('getOne data rows =', data.rows);
  return data.rows[0]; // Returns an array, we only want 1 row
};
  
const getOneDangerously = async (paramId) => {
  console.log('getOneDangerously param id =', paramId);
  const data = await db.query(`SELECT * FROM names WHERE id=${paramId}`);
  console.log('getOneDangerously data rows =', data.rows);
  return data.rows[0];
};
  
module.exports ={
  getAll,
  getOne,
  getOneDangerously
};