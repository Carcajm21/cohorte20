const frutas = ["🍊", "Manzana", "Guayaba", "Platano"];
console.log(frutas);

console.log(frutas.length);

frutas.push("Sandia", "Limon");
console.log(frutas);

let num = frutas.push("Sandia", "Limon");
console.log(frutas);
console.log(num);

frutas.unshift("Guanabana");
console.log(frutas);

let elemento = frutas.pop();
console.log(frutas);
console.log(elemento);

frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("Manzana"));
console.log(frutas.indexOf("Platano"));

frutas.reverse();
console.log(frutas);

frutas.sort();
console.log(frutas);

const numeros = [4, 567, 2, 4566, 45, 78, 1];

numeros.sort();
console.log(numeros);
