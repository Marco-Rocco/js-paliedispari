//crea una funzione che restituisca un risultato booleano, vero se la parola è palindroma, falso se non lo è
function verifificaPalindroma(parola){ //assegno un parametro provvisorio alla funzione, verrà cambiata dopo
    let parolaInvertita = parola.split('').reverse().join(''); //questa sequenza di funzioni ci permette di dividere la parola in caratteri, invertirne l'ordine e riunirli
    return parola === parolaInvertita 
}
// crea un prompt per permettere all'utente di inserire la sua parola
let parolaInserita = prompt ('inserisci una parola per verificare se è palindroma')

//crea dei prompt per notificare l'esito della verifica
if (verifificaPalindroma(parolaInserita)) {
    alert ('la tua parola è palindroma')
} else {
    alert ('la tua parola non è palindroma')
}