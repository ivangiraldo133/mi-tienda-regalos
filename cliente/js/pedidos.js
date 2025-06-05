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
  const categorias = document.getElementById('menu-categorias');
  galeria.innerHTML = '';
  categorias.classList.add('oculto');
  galeria.classList.remove('oculto');

  if (imagenes[categoria]) {
    imagenes[categoria].forEach(({ src, desc, descripcionProducto, precio }) => {
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `
        <img src="${src}" alt="${desc}" />
        <h3>${desc}</h3>
        <p class="descripcion">${descripcionProducto || 'Descripción del producto aquí'}</p>
        <p class="precio">${precio ? `$${precio}` : 'Precio por definir'}</p>
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


// Este bloque debe estar fuera de la función para que se ejecute al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#menu-categorias li').forEach(item => {
    item.addEventListener('click', () => {
      const categoria = item.getAttribute('data-carpeta');
      mostrarCategoria(categoria);
    });
  });
});

const imagenes = {
  "Bandejas personalizadas": [
    { src: "imagenes/Bandejas personalizadas/Bandeja 1.jpg", desc: "Caja Floral 1", descripcionProducto: "Hermosa caja de madera decorada con panel diseñado con mensaje al gusto del cliente, mariposa y cinta de seda, incluye 9 Rosas eternas del color que elijas y 4 bombones de chocolate",precio:"$80.000"},
    { src: "imagenes/Bandejas personalizadas/Bandeja 2.jpg", desc: "Ancheta Polaroid 2", descripcionProducto: "Preciosa caja de madera decorada con fotos polaroid y globo Foil, Croassant en desechable, Tea Hatsu 250 ml, 1 paquete de barquillos Piazza, 1 ponquesito Gusto tart cake y Gusto Midi roll, barra de chocolate Hersheys Milk, Bianchi choco galletas y Tarjeta",precio:"$60.000"},
    { src: "imagenes/Bandejas personalizadas/Bandeja 3.jpg", desc: "Frutty Amor 3", descripcionProducto: "Caja Madera decorada con globo Foil con lazo de cinta de seda, 4 flores artificiales y Oso de Peluche pequeño, 1 barra de Chocolate Jumbo Jet Maní, frutas (fresa y uvas) empacadas en Postreras desechables y Manzana", precio: " $70.000" },
    { src: "imagenes/Bandejas personalizadas/Bandeja Reina 4.jpg", desc: "Bandeja Reina 4", descripcionProducto: "Hermosa bandeja  decorada con mantel de tela de Organza, cinta de Seda, Cinta de Borlas, Luces Led y globo Foil Corona, Desechable con Ponque Pingüino Maricela y velita, frasco con maní, Labial Mágico, Crema corporal, Rubor Mayomi, Galletas Canastitas de Mora, Champaña Magestic, Chocobombones Bianchi", precio: "$80.000" },
   
  ],
  "tazas personalizadas": [
    { src: "imagenes/tazas personalizadas/taza 1.jpg", desc: "taza 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/tazas personalizadas/taza 2.jpg", desc: "taza 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/tazas personalizadas/taza 3.jpg", desc: "taza 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/tazas personalizadas/taza 4.jpg", desc: "taza 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/tazas personalizadas/taza 5.jpg", desc: "taza 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/tazas personalizadas/taza 6.jpg", desc: "taza 6", descripcionProducto: "", precio: "" },
  ],
  "cajas personalizadas": [
    { src: "imagenes/cajas personalizadas/caja 1.jpg", desc: "caja 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/cajas personalizadas/caja 2.jpg", desc: "caja 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/cajas personalizadas/caja 3.jpg", desc: "caja 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/cajas personalizadas/caja 4.jpg", desc: "caja 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/cajas personalizadas/caja 5.jpg", desc: "caja 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/cajas personalizadas/caja 6.jpg", desc: "caja 6", descripcionProducto: "", precio: "" },
  ],
  "cuadros": [
    { src: "imagenes/cuadros/cuadro 1.jpg", desc: "cuadro 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/cuadros/cuadro 2.jpg", desc: "cuadro 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/cuadros/cuadro 3.jpg", desc: "cuadro 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/cuadros/cuadro 4.jpg", desc: "cuadro 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/cuadros/cuadro 5.jpg", desc: "cuadro 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/cuadros/cuadro 6.jpg", desc: "cuadro 6", descripcionProducto: "", precio: "" },
  ],
  "Papeleria creativa": [
    { src: "imagenes/Papeleria creativa/botella 1.jpg", desc: "papel 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/botella 2.jpg", desc: "papel 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/botella 3.jpg", desc: "papel 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/botella 4.jpg", desc: "papel 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/invitacion 1.jpg", desc: "papel 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/invitacion 2.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 1.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 2.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 3.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 4.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 5.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 6.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 7.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 8.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 9.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 10.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Papeleria creativa/recordatorio 11.jpg", desc: "papel 6", descripcionProducto: "", precio: "" },
    
  ],
  "Especiales": [
    { src: "imagenes/Especiales/imagen 1.jpg", desc: "imagen 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 3.jpg", desc: "imagen 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 4.jpg", desc: "imagen 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 5.jpg", desc: "imagen 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 6.jpg", desc: "imagen 6", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 7.jpg", desc: "imagen 7", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 8.jpg", desc: "imagen 8", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 10.jpg", desc: "imagen 10", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 11.jpg", desc:  "imagen 11", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 12.jpg", desc: "imagen 12", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 13.jpg", desc: "imagen 13", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 14.jpg", desc: "imagen 14", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 15.jpg", desc: "imagen 15", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 17.jpg", desc: "imagen 17", descripcionProducto: "", precio: "" },
    { src: "imagenes/Especiales/imagen 18.jpg", desc: "imagen 18", descripcionProducto: "", precio: "" },
    
    
  ],
  "caketopper": [
    { src: "imagenes/caketopper/caketopper 1.jpg", desc: "caketopper 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/caketopper/caketopper 2.jpg", desc: "caketopper 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/caketopper/caketopper 3.jpg", desc: "caketopper 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/caketopper/caketopper 4.jpg", desc: "caketopper 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/caketopper/caketopper 5.jpg", desc: "caketopper 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/caketopper/caketopper 6.jpg", desc: "caketopper 6", descripcionProducto: "", precio: "" },
  ],
  "ramos de rosas eternas": [
    { src: "imagenes/ramos de rosas eternas/ramo 1.jpg", desc: "ramo 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/ramos de rosas eternas/ramo 2.jpg", desc: "ramo 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/ramos de rosas eternas/ramo 3.jpg", desc: "ramo 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/ramos de rosas eternas/ramo 4.jpg", desc: "ramo 4", descripcionProducto: "", precio: "" },
    { src: "imagenes/ramos de rosas eternas/ramo 5.jpg", desc: "ramo 5", descripcionProducto: "", precio: "" },
    { src: "imagenes/ramos de rosas eternas/ramo 6.jpg", desc: "ramo 6", descripcionProducto: "", precio: "" },
  ],
  "Decoracion con globos": [
    { src: "imagenes/Decoracion con globos/decoracion 1.jpg", desc: "decoracion 1", descripcionProducto: "", precio: "" },
    { src: "imagenes/Decoracion con globos/decoracion 2.jpg", desc: "decoracion 2", descripcionProducto: "", precio: "" },
    { src: "imagenes/Decoracion con globos/decoracion 3.jpg", desc: "decoracion 3", descripcionProducto: "", precio: "" },
    { src: "imagenes/Decoracion con globos/decoracion 4.jpg", desc: "decoracion 4", descripcionProducto: "", precio: "" },
  ],
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
const modal = document.getElementById("modal-pago");
const mensajePago = document.getElementById("mensaje-pago");
const cerrarModal = document.querySelector(".cerrar-modal");

document.getElementById("nequi-pago").addEventListener("click", () => {
  mensajePago.textContent = "Puedes realizar el pago a través de Nequi al número: +57 323 314 8887";
  modal.style.display = "flex";
});

document.getElementById("daviplata-pago").addEventListener("click", () => {
  mensajePago.textContent = "Puedes realizar el pago a través de Daviplata al número: +57 323 314 8887";
  modal.style.display = "flex";
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
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
const app = {
  init: function () {
    // lógica...
  },
};

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
app.get('/categorias/:categoria', (req, res) => {
  const categoria = req.params.categoria;


  // Aquí debes cargar las imágenes de la categoría específica, puedes hacer algo como esto:
  const imagenes = obtenerImagenesPorCategoria(categoria);
});
// codigo para mostras campos para precio y descripcion de cada producto//
item.innerHTML = `
  <img src="${src}" alt="${desc}" />
  <h3>${desc}</h3>
  <p class="descripcion">${descripcionProducto || 'Descripción del producto aquí'}</p>
  <p class="precio">${precio ? `$${precio}` : 'Precio por definir'}</p>
  <button onclick="abrirWhatsApp('Me interesa hacer un pedido de ${desc}')">
    <i class="fas fa-shopping-cart"></i> Comprar ahora
  </button>
  <button onclick="mostrarMensaje('${desc}')">
    <i class="fas fa-pencil-alt"></i> Opciones de diseño
  </button>
`;
