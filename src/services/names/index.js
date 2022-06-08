const db = require('../database');

const getAll = async () => {
  const data= await db.query('SELECT * FROM names');
  return data.rows;
};
  
const getOne = async (paramId) => {
  const data = await db.query('SELECT * FROM names WHERE id = $1', [paramId]);
  return data.rows[0]; // Returns an array, we only want 1 row
};
  
const getOneDangerously = async (paramId) => {
  const data = await db.query(`SELECT * FROM names WHERE id=${paramId}`);
  return data.rows[0];
};
  
module.exports ={
  getAll,
  getOne,
  getOneDangerously
};