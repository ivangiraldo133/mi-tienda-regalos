import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import loginRoutes from './app/routes/usuarioRoutes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "cliente"
app.use(express.static(path.join(__dirname, 'cliente')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta para categorías
app.get('/categorias', (req, res) => {
  res.json({
    categorias: [
      { nombre: 'Bandejas personalizadas', ruta: 'Bandejas personalizadas' },
      { nombre: 'Tazas personalizadas', ruta: 'tazas personalizadas' },
      { nombre: 'Cajas personalizadas', ruta: 'cajas personalizadas' },
      { nombre: 'Cuadros', ruta: 'cuadros' },
      { nombre: 'Papeleria creativa', ruta: 'Papeleria creativa' },
      { nombre: 'Especiales', ruta: 'Especiales' },
      { nombre: 'Caketopper', ruta: 'caketopper' },
      { nombre: 'Ramos de rosas eternas', ruta: 'ramos de rosas eternas' },
      { nombre: 'Decoracion con globos', ruta: 'Decoracion con globos' }
    ]
  });
});



// Rutas API
app.use('/', loginRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
app.post('/api/pedidos', (req, res) => {
  // lógica para guardar pedido
  res.json({ success: true });
});








