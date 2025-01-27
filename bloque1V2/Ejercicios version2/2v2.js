function mostrarusuarioemail()
{
    let usuario;
    let email;
    usuario=prompt("Introducir tu nombre de usuario: ");
    email=prompt("Introducir tu email: ");
    return "El nombre de usuario es :" +usuario+ "<br>y el email es:" +email;
}
let resultado=mostrarusuarioemail();
document.write(resultado)