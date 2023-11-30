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
 
  let input = document.getElementById("nombreIngreso").value;
  localStorage.setItem("input", input);
  document.getElementById("mostarNombre").innerHTML = input;

  function siNoIngresoNombre() {
    let inputLleno = input
    console.log(inputLleno);

    let inputVacio = (document.getElementsByClassName(
      "limpiarInput"
    )[0].value = "");

  const validacion = () => {
    return new Promise((inputLleno, inputVacio) => {
      if (true) {
        inputLleno("Si se ejecuto la promesa correctamente");
        saludarNombre.style.display = "flex";
      } else {
        inputVacio("No se ingreso ningun nombre");
        alert("Debe ingresar un nombre");
      }
    });
  };
  
  validacion()
  .then((inputLleno) => (inputLleno))
  .catch((inputVacio) => (inputVacio))
  

      

      
      // if (inputLleno == inputLleno) {
      //   console.log("Esta validando el input lleno");
        // saludarNombre.style.display = "flex";
      //   // alert("Debes ingresar un nombre Primero.")
      //   // location.reload();
      // } else {
      //   // return (saludarNombre.style.display = "flex")
      //   return;
      // }

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
    empezar.style.display = "none";
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

inicioJuegoPantalla.addEventListener("click", async function () {
  const importacionModulos = await import("./modulo-logica.js");
  importacionModulos.tablaDel2();
});
