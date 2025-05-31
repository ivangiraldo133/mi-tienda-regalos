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
  });
});
