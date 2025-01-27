let numero;
numero=parseInt(prompt("Introduce un número :"));
document.write("<br>El número es el:" +numero);
if (numero > 0) 
{
    document.write("<br>El número es positivo.");
} 
else if (numero < 0)
{
    document.write("<br>El número es negativo.");
} 
else 
{
     document.write("<br>El número es cero.");
}