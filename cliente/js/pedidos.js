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
    { src: "imagenes/Bandejas personalizadas/Bandeja 1.jpg", desc: "Caja Floral 1", descripcionProducto: "Hermosa caja de madera decorada con panel diseñado con mensaje al gusto del cliente, mariposa y cinta de seda, incluye 9 Rosas eternas del color que elijas y 4 bombones de chocolate",precio:"80.000"},
    { src: "imagenes/Bandejas personalizadas/Bandeja 2.jpg", desc: "Ancheta Polaroid 2", descripcionProducto: "Preciosa caja de madera decorada con fotos polaroid y globo Foil, Croassant en desechable, Tea Hatsu 250 ml, 1 paquete de barquillos Piazza, 1 ponquesito Gusto tart cake y Gusto Midi roll, barra de chocolate Hersheys Milk, Bianchi choco galletas y Tarjeta",precio:"60.000"},
    { src: "imagenes/Bandejas personalizadas/Bandeja 3.jpg", desc: "Frutty Amor 3", descripcionProducto: "Caja Madera decorada con globo Foil con lazo de cinta de seda, 4 flores artificiales y Oso de Peluche pequeño, 1 barra de Chocolate Jumbo Jet Maní, frutas (fresa y uvas) empacadas en Postreras desechables y Manzana", precio: "70.000" },
    { src: "imagenes/Bandejas personalizadas/Bandeja 4.jpg", desc: "Bandeja Reina 4", descripcionProducto: "Hermosa bandeja  decorada con mantel de tela de Organza, cinta de Seda, Cinta de Borlas, Luces Led y globo Foil Corona, Desechable con Ponque Pingüino Maricela y velita, frasco con maní, Labial Mágico, Crema corporal, Rubor Mayomi, Galletas Canastitas de Mora, Champaña Magestic, Chocobombones Bianchi", precio: "80.000" },
   
  ],
  "tazas personalizadas": [
    { src: "imagenes/tazas personalizadas/taza 1.jpg", desc: "taza 1", descripcionProducto: "Hermosas tazas personalizables con tu nombre para cualquier  ocasión", precio: "25.000" },
    { src: "imagenes/tazas personalizadas/taza 3.jpg", desc: "taza 3", descripcionProducto: "Tazas personalizadas al gusto del cliente cada una vale 25.000", precio: "25.000" },
    { src: "imagenes/tazas personalizadas/taza 4.jpg", desc: "taza 4", descripcionProducto: "Taza personalizada especial mente para el día de la madre se le puede agregar nombre mensajes cortos etc. Dependiendo de lo que quieras ponerle varia su precio", precio: "25.000" },
    { src: "imagenes/tazas personalizadas/taza 5.jpg", desc: "taza 5", descripcionProducto: "Taza personalizada con un mensaje en especifico al gusto de cliente  soporte de taza tan bien personalizable como muestra el ejemplo se pueden poner fotos , mensaje , etc.", precio: "30.000" },
    { src: "imagenes/tazas personalizadas/taza 6.jpg", desc: "taza 6", descripcionProducto: "Tazas personalizadas para empresas con diferentes productos varia precio según lo elegido", precio: "40.000" },
  ],
  "cajas personalizadas": [
    { src: "imagenes/cajas personalizadas/caja 1.jpg", desc: "caja sorpresa 1", descripcionProducto: "Hermosas cajas personalizadas con diferentes motivos en la parte exterior en la parte de a dentro trae dulcería surtida ", precio: "20.000" },
    { src: "imagenes/cajas personalizadas/caja 2.jpg", desc: "caja sorpresa 2", descripcionProducto: "Hermosas cajas personalizadas con diferentes motivos en la parte exterior en la parte de a dentro trae dulcería surtida ", precio: "20.000" },
    { src: "imagenes/cajas personalizadas/caja 5.jpg", desc: "caja de los 5 sentidos 5", descripcionProducto: "Hermosa caja con colores personalizables al gusto del cliente la caja de los 5 es el regalo perfecto para cualquier ocasión ", precio: "60.000" },
    { src: "imagenes/cajas personalizadas/caja 6.jpg", desc: "caja explosiva 6", descripcionProducto: "hermosa caja explosiva con mensaje personalizado en la parte de afuera en la tapa en la parte de adentro trae colas de fotos personalizables una dedicatoria al gusto del cliente ", precio: "35.000" },
    { src: "imagenes/cajas personalizadas/caja 7.jpg", desc: "caja aniversario 7", descripcionProducto: "Caja de cumpleaños con dedicatoria y colas de fotos personalizable en el exterior en la parte de adentro de la caja lleva productos escogidos por el cliente ", precio: "72.000" },
    { src: "imagenes/cajas personalizadas/caja 8.jpg", desc: "caja carrito cervezero 8", descripcionProducto: "Caja diseñada para nosotros los hombres una caja personalizable según el gusto del cliente  varia precio según lo escogido ", precio: "30.000" },
    { src: "imagenes/cajas personalizadas/caja 9.jpg", desc: "caja paris 9", descripcionProducto: "Es una caja personalizada referente a parís se puede modificar con diferente motivo según al gusto del cliente en la parte de adentro se agregan productos escogidos por el cliente ", precio: "26.000" },
  ],
  "cuadros": [
    { src: "imagenes/cuadros/cuadro 1.jpg", desc: "Cuadro de aniversario 1", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    { src: "imagenes/cuadros/cuadro 2.jpg", desc: "Cuadro del dia del profe 2", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "30.000" },
    { src: "imagenes/cuadros/cuadro 3.jpg", desc: "Cuadro del dia del profe 3", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "30.000" },
    { src: "imagenes/cuadros/cuadro 4.jpg", desc: "Cuadro de feliz dia de la madres 4", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    { src: "imagenes/cuadros/cuadro 5.jpg", desc: "Cuadro de feliz dia de la madres 5", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    { src: "imagenes/cuadros/cuadro 6.jpg", desc: "Cuadro de feliz dia de la madres 6", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    { src: "imagenes/cuadros/cuadro 8.jpg", desc: "Cuadro de aniversario 8", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    { src: "imagenes/cuadros/cuadro 9.jpg", desc: "Cuadro Dedicatoria  9", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    { src: "imagenes/cuadros/cuadro 10.jpg", desc: "Cuadro 10", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "50.000" },
    { src: "imagenes/cuadros/cuadro 11.jpg", desc: "Cuadro de aniversario 11", descripcionProducto: "Se puede poner diferentes diseños  al gusto del cliente", precio: "40.000" },
    
  ],
  "Papeleria creativa": [
    { src: "imagenes/Papeleria creativa/botella 1.jpg", desc: "Botellas de agua 1", descripcionProducto: "Botellas de agua personalizadas para cumpleaños al gusto del cliente según la personalización varia su precio", precio: "2.000" },
    { src: "imagenes/Papeleria creativa/botella 2.jpg", desc: "Botellas de agua 2", descripcionProducto: "Botellas de agua personalizadas para cumpleaños, fiestas de bautizo , grados", precio: "2.000" },
    { src: "imagenes/Papeleria creativa/botella 4.jpg", desc: "Termo para Bevidas 4", descripcionProducto: "Termo de bebidas personalizables para cumpleaños, bautizos ,primera comuniones ", precio: "3.000" },
    { src: "imagenes/Papeleria creativa/invitacion 1.jpg", desc: "Invitacion 1", descripcionProducto: "Invitaciones personalizables para cualquier ocasión cumpleaños,grados.", precio: "1.000" },
    { src: "imagenes/Papeleria creativa/invitacion 2.jpg", desc: "Invitacion 2", descripcionProducto: "Invitaciones personalizables para cualquier ocasión cumpleaños,grados.", precio: "1.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 1.jpg", desc: "Recordatorio cumpleaños", descripcionProducto: "El recordatorio de cumpleaños es personalizable en este caso trae unos crayolas un termo de agua una cartilla con actividades didácticas y el nombre del niño o la niña. ", precio: "15.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 2.jpg", desc: "Recordatorio 2", descripcionProducto: "Recordatorio para toda ocasión son unas gafas de forma de corazón en una base echa a medida según el pedido del cliente el mensaje es personalizable .", precio: "2.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 3.jpg", desc: "Recordatorio 3", descripcionProducto: "Recordatorio personalizados a pedido del cliente llevan dulcería personalizada ", precio: "3.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 5.jpg", desc: "Recordatorio 5", descripcionProducto: "Este recordatorio tiene una cartilla didáctica y colores personalizados para un cumpleaños pero se puede cambiar según el pedido del cliente", precio: "8.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 7.jpg", desc: "Recordatorio 7", descripcionProducto: "Recordatorio para el día del maestro un dulce con un mensaje en forma de lápiz es personalizable para cualquier ocasión", precio: "1.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 8.jpg", desc: "Recordatorio 8", descripcionProducto: "Recordatorio con dulcería variable personalizables para cualquier ocasión ", precio: "6.000" },
    { src: "imagenes/Papeleria creativa/recordatorio 10.jpg", desc: "Recordatorio  10", descripcionProducto: "", precio: "2.000" },
    { src: "imagenes/Papeleria creativa/vaso 1.jpg", desc: "Vaso 1", descripcionProducto: "Vaso personalizado con dulcería surtida resaltadores y lapiceros y con una base donde poner el vaso personalizable a gusto del cliente", precio: "20.000" }, 
    { src: "imagenes/Papeleria creativa/vaso 2.jpg", desc: "Vaso 2", descripcionProducto: "Vasos personalizados con dulcería surtida a gusto del cliente para cualquier ocasión ", precio: "5.000" },
    { src: "imagenes/Papeleria creativa/vaso 3.jpg", desc: "Vaso 3", descripcionProducto: "Vasos personalizados para cualquier ocasión según pedido del cliente precio varia", precio: "2.000" },
  
    
  ],
  "Especiales": [
    { src: "imagenes/Especiales/imagen 1.jpg", desc: "Velas personalizadas 1", descripcionProducto: "son unas velas personalizadas con un mensaje lleva dedicatoria para cualquier ocasión", precio: "4.000" },
    { src: "imagenes/Especiales/imagen 3.jpg", desc: "Bolsitas dulceras 3", descripcionProducto: "Son unas gomas y unos chocolates están empacados en una bolsa fuerte transparente personalizado al gusto", precio: "4.000" },
    { src: "imagenes/Especiales/imagen 4.jpg", desc: "Velas personalizadas 4", descripcionProducto: "son unas velas personalizadas con un mensaje lleva dedicatoria para cualquier ocasión", precio: "4.000" },
    { src: "imagenes/Especiales/imagen 7.jpg", desc: "Velas personalizadas 7", descripcionProducto: "Son una velas personalizadas y adicional llevan un lazo alrededor de la vela se puede decorar de diferentes formas al gusto del cliente", precio: "3.000" },
    { src: "imagenes/Especiales/imagen 13.jpg", desc: "Dulceros Halloween 13", descripcionProducto: "Llevan dulcería surtida con diferentes personajes relacionados a Halloween se puede personalizar como muestra la foto para cumpleaños, etc. al gusto del cliente", precio: "15.000" },
    { src: "imagenes/Especiales/imagen 14.jpg", desc: "Marca página personalizado 14", descripcionProducto: "Lleva una libreta y un marcador de buena calidad es personalizable al gusto del cliente", precio: "15.000" },
    { src: "imagenes/Especiales/imagen 15.jpg", desc: "Caja birrete 15", descripcionProducto: "Birrete personalizado al gusto de cliente se hace con cartulina o con diferentes materiales según el pedido del cliente ", precio: "3.000" },
    { src: "imagenes/Especiales/imagen 17.jpg", desc: "Kit maestro personalizado 17", descripcionProducto: "Tiene una libreta un marcador y un borrador todo personalizado", precio: "30.000" },
    { src: "imagenes/Especiales/imagen 18.jpg", desc: "Kit borrador y marcador 18", descripcionProducto: "Kit personalizable para cualquier ocasión según las necesidades del cliente", precio: "12.000" },
    
    
  ],
  "caketopper": [
    { src: "imagenes/caketopper/caketopper 1.jpg", desc: "caketopper 1", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 3.jpg", desc: "caketopper graduación 3", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "20.000" },
    { src: "imagenes/caketopper/caketopper 5.jpg", desc: "caketopper dinosaurios 5", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "25.000" },
    { src: "imagenes/caketopper/caketopper 6.jpg", desc: "caketopper  6", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 7.jpg", desc: "caketopper  7", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "25.000" },
    { src: "imagenes/caketopper/caketopper 8.jpg", desc: "caketopper moana 8", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 9.jpg", desc: "caketopper cocacola 9", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 10.jpg", desc: "caketopper moto 10", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "20.000" },
    { src: "imagenes/caketopper/caketopper 11.jpg", desc: "caketopper 11", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 12.jpg", desc: "caketopper 12", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 13.jpg", desc: "caketopper 13", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 14.jpg", desc: "caketopper 14", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "30.000" },
    { src: "imagenes/caketopper/caketopper 15.jpg", desc: "caketopper 15", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 17.jpg", desc: "caketopper 17", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
    { src: "imagenes/caketopper/caketopper 18.jpg", desc: "caketopper 18", descripcionProducto: "Caketopper son personalizables para cualquier tipo de pastel según la necesidad del cliente se pueden hacer de diferentes motivos según pedido del cliente", precio: "15.000" },
   
   
],
  "ramos de rosas eternas": [
    { src: "imagenes/ramos de rosas eternas/ramo 1.jpg", desc: "Ramo de rosas eternas 1", descripcionProducto: "Es un ramo que lleva 6 rosas amarrillas lleva un estuche  de lapiceros de todos los colores y 4 fotos ", precio: "80.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 2.jpg", desc: "Ramo de una rosa 2", descripcionProducto: "es una rosa color azul con un mensaje personalizado", precio: "15.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 4.jpg", desc: "Base ramo con peluche 4", descripcionProducto: "Lleva 6 rosas eternas los colores de las rosas pueden variar tiene un peluche en su base y una mariposa color dorado ", precio: "60.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 5.jpg", desc: "Ramos de una rosa 5", descripcionProducto: "llevan solo una rosa cada uno con mensaje personalizado dentro del mensaje lleva foto. valor por unida", precio: "15.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 7.jpg", desc: "Ramo de una rosa 7", descripcionProducto: "es una rosa color azul con mensaje personalizado", precio: "15.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 9.jpg", desc: "Ramo de 3 rosas 9", descripcionProducto: "ramo de 3 rosas color amarrillo con mensaje", precio: "30.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 11.jpg", desc: "Ramo de graduación 11", descripcionProducto: "tiene 6 rosas color piel peluche con birrete 1 mariposa decorativa", precio: "80.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 12.jpg", desc: "Ramo 12", descripcionProducto: "ramo de 10 rosas de diferente color con cholcolates adicionales lleva 1 mariposa y un mensaje personalizado", precio: "90.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 14.jpg", desc: "Ramo 14", descripcionProducto: "es un ramo con rosas negras y rojas personalizable para cualquier ocasión", precio: "80.000" },
    { src: "imagenes/ramos de rosas eternas/ramo 17.jpg", desc: "Ramo libreta 6", descripcionProducto: "ramo con 3 rosas color piel con una libreta en la base pensado para regalos de oficina", precio: "50.000" },
  ],
  "Decoracion con globos": [
    { src: "imagenes/Decoracion con globos/decoracion 1.jpg", desc: "Decoración con globos graduación 1", descripcionProducto: "Son decoraciones armadas según se requieran para diferente festividades cumpleaños , graduaciones , fiesta de bautizo  se toman medidas después se le informa al cliente y procedemos a decorar", precio: "120.000" },
    { src: "imagenes/Decoracion con globos/decoracion 2.jpg", desc: "Decoración con globos bautizó 2", descripcionProducto: "Son decoraciones armadas según se requieran para diferente festividades cumpleaños , graduaciones , fiesta de bautizo  se toman medidas después se le informa al cliente y procedemos a decorar", precio: "150.000" },
    { src: "imagenes/Decoracion con globos/decoracion 3.jpg", desc: "Decoración con globos cumpleaños 3", descripcionProducto: "Son decoraciones armadas según se requieran para diferente festividades cumpleaños , graduaciones , fiesta de bautizo  se toman medidas después se le informa al cliente y procedemos a decorar", precio: "120.000" },
    { src: "imagenes/Decoracion con globos/decoracion 4.jpg", desc: "Decoración con globos personalizables 4", descripcionProducto: "Son decoraciones armadas según se requieran para diferente festividades cumpleaños , graduaciones , fiesta de bautizo  se toman medidas después se le informa al cliente y procedemos a decorar", precio: "120.000" },
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
