let numero1; 
let numero2;

 numero1=parseInt(prompt("Introducir el primer número: "));
 numero2=parseInt(prompt("Introducir el segundo número: "));
 document.write("<br>Los numeros son : "+numero1+" y "+numero2);

if(numero1>numero2)
{
 let suma=numero1+numero2;
 let diferencia=numero1-numero2;
 document.write("<br>La suma de los dos numeros es:" +suma);
 document.write("<br>La diferencia de los dos numeros es:" +diferencia);
}
else
{
 let producto=numero1*numero2
 let division=numero1/numero2
 document.write("<br>El producto de los dos numeros es:" +producto);
 document.write("<br>La division de los dos numeros es:" +division);
}    