const mysql = require('mysql2/promise.js');

const pool = createPool({
  hot: 'localhost',
  user: 'tiago',
  password: '1234',
  database: 'captura_leads_db'
});

module.exports = pool;
