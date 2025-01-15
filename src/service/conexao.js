const mysql = require('mysql2/promise.js');

const pool = mysql.createPool({
  hot: 'localhost',
  user: 'tiago_leads',
  password: '1234',
  database: 'captura_leads_db'
});

module.exports = pool;
