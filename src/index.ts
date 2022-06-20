let seguir: boolean = true;
let contador: number = 1;
let contraseña: string;

while (seguir === true && contador < 4) {
  contraseña = prompt("Ingrese su contraseña " + contador + " intento");
  if (contraseña === "eureka") {
    console.log("La contraseña es correcta");
    seguir = false;
  } else {
    if (contador === 3) {
      console.log("La contraseña no es correcta");
      console.log("Pero se te agotaron las tres oportunidades");
      contador = contador + 1;
    } else {
      console.log("La contraseña no es correcta");
      console.log("Intentalo de nuevo");
      contador = contador + 1;
    }
  }
}
