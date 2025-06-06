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
