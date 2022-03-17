
console.log("Tarea de la tarea");
var Tarea = prompt("¿Hiciste la tarea?");
console.log("Tu respuesta fue: " + Tarea);
//Falta la condicional para NO
if ( Tarea=="si" || Tarea=="SI") {
    alert("¡Muy bien!");
}
 else {
    alert("Animo debes de hacerla");
}

//Ejercicio de grados 
console.log("De grados Farenheit a Celsios");
var grado = prompt("Ingrese un valor de grados Farenheit: ")
var Respuesta= (grado-32/1.8);
alert("Los "+ grado +"°F a °C son: "+ Respuesta);

//Ejercicio de Numero mayor
var n1= prompt(" Escriba un numero");
var n2= prompt(" Escriba un numero");
var n3= prompt(" Escriba un numero");
console.log(n1, n2, n3);
 if (n1>n2 && n1>n3) {
    alert("De los numeros ingresados: " + n1+ " "+ n2+ " " + n3 + " El numero mayor es: " + n1);
} else if  (n2>n1 && n2>n3) {
    alert("De los numeros ingresados: " + n1+ " "+ n2+ " " + n3 + " El numero mayor es: " + n2)
}
else{
    alert("De los numeros ingresados: " + n1+ " "+ n2+ " " + n3 + " El numero mayor es: " + n3);
}

//Extra de vocales
var letra = prompt("Ingrese una letra");
if (letra=='a'|| letra=='A'|| letra=='e' || letra=='E' || letra=='i' || letra=='I' ||  letra=='o' || letra=='O'|| letra=='u' || letra=='U') {
    alert("La letra que ingreso es: "+ letra + " Por lo tanto es una vocal");
} else {
    alert("La letra que ingreso es: "+ letra + " Por lo tanto es una consonante");
}