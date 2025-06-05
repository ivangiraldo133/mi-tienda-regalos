document.addEventListener('DOMContentLoaded', () => {

  // --- Funcionalidad para abrir/cerrar modales y enviar formularios dentro de modales ---
  const abrirModalBtns = document.querySelectorAll('.abrirModal');

  abrirModalBtns.forEach(btn => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const cerrarBtn = modal.querySelector('.cerrarModal');
    const form = modal.querySelector('form');

    // Abrir modal
    btn.addEventListener('click', () => {
      modal.classList.add('mostrar');
      modal.classList.remove('oculto');
    });

    // Cerrar modal
    cerrarBtn.addEventListener('click', () => {
      modal.classList.remove('mostrar');
      modal.classList.add('oculto');
      form.reset();
    });

    // Enviar formulario del modal
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      try {
      const response = await fetch('/api/pedidos', {
  method: 'POST',
  body: formData,
});

                const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('La respuesta no es JSON válida');
        }

        const result = await response.json();

        if (result.success) {
          alert('✅ Pedido guardado correctamente');
          form.reset();
          modal.classList.remove('mostrar');
          modal.classList.add('oculto');
        } else {
          alert('❌ Error al guardar el pedido');
        }
      } catch (error) {
        console.error('Error al enviar:', error);
        alert('❌ Ocurrió un error al enviar el pedido');
      }
    });
  });

  // --- Toggle de la tabla de pedidos ---
  const botonPedido = document.getElementById('boton-tu-pedido');
  const seccionPedidos = document.getElementById('seccion-pedidos');
  const galeria = document.getElementById('galeria');
  const menuCategorias = document.getElementById('menu-categorias');

  if (botonPedido) {
    botonPedido.addEventListener('click', () => {
      const estaOculta = seccionPedidos.classList.toggle('oculto');
      const estaVisible = !estaOculta;

      if (estaVisible) {
        galeria?.classList.add('oculto');
        menuCategorias?.classList.add('oculto');
        botonPedido.textContent = "❌ Ocultar Tabla";
      } else {
        galeria?.classList.remove('oculto');
        menuCategorias?.classList.remove('oculto');
        botonPedido.textContent = "📋 Mostrar Tabla";
      }
    });
  }

  // --- Formulario principal de registro (fuera del modal) ---
  const registroForm = document.getElementById("registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const usuario = document.getElementById("Usuario").value.trim();
      const direccion = document.getElementById("Direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const descripcionPedido = document.getElementById("DescripcionDelPedido").value.trim();
      const estadoCuenta = document.getElementById("EstadoDeLaCuenta").value;
      const estadoPedido = document.getElementById("EstadoDelPedido").value;
      const observacion = document.getElementById("observacion").value;
      const comprobanteInput = document.getElementById("comprobanteAdjunto");
      const comprobanteAdjunto = comprobanteInput?.files[0] || null;

      const body = {
        usuario,
        direccion,
        telefono,
        descripcionPedido,
        estadoCuenta,
        estadoPedido,
        observacion,
        comprobanteAdjunto: comprobanteAdjunto ? comprobanteAdjunto.name : null
      };

      try {
        const res = await fetch("http://localhost:3000/ingreso.html", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();

        if (res.ok) {
          alert(`¡Registro exitoso! Pedido para: ${data.ingreso}`);
          e.target.reset();
        } else {
          alert(data.error || "Error al registrar.");
        }
      } catch (error) {
        alert("Error en el servidor.");
        console.error(error);
      }
    });
  }

  // --- Cargar datos a tabla (aquí debe ir tu lógica para cargar datos) ---
  const tbody = document.querySelector('#tbody');
  // Aquí debes agregar la lógica si quieres cargar datos dinámicamente

});
