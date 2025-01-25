//Variables
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    //Se cumple la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else{
    //No se cumple la condición
    alert('Lo siento, no acertaste el número');
}

