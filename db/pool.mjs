import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tienda_virtual',
  password: '1234',
  port: 5432,
});


