function mostrarNombreEdad()
{
        let nombre;
        let edad;
        nombre=prompt("Introducir tu nombre: ");
        edad=prompt("Introducir tu edad: ");
        return "El nombre es :" +nombre+  "<br>y la edad es:" +edad;
}
let resultado=mostrarNombreEdad();
document.write(resultado)