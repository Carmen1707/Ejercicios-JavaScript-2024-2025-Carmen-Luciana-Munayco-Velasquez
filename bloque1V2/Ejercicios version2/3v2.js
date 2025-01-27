function mostrarperimetro()
{
let numero;
numero=parseInt(prompt("Introduce la carga del lado de un cuadrado:"));
let perimetro
perimetro=numero*4
return "El perimetro del cuadrado es : " +perimetro 
}
let resultado=mostrarperimetro();
document.write(resultado)