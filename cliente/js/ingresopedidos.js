document.addEventListener('DOMContentLoaded', () => {
  // Obtener todos los botones para abrir modales
  const abrirModalBtns = document.querySelectorAll('.abrirModal');

  abrirModalBtns.forEach(btn => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (!modal) return;

    // Botón para cerrar modal dentro de ese modal
    const cerrarBtn = modal.querySelector('.cerrarModal');
    // Obtener el formulario dentro del modal
    const form = modal.querySelector('form');

    // Abrir modal al hacer clic en el botón
    btn.addEventListener('click', () => {
      modal.classList.add('mostrar');
      modal.classList.remove('oculto');
    });

    // Cerrar modal al hacer clic en el botón cancelar
    cerrarBtn.addEventListener('click', () => {
      modal.classList.remove('mostrar');
      modal.classList.add('oculto');
      form.reset();
    });

    // Enviar formulario
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch('/api/pedido', {
          method: 'POST',
          body: formData
        });

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


document.getElementById("registroForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const usuario = document.getElementById("Usuario").value.trim();
  const direccion = document.getElementById("Direccion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const descripcionPedido = document.getElementById("DescripcionDelPedido").value.trim();
  const estadoCuenta = document.getElementById("EstadoDeLaCuenta").value;
  const estadoPedido = document.getElementById("EstadoDelPedido").value;
  const observacion = document.getElementById("observacion").value;
  const comprobanteAdjunto = document.getElementById("comprobanteAdjunto").value;

  try {
    const res = await fetch("http://localhost:3000/pedidos.html", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuario,
        direccion,
        telefono,
        descripcionPedido,
        estadoCuenta,
        estadoPedido,
        observacion,
        comprobanteAdjunto
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(`¡Registro exitoso! Pedido para: ${data.usuario}`);
      e.target.reset();
    } else {
      alert(data.error || "Error al registrar el pedido.");
    }
  } catch (error) {
    alert("Error en el servidor.");
    console.error(error);
  }
});

  })
