// Esta función agarra las notas, saca el promedio y le pone letra (A hasta F)
function calcularPromedio() {

    // Obteniendo las tres notas que metió el usuario
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    // Sacamos el promedio de verdad, no el del profe 
    let promedio = (n1 + n2 + n3) / 3;
    let letra = "";

    // Aquí se decide la letra según la nota que sacaste
    if (promedio >= 90) letra = "A";  // Crac level 
    else if (promedio >= 80) letra = "B"; // Muy bien
    else if (promedio >= 70) letra = "C"; // Pasaste raspando
    else if (promedio >= 60) letra = "D"; // Ay caray 
    else letra = "F"; // Nos vemos en el verano 

    // Mostramos en pantalla el resultado final
    document.getElementById("resultado").innerHTML = 
        "Promedio: " + promedio.toFixed(2) + "<br>Calificación: " + letra;
}
