const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tullu', // sin tilde para evitar problemas
  password: 'marialucia',
  port: 5432,
});

module.exports = pool;
