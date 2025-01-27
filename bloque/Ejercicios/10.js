let numero;

numero=parseInt(prompt("Introduce un número  de uno o dos dígitos (entre 1 y 99):"));
/*document.write("<br>El numero introducido es:" +numero);
if(numero>=1 && numero<=99)
{
    document.write("<br>Los numeros introducidos son correctos.");
}
else
{
    document.write("<br>Los numeros introducidos son incorrectos.");
}*/
if(numero<10)
{
    document.write("<br>El número tiene un dígito.");
}
else
{
    document.write("<br>El número tiene dos dígitos."); 
}