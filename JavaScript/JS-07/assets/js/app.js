const titulo = document.getElementById('titulo');
const parrafos = document.getElementsByClassName('parrafo');

titulo.textContent = "Hola"
parrafos[0].innerHTML = "Hola soy un parrafo"

console.log(titulo.textContent);
console.log(parrafos[1].textContent);

//css background-color   -- sanake case
//js backgroundcolor     -- camel case

/* parrafos[1].style.color = "red";
parrafos[1].style.backgroundColor = "yellow"; */

/* console.log(parrafos[1].classList.contains('coloresFeos')); */

parrafos[1].classList.add('coloresFeos');

const padre = document.getElementById('padre');

const enlace = document.createElement("a");
enlace.href = "https://www.google.com";
enlace.textContent = "Ir a google";

/* document.body.appendChild(enlace); */

/* document.body.insertAdjacentElement("afterbegin", enlace); */

padre.appendChild(enlace);

console.log(document.body);