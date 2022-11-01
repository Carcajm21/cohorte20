let hora = Number(prompt("¿Que hora es?"));

if ((hora >= 6) && (hora <= 11)){
    document.write("Buenos dias")
}else if((hora >= 12) && (hora <=18 )){
    document.write("Buenas tardes")
}else if((hora >= 19) && (hora <=23 )){
    document.write("Buenas noches")
}else if(hora >= 25){
    document.write("Hora invalida")
}else{
    document.write("Dejame dormir")
}