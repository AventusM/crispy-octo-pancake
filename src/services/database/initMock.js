const db = require('./index');

const init = async () => {
  const [name] = process.argv.slice(2);
  try {
    // Use to initialize
    await db.query(
      `CREATE TABLE IF NOT EXISTS names (
        id SERIAL PRIMARY KEY,
        name VARCHAR(16) NOT NULL)`
    );

    await db.query(
      'INSERT INTO names (name) VALUES ($1)',
      [name]
    );
    console.log(`Added a new name to the database: ${name}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = init;