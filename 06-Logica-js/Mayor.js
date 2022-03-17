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