const { Pool } = require('pg');

const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:5432/postgres`;
const pool = new Pool({
  connectionString,
});

module.exports = pool;