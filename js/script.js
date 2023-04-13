let nombre = prompt("Escribí tu nombre");
let apellido = prompt("Escribí tu apellido");
let cxjuador;
alert("Hola; " + nombre +" " + apellido);
let predio = prompt("ingresar nombre del predio");
let valorcancha = prompt("ingresar valor de la cancha");
let cantijuga = prompt("ingresar cantidad de jugadores");
cantijuga = parseInt(cantijuga)
valorcancha = parseFloat(valorcancha)
cxjuador = valorcancha / cantijuga
if (cantijuga <= 9)  {
    alert("La cantidad minima de jugadores es de 10")
} else{
    alert("El valor de la cancha es de ; " + cxjuador);
}

