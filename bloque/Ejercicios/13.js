let valor1;
let valor2;
let valor3;
valor1=parseInt(prompt("Introduce el primer valor:"));
valor2=parseInt(prompt("Introduce el segundo valor:"));
valor3=parseInt(prompt("Introduce el tercer valor:"));
if(valor1==valor2 && valor2==valor3)
{
    let suma=valor1+valor2;
    let resultado=suma*valor3;
    document.write("El resultado es:" +resultado);
}
else
{
    document.write("<br>Los tres valores no son iguales");
    document.write("<br>Los tres valores introducidos son:" +valor1+", "+valor2+" y "+valor3);
}