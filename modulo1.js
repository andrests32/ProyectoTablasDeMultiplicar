const nombreId = document.getElementById("nombreId");
const ingresoNombreID = document.getElementById("ingresoNombreID");
const saludarNombre = document.getElementById("saludarNombre");
const nombreIngreso = document.getElementById("nombreIngreso");
const modal_container = document.getElementById("modal_container");
const closeMensaje = document.getElementById("closeMensaje");
const containerId = document.getElementById("containerId");
const inicioJuegoPantalla = document.getElementById("inicioJuegoPantalla");

iniciarJuego();

saludarNombre.addEventListener("click", () => {
  // nombreIngreso.style.display = "none";
  empezar.style.display = "flex";
  saludarNombre.style.display = "none";
});

ingresoNombreID.addEventListener("click", function () {
  // event.preventDefault();

  function siNoIngresoNombre() {
    let input = document.getElementById("nombreIngreso").value;
    localStorage.setItem("input", input);
    document.getElementById("mostarNombre").innerHTML = input;

    // let inputLleno = input
    // console.log(inputLleno);

    let inputVacio = (document.getElementsByClassName("limpiarInput")[0].value =
      "");
    console.log(inputVacio);

    if (input === input) {
      saludarNombre.style.display = "flex";
    } else if (inputVacio == inputVacio) {
      alert("Debes ingresar un nombre Primero.");
      // return (saludarNombre.style.display = "flex")

      console.log("Esta validando el input vacio");
      location.reload();
    }
  }

  siNoIngresoNombre();

  nombreId.style.display = "none";
  ingresoNombre();
  ventanas();
});

function ventanas() {
  empezar.addEventListener("click", () => {
    modal_container.classList.add("show");
  });

  closeMensaje.addEventListener("click", () => {
    modal_container.classList.remove("show");
    containerId.style.display = "flex";
  });

  inicioJuegoPantalla.addEventListener("click", async () => {
    empezar.style.display = "none";
    containerId.style.display = "none";
    let importacionModulos = await import("./modulo-logica.js");
    importacionModulos.tablaDel2();

    console.log(importacionModulos);
  });
}

function iniciarJuego() {
  containerId.style.display = "none";
  empezar.style.display = "none";
  saludarNombre.style.display = "none";
}

function ingresoNombre() {
  ingresoNombreID.style.display = "none";
}
