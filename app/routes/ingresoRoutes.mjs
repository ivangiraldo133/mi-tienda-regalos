import express from 'express';
import {
    guardaringreso,
  // listarUsuarios,
  guardarUsuario,
} from '../controllers/ingresoController.mjs';

const router = express.Router();

// router.get('/ingreso', listaringreso);

router.post('/index', guardaringreso);

export default router;
app.post('/api/pedidos', (req, res) => {
  // Aquí va la lógica real para guardar el pedido en BD
  // Por ahora, simulamos respuesta exitosa
  console.log('Pedido recibido:', req.body);

  res.json({ success: true });
});
