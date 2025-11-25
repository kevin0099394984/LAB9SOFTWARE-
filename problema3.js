// Esta función crea los campos para que escribas los precios de cada producto comprado
function crearCampos() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let camposDiv = document.getElementById("campos");
    camposDiv.innerHTML = ""; // Limpiamos pa' que no se duplique

    // Hacemos un input pa' cada producto
    for (let i = 1; i <= cantidad; i++) {
        camposDiv.innerHTML += 
            `<input type='number' id='prod${i}' placeholder='Precio producto ${i}'><br>`;
    }

    // Botoncito para realizar la suma total
    camposDiv.innerHTML += `<button onclick="calcularTotal()">Calcular Total</button>`;
}

// Esta suma todos los precios y te dice cuánto gastaste (sin ITBM pa' que no duela tanto )
function calcularTotal() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let total = 0;

    // Sumamos los productos uno a uno
    for (let i = 1; i <= cantidad; i++) {
        total += parseFloat(document.getElementById(`prod${i}`).value);
    }
    
    // Mostramos la suma final
    document.getElementById("resultado").innerText = 
        "El total a pagar es: $" + total.toFixed(2);
}
