//let miVariable = prompt("Cual es tu nombre?: ")

/*Prompt muestra un cuadro de diálogo en el que se puede escribir,
lo que escribamos se puede guardar dentro de una variable para poder utilizarlo
Para que una función pueda realizar o ejecutar el código que se encuentra dentro, 
se debe llamar o invocar, por eso se usa el nombre de la función seguido de ( ), 
en este caso es saludoPer();
si no la invocamos nunca se va a ejecutar el código que tenga adentro la función

*/

/*
function SaludoPer() {
    alert(miVariable);

}
SaludoPer(miVariable);

   
function suma(){
    let num1 = 4;
    let num2 = 3;
    let resultado = num1 + num2;
    alert(resultado);
}

suma();


function suma(){
    let num1 = parseInt(prompt("de el valor de numero 1: "));
    let num2 = parseInt(prompt("de el valor de numero 2: "));
    let resultado = num1 + num2;
    alert(resultado);
}
suma();
*/
/*
function suma(){
    let num1 = parseInt(prompt("de el valor de numero 1: "));
    let num2 = parseInt(prompt("de el valor de numero 2: "));
    let resultado = num1 + num2;
    return resultado;

}
let r = suma();
alert(r)
*/
/*
La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a 
quien llama a la función.
return básicamente nos sirve(entre otras cosas) para especificar cuál de los posibles valores que 
tenga una función, va a regresar
*/

function suma(){

    let num1 = 5;
    let num2 = 6;
    return num1 + num2;
}
//alert("El resultado de la suma: " + suma());

function resta (){

        let valor1 = 12;
        let valor2 = 5;
        return valor1 - valor2;
}
//alert("El resultado de la resta: " + resta());

function multiplicacion (){

    let valor1 = 7;
    let valor2 = 4;
    return valor1 * valor2;
}
//alert("El resultado de la multiplicacion: " + multiplicacion());

function divicion (){

    let num1 = 21;
    let num2 = 0;
    if(num2 == 0){
        alert ("El divisor es 0 ")
}
    return num1 / num2;
}
//alert("El resultado de la divicion: " + divicion());

function divicion (){

    let num1 = 21;
    let num2 = 7;
    if(num2 != 0){
    
    return num1 / num2;
    }
}
 //alert("El resultado de la divicion es: " + divicion());

 function divicion (){

    let num1 = 21;
    let num2 = 7;
    if(false){
    
    return num1 / num2;
    }
}
 //alert("El resultado de la divicion es: " + divicion());

function residuo (){

        let num1 = 2;
        let num2 = 7; 
        let residuo = (num1 % num2);
        return residuo; 
}

//alert ("Elresiduo: " + residuo());

function residuo (){

    let num1 = 7; 
     num1/= num1;
    return num1; 
}

//alert ("El residuo: " + residuo());

function logico(){

    let valido = true;
    alert("El valor booleano es: " + valido)
}
//logico()

function logico(){

    let valido = 3;
    let valido2 = 5;
    if(valido<valido2){
        alert("El mayor es: " + valido2);
    }
    //alert("El valor booleano es: " + valido)
}
//logico();

function edad(){

    let miEdad = 20;
    if(miEdad >= 18){
        console.log("Eres mayor de edad");
    }
    else {
    console.log("No eres mayor de edad");
    }
}
edad();

function conjuncion() {
    
    let valor1 = true;
    let valor2 = false;
    if (valor1 && valor2){
        console.log("El valor 1 y el valor 2 son verdaderos");
    }
    else{
        console.log("El valor es falso");
    }
}
conjuncion();

function disfuntion(){

    let valor1 = false;
    let valor2 = true;
    if(valor1 || valor2){
        console.log("El operador or es verdadero");
    }
    else{
        console.log("El operador or es falso");
    }
}
disfuntion();

function negacion(){

    let valor1 = false;
    if (!(!valor1)){
        console.log("El valor es " + valor1);
    }else{
        console.log("El valor negado es " + valor1);
    }
}
negacion();