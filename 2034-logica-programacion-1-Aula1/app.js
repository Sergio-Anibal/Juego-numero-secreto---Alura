//Variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

    //Ciclo para que el juego no termine hasta que se acierte el número
    while (numeroUsuario != numeroSecreto){
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //Se cumple la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else{
        
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor')
        }else{
            alert('El número secreto es mayor')
        }
        //Cuando no acierta incrementa el contador
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //No se cumple la condición
       // alert('Lo siento, no acertaste el número');
    }
}