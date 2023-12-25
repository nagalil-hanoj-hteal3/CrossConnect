const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'CrossConnect!',
  database: 'CrossConnect',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;
