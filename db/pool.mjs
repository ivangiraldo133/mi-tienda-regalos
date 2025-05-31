import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tullú', // sin tilde para evitar problemas
  password: 'marialucia',
  port: 5432,
});


