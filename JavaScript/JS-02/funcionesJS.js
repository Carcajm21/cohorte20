let miNombre = "Leo";
console.log(miNombre);

function miFuncion (){
    let nombre = "Leo";
    console.log(nombre);
}
miFuncion();

function ejemplo(){
    let valor = 7;
    valor = valor + 3;
    console.log("El resultado de valor: " + valor);
}
ejemplo();

let variableGlobal = 5;
function funcion3(){
    let variableLocal = "El valor es: ";
    console.log(variableLocal + variableGlobal);
}
funcion3();

function funcion4(valor){
    let numero = 6;
    numero = numero * valor;
    return numero;
}
let salida = funcion4(7);
console.log("El producto es: " + salida);

let miFuncion0 = function(parametro){
    parametro = parametro * 2;
    return parametro;
};
console.log("Llamando a la funcion anonima " + miFuncion0 (4));

let funcion01 = function(caracteres){
    return "Hola " +caracteres;
}("Lunes");
console.log("El resultado es: " + funcion01);

let suma = (x, y) => {
    return x+y
};
let resultado = suma (5,3);
console.log("La suma es: " + resultado);

/* function precioTotal(envio){
    precio = 23.34;
    impuesto = 1.16;
    precio = precio * impuesto + envio;
    return precio;
}
let total = precioTotal(10);
console.log("El precio total es: " + total); */

/* let precioTotal = (x, y, z) => {
    return (x * y) + z;
};
let calcularPrecioTotal = precioTotal (23.34, 1.16, 10);
console.log("Precio total: " + calcularPrecioTotal);
 */
let calcularPrecioTotal = (precio, porcentajeImpuestos) => {
    let envio = 10;
    let precioConImpuestos = ((1 + porcentajeImpuestos)/100) * precio;
    let precioTotal = (precio * precioConImpuestos) + envio;
    return precioTotal
};
let precioTotal = calcularPrecioTotal(23.34, 16);
console.log("El precio total es: " + precioTotal);

/* let miObjeto = {
    nombre: "Benito", 
    edad: 30 
};
let mensaje = "Tu nombre es " + miObjeto.nombre;
mensaje +=  " Tienes " + miObjeto["edad"] + " años"
console.log(mensaje); */

let miObjeto = {
    nombre: "Benito", 
    edad: 30,
    datos: function(){

        let mensaje = "Tu nombre es " + this.nombre;
        mensaje +=  " Tienes " + this.edad + " años"
        console.log(mensaje);

    }
};
miObjeto.datos();

let constructor = function(){
    let objPersona = {
        nombre: "Benito",
        nss: 2832,
        datosPersona: function () {
            let nsj = "Eres " + this.nombre + " Tu numero nss es: " + this.nss;
            console.log(nsj);
        },
        otroMetodo: function (parametro) {
            let numero = 7;
            console.log("La suma es: " + (numero + parametro));
        }
    };
    return objPersona;
}
let varOnjReg = constructor();
varOnjReg.datosPersona();
varOnjReg.otroMetodo(5);


