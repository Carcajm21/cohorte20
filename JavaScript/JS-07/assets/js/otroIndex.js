//forma 1

//1 llamar al contenedor

const imagen = document.getElementsByClassName('contenedor')[0];

console.log(imagen);

//2 Crear un elemento

const nuevaImg = document.createElement("img");

//3 Modificar atrivutos

nuevaImg.src = "https://placeimg.com/200/200/nature";

nuevaImg.alt = "Imagen de naturaleza";

//4 Incertar el elemento

imagen.appendChild(nuevaImg);


/* 
Otra forma de crar objetos
*/

//1 llamar al elemento contenedor

const imagen2 = document.getElementById('img');

//2 

imagen2.innerHTML = `
    <img src="https://placeimg.com/200/200/animals", alt="Imagen de animales"/>
`;

//Crear una lista a partir de los elementos guardados en un arreglo

//Insertarla en el documento para que se pueda mostrar

const nombres = ["Pedro", "Juan", "Sonia", "Miguel"];
const lista = document.getElementById("lista1");

/* for(const i=0; i<nombres.length; i++){
    const li = document.createElement('li');
    nombres.appendChild(li);
}
 */
nombres.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    lista.appendChild(li);
});


const frutas = ["Manzana", "Limon", "Pera", "Uva"];

const lista2 = document.getElementById('lista2');

frutas.forEach((el) => {
    lista2.innerHTML += `
        <li>${el}</li>
    `;
});




