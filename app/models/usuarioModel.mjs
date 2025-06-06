import { pool } from '../../db/pool.mjs';

export async function createUsuario(Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena) {
    const result = await pool.query(
        'INSERT INTO usuario (nombre, apellidos,telefono,correoelectronico,contrasena) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena]
    );
    return result.rows[0];
}

export async function buscarUsuarioPorCorreoYPassword(correoelectronico, contrasena) {
    const resultado = await pool.query(
        'SELECT * FROM usuario WHERE correoelectronico = $1 AND contrasena = $2',
        [correoelectronico, contrasena]
    );
    return resultado.rows[0];
}


export async function crearInventario(nombre, direccion, telefono, descripcion_pedido, estado_cuenta, estado_pedido, observacion, adjuntar_comprobante) {
    const result = await pool.query(
        'INSERT INTO pedidos (nombre, direccion,telefono,descripcion_pedido,estado_cuenta,estado_pedido,observacion,adjuntar_comprobante) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [nombre, direccion, telefono, descripcion_pedido, estado_cuenta, estado_pedido, observacion, adjuntar_comprobante]
    );
    return result.rows[0];
}

export async function obtenerPedidos() {
    const result = await pool.query('SELECT * FROM pedidos ORDER BY 1 ASC');
    return result.rows;
}

