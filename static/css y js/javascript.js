var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function adivinarNumero() {
    var numeroUsuario = parseInt(prompt("Adivina un número del 1 al 100"));
    intentos++;

    if (numeroUsuario === numeroSecreto) {
        alert("¡Correcto! Lo has adivinado en " + intentos + " intentos.");
    } else if (numeroUsuario < numeroSecreto) {
        alert("¡Demasiado bajo! Intenta de nuevo.");
    } else if (numeroUsuario > numeroSecreto) {
        alert("¡Demasiado alto! Intenta de nuevo.");
    }
}


  