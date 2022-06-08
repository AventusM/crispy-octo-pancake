const db = require('../database');

const getAll = async () => {
  const data= await db.query('SELECT * FROM names');
  return data.rows;
};
  
const getOne = async (paramId) => {
  const sqlQuery = 'SELECT * FROM names WHERE id=' + paramId;
  const data = await db.query(sqlQuery);
  console.log('Data:', data);
  return data[0]; // Returns an array, we only want 1 row
};
  
const getOneDangerously = async (paramId) => {
  const data = await db.query(`SELECT * FROM names WHERE id=${paramId} OR 1=1`);
  return data;
};
  
module.exports ={
  getAll,
  getOne,
  getOneDangerously
};