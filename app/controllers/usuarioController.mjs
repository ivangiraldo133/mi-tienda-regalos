import {
  createUsuario,
  buscarUsuarioPorCorreoYPassword,
  crearInventario,
  obtenerPedidos
} from '../models/usuarioModel.mjs';



export async function guardarUsuario(req, res) {
  const { Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena } = req.body;

  try {
    const nuevoUsuario = await createUsuario(Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar el usuario');
  }
}

export async function guardarInventario(req, res) {
  const { nombre, direccion, telefono, descripcion_pedido, estado_cuenta, estado_pedido, observacion } = req.body;

  const rutasImagenes = req.files.map(file => file.filename);
  console.log('REQ BODY:', req.body);


  const adjuntar_comprobante = JSON.stringify(rutasImagenes);

  try {
    const nuevoUsuario = await crearInventario(nombre, direccion, telefono, descripcion_pedido, estado_cuenta, estado_pedido, observacion, adjuntar_comprobante);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar el usuario');
  }
}


export const iniciarSesion = async (req, res) => {
  try {
    const { correoelectronico, contrasena } = req.body;
    console.log("Datos recibidos:", correoelectronico, contrasena);
    const usuario = await buscarUsuarioPorCorreoYPassword(correoelectronico, contrasena);

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export async function listarPedidos(req, res) {
  try {
    const pedidos = await obtenerPedidos();
    res.json(pedidos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los pedidos');
  }
}
