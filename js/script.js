
//let nom = prompt("Hola, bienvenido a la tienda. ¿Cuál es tu nombre?");
//let productos = [socks, neceser, bolso, mediasL, mediasSp, matero]

//et suma = 0;

//function mopciones() {
 // let eleccion = parseInt(prompt("Hola " + nom + ". Ingresa la elección de producto:\n1- Socks\n2- Neceser\n3- Bolso\n4- Medias largas\n5- Medias sin pie\n6- Matero"));
 // return eleccion;
//}

//function preguntarSiguienteProducto(producto, cantidad) {
  //et seguir = prompt("La cantidad de " + producto + " es de " + cantidad + ". ¿Deseas agregar más productos? (Si/No)").toLowerCase();
  //return seguir;
//}

//let guardan = mopciones();

//while (true) {
  //switch (guardan) {
   // case 1:
   //   socks++;
   //   break;

   // case 2:
   //   neceser++;
   //   break;

   // case 3:
   //   bolso++;
   // break;

    //case 4:
    //  mediasL++;
     // break;

   // case 5:
    //  mediasSp++;
    //  break;

   // case 6:
   //   matero++;
    //  break;

   // default:
   //   if (guardan !== 1 && guardan !== 2 && guardan !== 3 && guardan !== 4 && guardan !== 5 && guardan !== 6) {
   //     alert("Esa opción no existe");
   //   }
   //   guardan = mopciones();
   //   continue;
 // }//

 // let seguir;
//
 // if (guardan === 1) {
 //   seguir = preguntarSiguienteProducto("Socks", socks);
 // } else if (guardan === 2) {
 //   seguir = preguntarSiguienteProducto("Neceser", neceser);
 // } else if (guardan === 3) {
 //   seguir = preguntarSiguienteProducto("Bolso", bolso);
 // } else if (guardan === 4) {
 //   seguir = preguntarSiguienteProducto("Medias largas", mediasL);
 // } else if (guardan === 5) {
 //   seguir = preguntarSiguienteProducto("Medias sin pie", mediasSp);
 // } else if (guardan === 6) {
 //   seguir = preguntarSiguienteProducto("Matero", matero);
 // }

 // if (seguir === "no") {
 //   alert("Estos son los productos que elegiste y su cantidad:\n1- Socks = " + socks + "\n2- Neceser = " + neceser + "\n3- Bolso = " + bolso + "\n4- Medias Largas = " + mediasL + "\n5- Medias sin pie = " + mediasSp + "\n6- Matero = " + matero);
 //   break;
 // } else if (seguir !== "si") {
 //   alert("Opción inválida. Inténtalo nuevamente.");
 //   continue;
 // }

 // guardan = mopciones();
//}

let nom = prompt("Hola, bienvenido a la tienda. ¿Cuál es tu nombre?");
let productos = [
  { nombre: "Socks", cantidad: 0 },
  { nombre: "Neceser", cantidad: 0 },
  { nombre: "Bolso", cantidad: 0 },
  { nombre: "Medias largas", cantidad: 0 },
  { nombre: "Medias sin pie", cantidad: 0 },
  { nombre: "Matero", cantidad: 0 }
];

function mostrarOpciones() {
  let opciones = "";

  for (let i = 0; i < productos.length; i++) {
    opciones += (i + 1) + "- " + productos[i].nombre + "\n";
  }

  return parseInt(prompt("Hola " + nom + ". Ingresa la elección de producto:\n" + opciones));
}

function preguntarSiguienteProducto(producto) {
  let seguir = prompt("La cantidad de " + producto.nombre + " es de " + producto.cantidad + ". ¿Deseas agregar más productos? (Si/No)").toLowerCase();
  return seguir;
}

let eleccion = mostrarOpciones();

while (true) {
  let producto = productos[eleccion - 1];

  if (producto) {
    producto.cantidad++;
  } else {
    alert("Esa opción no existe");
    eleccion = mostrarOpciones();
    continue;
  }

  let seguir = preguntarSiguienteProducto(producto);

  if (seguir === "no") {
    let listaProductos = "";

    for (let i = 0; i < productos.length; i++) {
      listaProductos += productos[i].nombre + " = " + productos[i].cantidad + "\n";
    }

    alert("Estos son los productos que elegiste y su cantidad:\n" + listaProductos);
    break;
  } else if (seguir !== "si") {
    alert("Opción inválida. Inténtalo nuevamente.");
  }

  eleccion = mostrarOpciones();
}



