function suma(){

    let num1 = 5;
    let num2 = 7;
    let resultado = (num1 + num2);
    return resultado;
}
console.log("La suma es: " + suma());

function resta(){

    let num1 = 5;
    let num2 = 7;
    let resultado = (num1 - num2);
    return resultado;
}
console.log("La resta es: " + resta());

function multiplicacion(){

    let num1 = 5;
    let num2 = 7;
    let resultado = (num1 * num2);
    return resultado;
}
console.log("La multiplicacion es: " + multiplicacion());

function divicion(){

    let num1 = 5;
    let num2 = 7;
    let resultado = (num1 / num2);
    return resultado;
}
console.log("La divicion es: " + divicion());  

function residuo(){

    let num1 = 7;
    let num2 = 2;
    let resultado = (num1 % num2);
    return resultado;
}
console.log("La residuo es: " + residuo());

function incremento(){

    let num1 = 5;
    let resultado = (++num1);
    return resultado;
}
console.log("El decremento es: " + incremento());

function decremento(){

    let num1 = 5;
    let resultado = (--num1);
    return resultado;
}
console.log("El incremento es: " + decremento());

function suma2(){

    let suma2 = parseInt (prompt ("El numero que vamos a sumar es: "));
    let suma3 = parseInt (prompt ("El numero que vamos a sumar es: "));
    let resultado = (suma2 + suma3) ;
    return resultado;
}
//console.log("La suma es: " + suma2());

function suma4(){

    let num1 = 7;
    let num2 = 6;
    if (num1 == num2){
        let resultado = (num1 + num2);
        return resultado;
    }
    
}
console.log("La suma con el if es: " + suma4());