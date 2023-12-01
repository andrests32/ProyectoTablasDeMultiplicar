// Modulo de logica
// import swal from "sweetalert";

// swal ("HOLA MUNDO")

export function tablaDel2() {
  console.log("Prueba de que el modulo si funciono..");

  let a = 1;
  let b = 2;
  let respuestasTablaDel2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
  // respuestasTablaDel2.shift();

  let multiplicacion = a * b;
  // let respuesta = "";
  for (let i = 0; i < respuestasTablaDel2.length; i++) {
    const cicloRespuesta = respuestasTablaDel2[i];
    console.log(cicloRespuesta);

    alert("CUANTO ES 2 X 1 = ?");
    respuesta = parseInt(prompt());
   
    if (cicloRespuesta === 2) {
      alert("Buena respuesta")

    } else if (cicloRespuesta < 2 || cicloRespuesta > 2){
      alert("No es la respuesta correcta");

    }
};



// alert("Muy bien, 2 x 1 = 2");
//       alert("CUANTO ES 2 X 2 = ?");
//       respuesta = parseInt(prompt());
//       alert("Muy bien, 2 x 2 = 4");
//       alert("CUANTO ES 2 X 3 = ?");
//       respuesta = parseInt(prompt());
//       alert("Muy bien, 2 x 3 = 6");
