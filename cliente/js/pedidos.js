function abrirWhatsApp(mensaje) {
  const numero = "573233148887";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

function mostrarMensaje(producto) {
  const mensajeDiv = document.getElementById("mensaje");
  if (mensajeDiv) {
    mensajeDiv.classList.remove("oculto");
  }
  abrirWhatsApp(`Solicito opciones de diseño para ${producto}`);
}

function mostrarCategoria(categoria) {
  const galeria = document.getElementById('galeria');
  const categorias = document.getElementById('categorias') || document.getElementById('menu-categorias');
  galeria.innerHTML = '';
  categorias.classList.add('oculto');
  galeria.classList.remove('oculto');

  if (imagenes[categoria]) {
    imagenes[categoria].forEach(({ src, desc }) => {
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `
        <img src="${src}" alt="${desc}" />
        <p>${desc}</p>
        <button onclick="abrirWhatsApp('Me interesa hacer un pedido de ${desc}')">
          <i class="fas fa-shopping-cart"></i> Comprar ahora
        </button>
        <button onclick="mostrarMensaje('${desc}')">
          <i class="fas fa-pencil-alt"></i> Opciones de diseño
        </button>
      `;
      galeria.appendChild(item);
    });
  } else {
    galeria.innerHTML = '<p>Categoría no encontrada</p>';
  }
}
const imagenes = {
  "Bandejas personalizadas": [
    { src: "imagenes/Bandejas personalizadas/Bandeja 1.jpg", desc: "Bandeja 1" },
    { src: "imagenes/Bandejas personalizadas/Bandeja 2.jpg", desc: "Bandeja 2" },
    { src: "imagenes/Bandejas personalizadas/Bandeja 3.jpg", desc: "Bandeja 3" },
    { src: "imagenes/Bandejas personalizadas/Bandeja 4.jpg", desc: "Bandeja 4" },
    { src: "imagenes/Bandejas personalizadas/Bandeja 5.jpg", desc: "Bandeja 5" },
    { src: "imagenes/Bandejas personalizadas/Bandeja 6.jpg", desc: "Bandeja 6" }
  ],
  "tazas personalizadas": [
    { src: "imagenes/tazas personalizadas/taza 1.jpg", desc: "taza 1" },
    { src: "imagenes/tazas personalizadas/taza 2.jpg", desc: "taza 2" },
    { src: "imagenes/tazas personalizadas/taza 5.jpg", desc: "taza 5" },
    { src: "imagenes/tazas personalizadas/taza 6.jpg", desc: "taza 6" },
    { src: "imagenes/tazas personalizadas/taza 7.jpg", desc: "taza 7" },
    { src: "imagenes/tazas personalizadas/taza 8.jpg", desc: "taza 8" },
    { src: "imagenes/tazas personalizadas/taza 9.jpg", desc: "taza 9" }
  ],
  "cajas personalizadas": [
    { src: "imagenes/cajas personalizadas/caja 1.jpg", desc: "Caja 1" },
    { src: "imagenes/cajas personalizadas/caja 2.jpg", desc: "Caja 2" },
    { src: "imagenes/cajas personalizadas/caja 3.jpg", desc: "Caja 3" },
    { src: "imagenes/cajas personalizadas/caja 4.jpg", desc: "Caja 4" },
    { src: "imagenes/cajas personalizadas/caja 5.jpg", desc: "Caja 5" },
    { src: "imagenes/cajas personalizadas/caja 6.jpg", desc: "Caja 6" },
    { src: "imagenes/cajas personalizadas/caja 7.jpg", desc: "Caja 7" },
    { src: "imagenes/cajas personalizadas/caja 8.jpg", desc: "Caja 8" },
    { src: "imagenes/cajas personalizadas/caja 9.jpg", desc: "Caja 9" },
    { src: "imagenes/cajas personalizadas/caja 10.jpg", desc:"Caja 10" }
  ],
  "cuadros": [
    { src: "imagenes/cuadros/cuadro 1.jpg", desc: "Cuadro 1" },
    { src: "imagenes/cuadros/cuadro 2.jpg", desc: "Cuadro 2" },
    { src: "imagenes/cuadros/cuadro 3.jpg", desc: "Cuadro 3" },
    { src: "imagenes/cuadros/cuadro 4.jpg", desc: "Cuadro 4" },
    { src: "imagenes/cuadros/cuadro 5.jpg", desc: "Cuadro 5" },
    { src: "imagenes/cuadros/cuadro 6.jpg", desc: "Cuadro 6" },
    { src: "imagenes/cuadros/cuadro 7.jpg", desc: "Cuadro 7" },
    { src: "imagenes/cuadros/cuadro 8.jpg", desc: "Cuadro 8" },
    { src: "imagenes/cuadros/cuadro 9.jpg", desc: "Cuadro 9" },
    { src: "imagenes/cuadros/cuadro 10.jpg", desc: "Cuadro 10" },
    { src: "imagenes/cuadros/cuadro 11.jpg", desc: "Cuadro 11" }
  ],
  "Papeleria creativa": [
    { src: "imagenes/papeleria creativa/botella 1.jpg", desc: "botella 1" },
    { src: "imagenes/papeleria creativa/botella 2.jpg", desc: "botella 2" },
    { src: "imagenes/papeleria creativa/botella 3.jpg", desc: "botella 3" },
    { src: "imagenes/papeleria creativa/botella 4.jpg", desc: "botella 4" },
    { src: "imagenes/papeleria creativa/invitacion 1.jpg", desc: "invitacion 1" },
    { src: "imagenes/papeleria creativa/vaso 1.jpg", desc: "vaso 1" },
    { src: "imagenes/papeleria creativa/vaso 2.jpg", desc: "vaso 2" },
    { src: "imagenes/papeleria creativa/vaso 3.jpg", desc: "vaso 3" },
    { src: "imagenes/papeleria creativa/recordatorio 1.jpg", desc: "recordatorio 1" },
    { src: "imagenes/papeleria creativa/recordatorio 2.jpg", desc: "recordatorio 2" },
    { src: "imagenes/papeleria creativa/recordatorio 3.jpg", desc: "recordatorio 3" },
    { src: "imagenes/papeleria creativa/recordatorio 4.jpg", desc: "recordatorio 4" },
    { src: "imagenes/papeleria creativa/recordatorio 5.jpg", desc: "recordatorio 5" },
    { src: "imagenes/papeleria creativa/recordatorio 6.jpg", desc: "recordatorio 6" },
    { src: "imagenes/papeleria creativa/recordatorio 7.jpg", desc: "recordatorio 7" },
    { src: "imagenes/papeleria creativa/recordatorio 8.jpg", desc: "recordatorio 8" },
    { src: "imagenes/papeleria creativa/recordatorio 10.jpg", desc: "recordatorio 10" }
  ],
  "Especiales": [
    { src: "imagenes/Especiales/imagen 1.jpg", desc: "imagen 1" },
    { src: "imagenes/Especiales/imagen 3.jpg", desc: "imagen 3" },
    { src: "imagenes/Especiales/imagen 4.jpg", desc: "imagen 4" },
    { src: "imagenes/Especiales/imagen 5.jpg", desc: "imagen 5" },
    { src: "imagenes/Especiales/imagen 6.jpg", desc: "imagen 6" },
    { src: "imagenes/Especiales/imagen 7.jpg", desc: "imagen 7" },
    { src: "imagenes/Especiales/imagen 8.jpg", desc: "imagen 8" },
    { src: "imagenes/Especiales/imagen 10.jpg", desc: "imagen 10" },
    { src: "imagenes/Especiales/imagen 11.jpg", desc: "imagen 11" },
    { src: "imagenes/Especiales/imagen 12.jpg", desc: "imagen 12" },
    { src: "imagenes/Especiales/imagen 13.jpg", desc: "imagen 13" },
    { src: "imagenes/Especiales/imagen 14.jpg", desc: "imagen 14" },
    { src: "imagenes/Especiales/imagen 15.jpg", desc: "imagen 15" },
    { src: "imagenes/Especiales/imagen 17.jpg", desc: "imagen 17" },
    { src: "imagenes/Especiales/imagen 18.jpg", desc: "imagen 18" }
  ],
  "caketopper": [
    { src: "imagenes/caketopper/caketopper 1.jpg", desc: "caketopper 1" },
    { src: "imagenes/caketopper/caketopper 2.jpg", desc: "caketopper 2" },
    { src: "imagenes/caketopper/caketopper 4.jpg", desc: "caketopper 4" },
    { src: "imagenes/caketopper/caketopper 5.jpg", desc: "caketopper 5" },
    { src: "imagenes/caketopper/caketopper 6.jpg", desc: "caketopper 6" },
    { src: "imagenes/caketopper/caketopper 7.jpg", desc: "caketopper 7" },
    { src: "imagenes/caketopper/caketopper 8.jpg", desc: "caketopper 8" },
    { src: "imagenes/caketopper/caketopper 9.jpg", desc: "caketopper 9" },
    { src: "imagenes/caketopper/caketopper 10.jpg", desc: "caketopper 10" },
    { src: "imagenes/caketopper/caketopper 11.jpg", desc: "caketopper 11" },
    { src: "imagenes/caketopper/caketopper 12.jpg", desc: "caketopper 12" },
    { src: "imagenes/caketopper/caketopper 13.jpg", desc: "caketopper 13" },
    { src: "imagenes/caketopper/caketopper 14.jpg", desc: "caketopper 14" },
    { src: "imagenes/caketopper/caketopper 15.jpg", desc: "caketopper 15" },
    { src: "imagenes/caketopper/caketopper 16.jpg", desc: "caketopper 16" },
    { src: "imagenes/caketopper/caketopper 17.jpg", desc: "caketopper 17" },
    { src: "imagenes/caketopper/caketopper 18.jpg", desc: "caketopper 18" },
    { src: "imagenes/caketopper/caketopper 19.jpg", desc: "caketopper 19" },
    { src: "imagenes/caketopper/caketopper 20.jpg", desc: "caketopper 20" },
    { src: "imagenes/caketopper/caketopper 21.jpg", desc: "caketopper 21" }
  ],
  "ramos de rosas eternas": [
    { src: "imagenes/ramos de rosas eternas/ramo 1.jpg", desc: "ramo 1" },
    { src: "imagenes/ramos de rosas eternas/ramo 2.jpg", desc: "ramo 2" },
    { src: "imagenes/ramos de rosas eternas/ramo 3.jpg", desc: "ramo 3" },
    { src: "imagenes/ramos de rosas eternas/ramo 4.jpg", desc: "ramo 4" },
    { src: "imagenes/ramos de rosas eternas/ramo 5.jpg", desc: "ramo 5" },
    { src: "imagenes/ramos de rosas eternas/ramo 6.jpg", desc: "ramo 6" },
    { src: "imagenes/ramos de rosas eternas/ramo 7.jpg", desc: "ramo 7" },
    { src: "imagenes/ramos de rosas eternas/ramo 8.jpg", desc: "ramo 8" },
    { src: "imagenes/ramos de rosas eternas/ramo 9.jpg", desc: "ramo 9" },
    { src: "imagenes/ramos de rosas eternas/ramo 10.jpg", desc: "ramo 10" },
    { src: "imagenes/ramos de rosas eternas/ramo 11.jpg", desc: "ramo 11" },
    { src: "imagenes/ramos de rosas eternas/ramo 12.jpg", desc: "ramo 12" },
    { src: "imagenes/ramos de rosas eternas/ramo 13.jpg", desc: "ramo 13" },
    { src: "imagenes/ramos de rosas eternas/ramo 14.jpg", desc: "ramo 14" },
    { src: "imagenes/ramos de rosas eternas/ramo 15.jpg", desc: "ramo 15" },
    { src: "imagenes/ramos de rosas eternas/ramo 16.jpg", desc: "ramo 16" },
    { src: "imagenes/ramos de rosas eternas/ramo 17.jpg", desc: "ramo 17" }
  ],
  "Decoracion con globos": [
    { src: "imagenes/Decoracion con globos/decoracion 1.jpg", desc: "decoracion 1" },
    { src: "imagenes/Decoracion con globos/decoracion 2.jpg", desc: "decoracion 2" },
    { src: "imagenes/Decoracion con globos/decoracion 3.jpg", desc: "decoracion 3" },
    { src: "imagenes/Decoracion con globos/decoracion 4.jpg", desc: "decoracion 4" }
  ]
};

// Mostrar las imágenes cuando se hace clic en una categoría
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-categorias');
  const galeria = document.getElementById('galeria');

  menu.addEventListener('click', e => {
    if (e.target && e.target.matches('li[data-categoria]')) {
      const categoria = e.target.getAttribute('data-categoria');
      mostrarImagenes(categoria);
    }
  });

  function mostrarImagenes(categoria) {
    galeria.innerHTML = '';

    if (imagenes[categoria]) {
      imagenes[categoria].forEach(img => {
        const item = document.createElement('div');
        item.classList.add('imagen-item');
        item.innerHTML = `
          <img src="${img.src}" alt="${img.desc}">
          <p>${img.desc}</p>
        `;
        galeria.appendChild(item);
      });
    } else {
      galeria.innerHTML = `<p>No hay imágenes disponibles para esta categoría.</p>`;
    }
  }
});


// Inicializar eventos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Evento para mostrar imágenes por categoría
  document.querySelectorAll('#menu-categorias li').forEach(li => {
    li.addEventListener('click', () => {
      const categoria = li.getAttribute('data-carpeta');
      mostrarCategoria(categoria);
    });
  });

  // Mostrar número de pago al hacer clic
  window.mostrarNumero = function (elemento) {
    const numero = elemento.querySelector(".numero-pago");
    const todosNumeros = document.querySelectorAll(".numero-pago");

    todosNumeros.forEach(n => {
      if (n !== numero) {
        n.classList.remove("mostrar");
      }
    });

    numero.classList.toggle("mostrar");
  };

    // Pedidos.js
document.getElementById('nequi-pago').addEventListener('click', () => {
  alert('Puedes realizar el pago a través de Nequi a este número: +57 323 314 8887');
});

document.getElementById('daviplata-pago').addEventListener('click', () => {
  alert('Puedes realizar el pago a través de Daviplata a este número: +57 323 314 8887');
});

});
// Refrescar página al hacer clic en "Inicio"
const btnInicio = document.querySelector('button[data-carpeta="btnInicio"]');
if (btnInicio) {
  btnInicio.addEventListener('click', () => {
    location.reload();
  });
}
function mostrarMenu() {
  const categorias = document.getElementById('menu-categorias');
  categorias.classList.remove('oculto');
  document.getElementById('galeria').classList.add('oculto');
  document.getElementById('mensaje').classList.add('oculto');
}



// Ruta para cargar las categorías y productos
app.get('/categorias', (req, res) => {
  res.json({
    categorias: [
      { nombre: 'Bandejas personalizadas', ruta: 'bandejas' },
      { nombre: 'Tazas personalizadas', ruta: 'tazas' },
      { nombre: 'cajas personalizadas', ruta: 'caja' },
      { nombre: 'cuadros', ruta: 'cuadro' },
      { nombre: 'Papeleria creativa', ruta: 'botella,invitacion,recordatorio,vaso' },
      { nombre: 'Especiales', ruta: 'imagen' },
      { nombre: 'caketopper', ruta: 'caketopper' },
      { nombre: 'ramos de rosas eternas', ruta: 'ramos' },
      { nombre: 'Decoracion con globos', ruta: 'decoracion' },
      // Agrega más categorías según lo necesites
    ]
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
app.get('/categorias/:categoria', (req, res) => {
  const categoria = req.params.categoria;


  // Aquí debes cargar las imágenes de la categoría específica, puedes hacer algo como esto:
  const imagenes = obtenerImagenesPorCategoria(categoria);
});

// Escuchar clics en elementos con atributo data-numero
document.querySelectorAll('[data-numero]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault(); // evita redirección si es un <a>
    
    const numero = el.getAttribute('data-numero');
    const mensaje = document.getElementById('mensaje-pago');
    const texto = document.getElementById('texto-mensaje');

    texto.textContent = `Realiza el pago al número: ${numero}`;
    mensaje.classList.remove('oculto');

    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
      mensaje.classList.add('oculto');
    }, 4000);
  });
});
