import {
  // getAllUsuarios,
  createUsuario,
  // actualizarUsuario
} from '../models/usuarioModel.mjs';



export async function guardarUsuario(req, res) {
  const {Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena} = req.body;

  try {
    const nuevoUsuario = await createUsuario(Nombre, Apellidos, Telefono, CorreoElectronico, Contrasena);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar el usuario');
  }
} 

