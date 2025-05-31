document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  if (track) {
    const images = track.innerHTML;
    track.innerHTML += images;
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("oculto");
  }

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("oculto");
  };

  // Botones para abrir modales
// Función para abrir un modal por ID
function openModal(id) {
  document.getElementById(id).classList.remove("oculto");
}

// Función para cerrar un modal por ID
function closeModal(id) {
  document.getElementById(id).classList.add("oculto");
}

// Asociar botones con modales
document.getElementById("loginBtn").addEventListener("click", function () {
  openModal("loginModal");
});

document.getElementById("abrirRegistro").addEventListener("click", function () {
  openModal("registroModal");
});

document.getElementById("abrirRecuperar").addEventListener("click", function () {
  openModal("recuperarModal");
});

// Opcional: Cerrar modal al hacer clic fuera del contenido
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("oculto");
    }
  });
});

  // Registro de usuario
  const registroForm = document.getElementById("registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const apellidos = document.getElementById("apellidos").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }


      usuarios.push({ nombre, apellidos, telefono, correo, password });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("¡Registro exitoso!");
      closeModal("registroModal");
      event.target.reset();
    });
  }
 })
 document.addEventListener('DOMContentLoaded', () => {
  // Mostrar/Ocultar Modales
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("oculto");
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("oculto");
  }

  // Botones de modales
  document.getElementById("loginBtn")?.addEventListener("click", () => openModal("loginModal"));
  document.getElementById("abrirRegistro")?.addEventListener("click", () => openModal("registroModal"));
  document.getElementById("abrirRecuperar")?.addEventListener("click", () => openModal("recuperarModal"));

  // Cerrar modal al hacer clic fuera
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.add("oculto");
    });
  });

  // Registro con base de datos
  document.getElementById("registroForm")?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/index", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nombre: nombre,
          Apellidos: apellidos,
          Telefono: telefono,
          CorreoElectronico: correo,
          Contrasena: password
        }),
      });

      const data = await res.json();
      if (data.nombre) {
        alert(`¡Registro exitoso! Bienvenido, ${data.nombre}`);
        closeModal("registroModal");
        e.target.reset();
      } else {
        alert(data.error || "Error al registrar");
      }
    } catch (error) {
      alert("Error en el servidor.");
      console.error(error);
    }

  });

  // Login con base de datos
  document.getElementById("loginForm")?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const nombre = document.getElementById("loginNombre").value.trim();
    const password = document.getElementById("loginPassword").value;

    // try {
    //   const res = await fetch("http://localhost:3000", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ nombre, password }),
    //   });

    //   const data = await res.json();
    //   if (data.Nombre) {
    //     alert(`¡Hola ${data.Nombre}!`);
    //     closeModal("loginModal");
    //     e.target.reset();
    //   } else {
    //     alert(data.error || "Nombre o contraseña incorrectos.");
    //   }
    // } catch (error) {
    //   alert("Error en el servidor.");
    //   console.error(error);
    // }

    window.location.href = '/pedidos.html';

  });




  // Recuperar contraseña (simulado)
  document.getElementById("formRecuperar")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correoRecuperar").value.trim();
    alert(`Si el correo ${correo} está registrado, recibirás instrucciones por email.`);
    closeModal("recuperarModal");
    e.target.reset();
  });
});



