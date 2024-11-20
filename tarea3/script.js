const dirimagenes = [
  "img/imagen0.jpg",
  "img/imagen2.jpg",
  "img/imagen3.jpg",
  "img/imagen4.jpg",
  "img/imagen5.jpg",
];

const anteriorb = document.getElementById("anteriorb");
const siguienteb = document.getElementById("siguienteb");
const imagen0 = document.getElementById("imagen0");
const numero = document.getElementById("numero");

let estado = 0;

function actualizargaleria() {
  imagen0.src = dirimagenes[estado];
  numero.textContent = "Imagen " + (estado + 1) + " de " + dirimagenes.length;
  if (estado === 0) {
    anteriorb.disabled = true;
  } else {
    anteriorb.disabled = false;
  }
  if (estado === dirimagenes.length - 1) {
    siguienteb.disabled = true;
  } else {
    siguienteb.disabled = false;
  }
}

anteriorb.addEventListener("click", function () {
  if (estado > 0) {
    estado--;
    actualizargaleria();
  }
});
siguienteb.addEventListener("click", function () {
  if (estado < dirimagenes.length - 1) {
    estado++;
    actualizargaleria();
  }
});

actualizargaleria();
