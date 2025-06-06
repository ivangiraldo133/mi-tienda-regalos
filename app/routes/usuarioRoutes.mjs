import express from 'express';
import {
  // listarUsuarios,
  guardarUsuario,
  iniciarSesion,
  guardarInventario,
  listarPedidos
} from '../controllers/usuarioController.mjs';
import { upload } from '../../cliente/js/configUploads.mjs';

const router = express.Router();


router.post('/registro', guardarUsuario);
router.post('/login', iniciarSesion);
router.post('/ingreso', upload.array('comprobanteAdjunto', 8), guardarInventario);
router.get('/pedidos', listarPedidos);

export default router;

