// Esta función agarra un número del 1 al 7 y dice qué día es
function mostrarDia() {

    // Obtenemos el número que metió el usuario
    let num = parseInt(document.getElementById("numero").value);

    // Lista de días de la semana (lunes primero, como Dios manda 😅)
    let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

    // Validamos que no se pase de 7 ni sea menor de 1 😂
    if (num >= 1 && num <= 7) {
        document.getElementById("resultado").innerText = 
            "El día correspondiente es " + dias[num - 1];
    } else {
        document.getElementById("resultado").innerText = 
            "Número fuera del rango permitido (1 al 7)";
    }
}
