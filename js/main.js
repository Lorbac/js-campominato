// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100
// I numeri non possono essere duplicati

let contenitoreMine = [];
let numeroMine = 16;
numeroElementi = 100;

while (contenitoreMine.length < numeroMine) {
    var mine = (getRndNumber(1, numeroElementi));
    if (contenitoreMine.includes(mine) == false) {
        contenitoreMine.push(mine);
    }
}

console.log(contenitoreMine);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100
// L’utente non può inserire più volte lo stesso numero
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti

let numeriUtente = [];
let tentativiMax = numeroElementi - numeroMine;

do {
    var numInserito = parseInt(prompt("Inserisci un numero"));
    if ((numeriUtente.includes(numInserito) == false) && (contenitoreMine.includes(numInserito) == false) && (numInserito <= 100) && (numInserito >= 1)) {
        numeriUtente.push(numInserito);
    }
} while ((numeriUtente.length < tentativiMax) && (isInArray(contenitoreMine, numInserito)) == false)

if (numeriUtente.length == tentativiMax) {
    console.log("HAI VINTO");
}
else {
    console.log("HAI PERSO");
    console.log("Il tuo punteggio è: " + numeriUtente.length + "!")
}

console.log(numeriUtente);

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito


// FUNZIONI 

function getRndNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}

// function isInArray (contenitore, numero) {
//     if (contenitore.indexOf(numero) === -1) {
//         return false;
//     } else if (contenitore.indexOf(numero) > -1) {
//         return true;
//     }
// }

function isInArray (contenitore, numero) {
    let find = false;
    for (let i = 0; i < contenitore.length; i++) {
        if (contenitore[i] == numero) {
            find = true;
            return find;
        }
    }
    return find;
}