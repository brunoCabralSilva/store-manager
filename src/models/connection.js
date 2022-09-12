const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  port: 3306,
  user: 'root',
  password: '',
  database: '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;