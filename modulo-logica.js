// Modulo de logica
// import swal from "sweetalert";

const a = 1;
const b = 2;

export function tablaDel2() {
  console.log("Prueba de que el modulo si funciono..");
  
  const multiplicacion = a * b;
  
  let respuestasTablaDel2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

  // let respuesta = "";
  for (let i = 0; i < respuestasTablaDel2.length; i++) {
    const cicloRespuesta = respuestasTablaDel2[i];
    console.log(cicloRespuesta);

    alert("CUANTO ES 2 X 1 = ?");
    let respuesta = parseInt(prompt());

    if (cicloRespuesta === respuesta) {
      // respuestasTablaDel2.shift();
      alert("Buena respuesta");
    } else if (cicloRespuesta < respuesta || cicloRespuesta > respuesta) {
      alert("No es la respuesta correcta");
      break;
    } else {
      alert("Tienes dos intentos mas tu Puedo lograrlo!")
    }
  }
}

tablaDel2();

// alert("Muy bien, 2 x 1 = 2");
//       alert("CUANTO ES 2 X 2 = ?");
//       respuesta = parseInt(prompt());
//       alert("Muy bien, 2 x 2 = 4");
//       alert("CUANTO ES 2 X 3 = ?");
//       respuesta = parseInt(prompt());
//       alert("Muy bien, 2 x 3 = 6");
