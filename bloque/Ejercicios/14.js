let sueldo;
let antigüedad;
sueldo=parseInt(prompt("Introduce el sueldo del operario:"));
antiguedad=parseInt(prompt("Introduce los años de antigüedad del operario:"));
if (sueldo<500 && antiguedad>=10)    
{ 
    /*Aumento del 20% si el sueldo es inferior a 500 y la antigüedad es de 10 años o más*/
    sueldo=sueldo*1.20;
    document.write("Sueldo con aumento del 20%:"+sueldo);
} 
else 
if (sueldo<500 && antiguedad<10) 
{
    /*Aumento del 5% si el sueldo es inferior a 500 y la antigüedad es menor a 10 años*/
    sueldo=sueldo*1.05; // Aumento del 5%
    document.write("Sueldo con aumento del 5%:" +sueldo);
} 
else 
{
    /*Sueldo igual o mayor a 500*/
    document.write("Sueldo sin cambios:" +sueldo);
}