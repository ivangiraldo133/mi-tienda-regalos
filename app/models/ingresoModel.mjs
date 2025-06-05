import { pool } from '../../db/pool.mjs';

export async function createingreso(Usuario,Dirreción,Teléfono,DescripcióndelPedido,EstadodelaCuenta,EstadodelPedido,Observación,AjuantarComprobante) {
    const result = await pool.query(
         'INSERT INTO ingreso (Usuario,Dirreción,Teléfono,DescripcióndelPedido,EstadodelaCuenta,EstadodelPedido,Observación,AjuantarComprobante) VALUES ($1, $2, $3, $4, $5 ,$6 ,$7 ,$8) RETURNING *',
        [Usuario,Dirreción,Teléfono,DescripcióndelPedido,EstadodelaCuenta,EstadodelPedido,Observación,AjuantarComprobante]
    );
    return result.rows[0];
}
