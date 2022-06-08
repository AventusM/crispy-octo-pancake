const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('names.db'), {fileMustExist: true});

const query = (sqlQuery, params = []) => {
  return db.prepare(sqlQuery).all(params);
};

const run = (sqlQuery, params = []) => {
  return db.prepare(sqlQuery).run(params);
};


module.exports = {
  query,
  run
};