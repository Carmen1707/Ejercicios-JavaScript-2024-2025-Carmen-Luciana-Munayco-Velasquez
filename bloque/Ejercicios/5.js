let precio;
let cantidad;
alert("Ingresar un precio sin decimales, es decir ingresar un precio entero(1,6,3...90.etc)");
precio=parseInt((prompt("Introduzca el precio del producto:")));
cantidad=parseInt((prompt("Introduzca la cantidad de artículos que llevas:")));
document.write("El precio del producto es de:" +precio);
document.write("<br>")
document.write("La cantidad de artículos es:" +cantidad);
let total=precio*cantidad
document.write("<br>")
document.write("El total a abonar es:" + total);