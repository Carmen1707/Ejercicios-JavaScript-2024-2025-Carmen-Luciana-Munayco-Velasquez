let nota1;
let nota2;
let nota3;
nota1=parseInt(prompt("Introducir la primera nota del alumno: "));
nota2=parseInt(prompt("Introducir la segunda nota del alumno: "));
nota3=parseInt(prompt("Introducir la tercera nota del alumno: "));
document.write("<br>Las notas son : "+nota1+" , "+nota2+" y "+nota3);
let totaldenotas= nota1+nota2+nota3
let promedio=totaldenotas/3
/*document.write("<br>Las notas son : "+totaldenotas);*/
document.write("<br>El promedio es:"+promedio);
if (promedio>=4)
{
    document.write("<br> Regular");
}
else
{
    document.write("<br>Reprobado");
}