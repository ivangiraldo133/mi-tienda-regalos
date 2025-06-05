import {
  // getAllUsuarios,
  createingreso,
  // actualizarUsuario
} from '../models/ingresoModel.mjs';



export async function guardaringreso(req, res) {
  const {Usuario,Dirreción,Teléfono,DescripcióndelPedido,EstadodelaCuenta,EstadodelPedido,Observación,AjuantarComprobante} = req.body;

  try {
    const nuevoUsuario = await createingreso(Usuario,Dirreción,Teléfono,DescripcióndelPedido,EstadodelaCuenta,EstadodelPedido,Observación,AjuantarComprobante);
    res.status(201).json(nuevoingreso);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar el ingreso');
  }
} 

