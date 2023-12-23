import { createConnection } from 'mysql';

const db = createConnection({
  host: '127.0.0.1',
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

export default db;
