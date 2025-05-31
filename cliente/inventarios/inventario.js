document.getElementById('formulario-inventario').addEventListener('submit', async (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(e.target).entries());

  const res = await fetch('/api/inventario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });

  const resultado = await res.json();
  if (resultado.exito) {
    alert('Producto agregado exitosamente');
    e.target.reset();
    cargarInventario();
  } else {
    alert('Error al agregar producto');
  }
});

async function cargarInventario() {
  const res = await fetch('/api/inventario');
  const inventario = await res.json();

  const contenedor = document.getElementById('lista-inventario');
  contenedor.innerHTML = '<h2>Inventario</h2>' + inventario.map(item => `
    <div>
      <strong>${item.producto}</strong> - ${item.cantidad} unidades - ${item.estadoProducto}
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', cargarInventario);
const express = require('express');
const app = express();
const port = 3000;
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgres://usuario:clave@localhost:5432/tu_base_datos' });

app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/inventario', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM INVENTARIO ORDER BY productoID DESC');
  res.json(rows);
});

app.post('/api/inventario', async (req, res) => {
  const {
    producto, cantidad, descripcion, precioCompra, precioVenta,
    estadoProducto, marcaProducto, proveedor, ubicacion
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO INVENTARIO (producto, cantidad, descripcion, precioCompra, precioVenta,
        estadoProducto, marcaProducto, proveedor, ubicacion)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [producto, cantidad, descripcion, precioCompra, precioVenta,
       estadoProducto, marcaProducto, proveedor, ubicacion]
    );
    res.json({ exito: true });
  } catch (error) {
    console.error(error);
    res.json({ exito: false });
  }
});

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));
async function cargarInventario() {
  const res = await fetch('/api/inventario');
  const inventario = await res.json();

  const contenedor = document.getElementById('lista-inventario');
  if (inventario.length === 0) {
    contenedor.innerHTML = '<p>No hay productos en inventario.</p>';
    return;
  }

  const tabla = `
    <table class="tabla-inventario">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Descripción</th>
          <th>Precio Compra</th>
          <th>Precio Venta</th>
          <th>Estado</th>
          <th>Marca</th>
          <th>Proveedor</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        ${inventario.map(item => `
          <tr>
            <td>${item.productoid}</td>
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>${item.descripcion}</td>
            <td>$${item.preciocompra}</td>
            <td>$${item.precioventa}</td>
            <td>${item.estadoproducto}</td>
            <td>${item.marcaproducto}</td>
            <td>${item.proveedor}</td>
            <td>${item.ubicacion}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  contenedor.innerHTML = tabla;
}
