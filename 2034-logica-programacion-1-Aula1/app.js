//Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3
let alertaMaximosIntentos = 3;

//console.log(numeroSecreto);

    //Ciclo para que el juego no termine hasta que se acierte el número
    while (numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor`));

    

    if (numeroUsuario == numeroSecreto) {
        //Se cumple la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        break;
    } else{
        alertaMaximosIntentos --
        if(numeroUsuario > numeroSecreto){
            alert(`El número secreto es menor. Te quedan ${alertaMaximosIntentos} ${alertaMaximosIntentos == 1 ? 'intento' : 'intentos'}`)
        }else{
            alert(`El número secreto es mayor. Te quedan ${alertaMaximosIntentos} ${alertaMaximosIntentos == 1 ? 'intento' : 'intentos'}`)
        }
        //Cuando no acierta incrementa el contador
        //intentos = intentos + 1;
        intentos ++

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert(`Llegaste al número máximo de intentos`);
            break;
        }
        //No se cumple la condición
       // alert('Lo siento, no acertaste el número');
    }
}
