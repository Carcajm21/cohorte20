/* Escribir un programa que detecte el cupón que tiene el usuario
Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%
-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado */

/* let precio = Number(prompt("Precio"));
let cupon = Number(prompt("Ingrese su cupon de descuento // 1: Bronce 2: Plata; 3: Oro; 4: Platino;"));

switch(cupon){
    case 1:
        descuento = (precio*.95);
        document.write("El precio total es: " + descuento);
        break;
    case 2:
        descuento = precio*.90;
        document.write("El precio total es: " + descuento);
        break;
    case 3:
        descuento = precio*.80;
        document.write("El precio total es: " + descuento);
        break;
    case 4:
        descuento = precio*.75;
        document.write("El precio total es: " + descuento);
        break;
    default:
        document.write("Cupon no valido");
        break;
}
 */
let nombre = "leo";
console.log(`Hola yo soy ${nombre} y mi edad es ${2022-2002}`);

/* condicion ? */

let edad = 18

let mensaje = edad >= 18 
? "Es mayor de edad" 
: "Tas chiquito";

console.log(mensaje);

console.log(`Yo soy Leo y soy ${edad >=18 ? "Soy mayor de edad" : "Soy menor de edad"}`);