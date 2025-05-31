import { pool } from '../../db/pool.mjs';

export async function createUsuario(Nombre,Apellidos,Telefono,CorreoElectronico,Contrasena) {
    const result = await pool.query(
        'INSERT INTO usuario (nombre, apellidos,telefono,correoelectronico,contrasena) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [Nombre,Apellidos,Telefono,CorreoElectronico,Contrasena]
    );
    return result.rows[0];
}
