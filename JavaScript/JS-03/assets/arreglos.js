/* var nombre = "Leo";

if(true){
    console.log(nombre);
} */

const numeros = [2, 4, 6, 57, 200];
let suma = 0;

/* forEach
recorre todo el arreglo y ejecuta el codigoque le indiquemos sobre los valores guardados */

/* numeros.forEach(function sumar(elemento){
    suma = suma + elemento;
    return suma;
}); 
console.log(suma);
*/

numeros.forEach((el, indice, arreglo) =>{
    console.log(el, indice, arreglo);
});

/* map */
/* genera una copia del arreglo original */

let nuevoArr = numeros.map((el, idx, arr) => {
    return el * el
});
console.log(nuevoArr);

/* filter */
/* crea una copia del arreglo y nos permite filtrar */

const frutas = ["papaya", "manzana", "naranja", "uva"];

let frutaFiltrada = frutas.filter((fruta) => fruta.length >= 3);

console.log(frutaFiltrada);
