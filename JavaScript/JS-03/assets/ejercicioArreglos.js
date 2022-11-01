/* crear una aplicación con JS, recibir una palabra y va a regresar la palabra invertida */

let nombre = String(prompt("¿Cúal es la palabra?"));


function reverse(s){
    return s.split("").reverse().join("");
}

document.write(reverse(nombre));


