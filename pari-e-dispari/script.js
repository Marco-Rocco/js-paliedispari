const userChoice = prompt ('scegli e inserisci "pari" o "dispari"')
console.log('lo user ha scelto' + ' ' + userChoice)

const userNumber =  prompt ('scegli e inserisci un numero tra 1 e 5')
console.log('lo user ha scelto il numero' + ' ' + userNumber)

const cpuNumber = randomNumber(1, 5); //invochiamo la funzione in una variabile, così da invocarla

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;  //funzione trovata su w3school (formula, è uguale a scrivere * 5 + 1, ma così abbiamo più personalizzabilità) 
}

const sum = userNumber + cpuNumber;
console.log('la somma dei due numeri è' + ' ' + sum)

/*
const isEvenOrOdd = sum % 2 === 0; // questa restituisce true or false, ma noi abbiamo bisogno di persnalizzarla
*/

function isEvenOrdOdd (number) {
    /*
    sum % 2 === 0 // esempio di quello che dovrebbe fare, ma senza margini di personalizzazione, in più dovrei aggiungere il return, invece...
    */

    // return number % 2 === 0; //questo invece non solo ci permette di aggiungere un numero che può cambiare a secoonda della variabile, ma restituisce true or false già di suo
    

    if (number % 2 === 0){ //questo invece ci permete di restituire pari od ispari invece di true or false
        return 'pari'
    } else {
        return 'dispari'
    }
}


const result = isEvenOrdOdd(sum); //questo a noi serve per capire se la SOMMA è pari
console.log(result);

if (result = userChoice){
    console.log('vince utente')
} else {
    console.log('vince cpu')
}