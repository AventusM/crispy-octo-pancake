const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('names.db'), {fileMustExist: true});

const query = (query, params = []) => {
  return db.prepare(query).all(params);
};

const run = (query, params = []) => {
  return db.prepare(query).run(params);
};


module.exports = {
  query,
  run
};