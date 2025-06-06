document.addEventListener('DOMContentLoaded', () => {
  const botonPedido = document.getElementById('boton-tu-pedido');
  const botonNuevo = document.querySelector('.abrirModal.soloAdmin[data-modal="modalNuevoPedido"]');
  const seccionPedidos = document.getElementById('seccion-pedidos');
  const formPedido = document.querySelector('.formulario'); // contenedor del formulario

  // Mostrar/Ocultar tabla con el botón "Mostrar Tabla"
  if (botonPedido && seccionPedidos && formPedido) {
    botonPedido.addEventListener('click', async () => {
      const tablaVisible = seccionPedidos.classList.toggle('oculto');
      seccionPedidos.style.display = tablaVisible ? 'none' : 'block';

      // Ocultar formulario cuando muestro tabla
      if (!tablaVisible) {
        formPedido.style.display = 'none';
      }

      botonPedido.textContent = tablaVisible ? '📋 Mostrar Tabla' : '❌ Ocultar Tabla';

      if (!tablaVisible) {
        try {
          const res = await fetch('/pedidos');
          if (!res.ok) throw new Error('Error al consultar pedidos');
          const pedidos = await res.json();
          insertarFilas(pedidos);
        } catch (err) {
          console.error('Error al cargar pedidos:', err);
          alert('No se pudieron cargar los pedidos');
        }
      }
    });
  }

  // Mostrar formulario y ocultar tabla al hacer click en "Nuevo Pedido"
  if (botonNuevo && seccionPedidos && formPedido) {
    botonNuevo.addEventListener('click', () => {
      formPedido.style.display = 'block';
      seccionPedidos.style.display = 'none';
      seccionPedidos.classList.add('oculto');
      botonPedido.textContent = '📋 Mostrar Tabla';
    });
  }

  // Envío de formulario y botón cancelar
  const form = document.querySelector('.formPedido');
  const cerrarBtn = form.querySelector('.cerrarModal');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch('/ingreso', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok) {
          alert('✅ Pedido enviado correctamente');
          form.reset();
          formPedido.style.display = 'none';
          seccionPedidos.style.display = 'block';
          seccionPedidos.classList.remove('oculto');
          botonPedido.textContent = '❌ Ocultar Tabla';

          // Recargar tabla con datos nuevos
          const res = await fetch('/pedidos');
          const pedidos = await res.json();
          insertarFilas(pedidos);
        } else {
          alert(result.message || '❌ Error al enviar el pedido');
        }
      } catch (error) {
        console.error('Error en el envío:', error);
        alert('❌ Ocurrió un error al enviar el pedido');
      }
    });

    cerrarBtn.addEventListener('click', () => {
      form.reset();
      formPedido.style.display = 'none';
    });
  }
});

function insertarFilas(pedidos) {
  const tbody = document.querySelector('#tabla-estados tbody');
  tbody.innerHTML = '';

  pedidos.forEach((pedido) => {
    // Suponiendo que comprobante es un JSON con las rutas de archivos
    let comprobanteHTML = '—';
    if (pedido.adjuntar_comprobante) {
      try {
        const archivos = JSON.parse(pedido.adjuntar_comprobante);
        comprobanteHTML = archivos.map(a => `<a href="/uploads/${a}" target="_blank">📎</a>`).join(' ');
      } catch {
        comprobanteHTML = '—';
      }
    }

    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${pedido.nombre || '—'}</td>
      <td>${pedido.direccion || '—'}</td>
      <td>${pedido.telefono || '—'}</td>
      <td>${pedido.descripcion_pedido || '—'}</td>
      <td>${pedido.estado_cuenta || '—'}</td>
      <td>${pedido.estado_pedido || '—'}</td>
      <td>${comprobanteHTML}</td>
    `;
    tbody.appendChild(fila);
  });
}
