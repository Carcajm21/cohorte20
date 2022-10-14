let numeros = prompt("Dime 3 numeros");

function SaludoPer() {

    let val1 = (numeros);
    let val2 = (numeros);
    let val3 = (numeros);
    let arr = [val1, val2, val3];
    arr.sort = ((a, b) => a - b);
    
    console.log(numeros);

}
SaludoPer(numeros);
