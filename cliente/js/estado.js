const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // para archivos estáticos

// Datos simulados (en memoria, reemplaza con DB real)
let estadosPedidos = [];
let idCounter = 1;

// Obtener todos los estados
app.get('/api/estados', (req, res) => {
  res.json(estadosPedidos);
});

// Agregar nuevo estado
app.post('/api/estados', (req, res) => {
  const { PedidoID, Estado, Comentarios } = req.body;
  if (!PedidoID || !Estado) {
    return res.status(400).json({ error: 'PedidoID y Estado son obligatorios' });
  }
  const nuevoEstado = {
    EstadoPedidoID: idCounter++,
    PedidoID,
    Estado,
    FechaCreacion: new Date(),
    FechaActualizacion: new Date(),
    Comentarios: Comentarios || ''
  };
  estadosPedidos.push(nuevoEstado);
  res.status(201).json(nuevoEstado);
});

// Actualizar estado
app.put('/api/estados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const estado = estadosPedidos.find(e => e.EstadoPedidoID === id);
  if (!estado) return res.status(404).json({ error: 'No encontrado' });

  const { Estado: nuevoEstado, Comentarios } = req.body;
  if (nuevoEstado) estado.Estado = nuevoEstado;
  if (Comentarios !== undefined) estado.Comentarios = Comentarios;
  estado.FechaActualizacion = new Date();

  res.json(estado);
});

// Eliminar estado
app.delete('/api/estados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = estadosPedidos.findIndex(e => e.EstadoPedidoID === id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  estadosPedidos.splice(index, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
const form = document.getElementById('form-estado');
  const tbody = document.querySelector('#tabla-estados tbody');

  async function fetchEstados() {
    const res = await fetch('/api/estados');
    const data = await res.json();
    tbody.innerHTML = '';
    data.forEach(e => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${e.EstadoPedidoID}</td>
        <td>${e.PedidoID}</td>
        <td>${e.Estado}</td>
        <td>${new Date(e.FechaCreacion).toLocaleString()}</td>
        <td>${new Date(e.FechaActualizacion).toLocaleString()}</td>
        <td>${e.Comentarios}</td>
        <td class="acciones">
          <button onclick="eliminarEstado(${e.EstadoPedidoID})">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nuevoEstado = {
      PedidoID: Number(form.pedidoId.value),
      Estado: form.estado.value,
      Comentarios: form.comentarios.value.trim()
    };
    const res = await fetch('/api/estados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoEstado)
    });
    if (res.ok) {
      form.reset();
      fetchEstados();
    } else {
      alert('Error al guardar el estado');
    }
  });

  async function eliminarEstado(id) {
    if (!confirm('¿Quieres eliminar este estado?')) return;
    const res = await fetch(`/api/estados/${id}`, { method: 'DELETE' });
    if (res.ok) {
      fetchEstados();
    } else {
      alert('Error al eliminar');
    }
  }

  // Cargar datos al inicio
  fetchEstados();