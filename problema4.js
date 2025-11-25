// Genera los inputs de notas para los estudiantes
function generarEstudiantes() {
    let cant = parseInt(document.getElementById("cant").value);
    let div = document.getElementById("estudiantes");
    div.innerHTML = ""; // Limpia la caja para no repetir

    // Creamos los campos de cada estudiante
    for (let i = 1; i <= cant; i++) {
        div.innerHTML += `
            <h4>Estudiante ${i}:</h4>
            <input type="number" id="n1_${i}" placeholder="Nota 1"><br>
            <input type="number" id="n2_${i}" placeholder="Nota 2"><br>
        `;
    }

    // Botón para calcular todos los promedios
    div.innerHTML += `<button onclick="calcularPromedios()">Mostrar Promedios</button>`;
}

// Calcula los promedios y muestra el resultado pa' cada estudiante
function calcularPromedios() {
    let cant = parseInt(document.getElementById("cant").value);
    let salida = "";

    for (let i = 1; i <= cant; i++) {
        let n1 = parseFloat(document.getElementById(`n1_${i}`).value);
        let n2 = parseFloat(document.getElementById(`n2_${i}`).value);

        let prom = (n1 + n2) / 2; // Promedio real, no el emocional 

        salida += `Estudiante ${i}: Promedio = ${prom.toFixed(2)}<br>`;
    }

    // Mostramos todos los resultados juntos
    document.getElementById("resultado").innerHTML = salida;
}
