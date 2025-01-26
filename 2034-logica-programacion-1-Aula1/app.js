//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

console.log(numeroSecreto);

    //Ciclo para que el juego no termine hasta que se acierte el número
    while (numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor"));

    

    if (numeroUsuario == numeroSecreto) {
        //Se cumple la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        break;
    } else{
        
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor')
        }else{
            alert('El número secreto es mayor')
        }
        //Cuando no acierta incrementa el contador
        //intentos = intentos + 1;
        intentos ++

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //No se cumple la condición
       // alert('Lo siento, no acertaste el número');
    }
}
