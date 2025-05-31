import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import loginRoutes from './app/routes/usuarioRoutes.mjs';

const app = express();
const port = 3000;

// Necesario para usar __dirname con ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "cliente"
app.use(express.static(path.join(__dirname, 'cliente')));

// Rutas API
app.use('/', loginRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
