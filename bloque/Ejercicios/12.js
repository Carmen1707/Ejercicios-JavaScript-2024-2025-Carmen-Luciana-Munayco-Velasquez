let numero;

numero=parseInt(prompt("Introduce un número entero positivo de hasta tres cifras:"));
document.write("<br>El numero introducido es:" +numero);
 
if (numero >= 1 && numero <= 999) 
{
if (numero < 10) 
{
    document.write("<br>El número tiene 1 cifra.");
} 
else
if (numero < 100) 
{
    document.write("<br>El número tiene 2 cifras.");
} 
else 
{
    document.write("<br>El número tiene 3 cifras.");
}
} 
