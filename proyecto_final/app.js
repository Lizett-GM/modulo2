const atras = document.querySelector(".carrusel-boton.atras");
const siguiente = document.querySelector(".carrusel-boton.siguiente");
const carruselimagen = document.querySelectorAll(".carrusel-imagen");
let c = 0;

// Mostrar slide actual
function mostrar(index) {
  for (var i = 0; i < carruselimagen.length; i++) {
    carruselimagen[i].classList.remove("activo");
    if (i === index) {
      carruselimagen[i].classList.add("activo");
    }
  }
}

// carruselimagen a la slide anterior
atras.addEventListener("click", function () {
  c = (c - 1 + carruselimagen.length) % carruselimagen.length;
  mostrar(c);
});

// carruselimagen a la siguiente slide
siguiente.addEventListener("click", function () {
  c = (c + 1) % carruselimagen.length;
  mostrar(c);
});

// Cambiar carruselimagen automáticamente cada 5 segundos
setInterval(function () {
  c = (c + 1) % carruselimagen.length;
  mostrar(c);
}, 5000);

// Mostrar la primera slide al cargar
mostrar(c);

// //BOTON
// var accionboton = document.querySelector(".boton");

// // Funcionalidad del botón
// accionboton.addEventListener("click", function () {
//   alert("¡Botón del carrusel clickeado!");
// });

// moviendo las imagenes
document.querySelectorAll(".fondo-tarjeta img").forEach((img) => {
  const hoverSrc = img.getAttribute("data-hover");
  const originalSrc = img.src;

  img.addEventListener("mouseover", function () {
    img.src = hoverSrc;
  });

  img.addEventListener("mouseout", function () {
    img.src = originalSrc;
  });
});
