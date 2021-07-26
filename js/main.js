// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100
// I numeri non possono essere duplicati

var contenitoreMine = [];
var numeroMine = 16;

for(i=0 ; i < numeroMine; i++) {
    var mine = (getRndNumber(1, 20));
    if (!contenitoreMine.includes(mine)) {
        contenitoreMine.push(mine);
    }
    else {
        i--;
    }
}

console.log(contenitoreMine);

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100

// L’utente non può inserire più volte lo stesso numero

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito



// Functions 

function getRndNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}