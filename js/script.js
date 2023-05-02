
let nom = prompt("Hola, bienvenido a la tienda. ¿Cuál es tu nombre?");
let socks = 0;
let neceser = 0;
let bolso = 0;
let mediasL = 0;
let mediasSp = 0;
let matero = 0;
let suma = 0;

function mopciones() {
  let eleccion = parseInt(prompt("Hola " + nom + ". Ingresa la elección de producto:\n1- Socks\n2- Neceser\n3- Bolso\n4- Medias largas\n5- Medias sin pie\n6- Matero"));
  return eleccion;
}

function preguntarSiguienteProducto(producto, cantidad) {
  let seguir = prompt("La cantidad de " + producto + " es de " + cantidad + ". ¿Deseas agregar más productos? (Si/No)").toLowerCase();
  return seguir;
}

let guardan = mopciones();

while (true) {
  switch (guardan) {
    case 1:
      socks++;
      break;

    case 2:
      neceser++;
      break;

    case 3:
      bolso++;
      break;

    case 4:
      mediasL++;
      break;

    case 5:
      mediasSp++;
      break;

    case 6:
      matero++;
      break;

    default:
      if (guardan !== 1 && guardan !== 2 && guardan !== 3 && guardan !== 4 && guardan !== 5 && guardan !== 6) {
        alert("Esa opción no existe");
      }
      guardan = mopciones();
      continue;
  }

  let seguir;

  if (guardan === 1) {
    seguir = preguntarSiguienteProducto("Socks", socks);
  } else if (guardan === 2) {
    seguir = preguntarSiguienteProducto("Neceser", neceser);
  } else if (guardan === 3) {
    seguir = preguntarSiguienteProducto("Bolso", bolso);
  } else if (guardan === 4) {
    seguir = preguntarSiguienteProducto("Medias largas", mediasL);
  } else if (guardan === 5) {
    seguir = preguntarSiguienteProducto("Medias sin pie", mediasSp);
  } else if (guardan === 6) {
    seguir = preguntarSiguienteProducto("Matero", matero);
  }

  if (seguir === "no") {
    alert("Estos son los productos que elegiste y su cantidad:\n1- Socks = " + socks + "\n2- Neceser = " + neceser + "\n3- Bolso = " + bolso + "\n4- Medias Largas = " + mediasL + "\n5- Medias sin pie = " + mediasSp + "\n6- Matero = " + matero);
    break;
  } else if (seguir !== "si") {
    alert("Opción inválida. Inténtalo nuevamente.");
    continue;
  }

  guardan = mopciones();
}

       



