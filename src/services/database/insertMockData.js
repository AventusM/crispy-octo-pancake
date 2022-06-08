const db = require('./index');

const insertData = async () => {
  const [name] = process.argv.slice(2);
  try {
    await db.query(
      'INSERT INTO names (name) VALUES ($1)',
      [name]
    );
    console.log(`Added a new name to the database: ${name}`);
  } catch (e) {
    console.log(e);
  }
};

insertData();