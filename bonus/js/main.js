// BONUS:
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// TENTATIVO DI SWITCH NON RIUSCITO

// do {
//     var livello = prompt("Scegli la difficoltà  'facile' 'medio'  'difficile'");
// }
// while (livello != "facile" && livello != "medio" && livello != "difficile");

// let numeroElementi = 0;

// switch (numeroElementi) {
//     case livello == "facile" :
//         var numeroElementi = 50;
//         break;
//     case livello == "medio" :
//         var numeroElementi = 20;
//         break;
//     case livello == "difficile" :
//         var numeroElementi = 100;
//         break;
    
// }

// console.log(numeroElementi);


// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100
// I numeri non possono essere duplicati

let contenitoreMine = [];
let numeroMine = 16;
let numeroElementi = 100;


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
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

let numeriUtente = [];
let tentativiMax = numeroElementi - numeroMine;

// do {
//     var numInserito = parseInt(prompt("Inserisci un numero"));
//     if ((numeriUtente.includes(numInserito) == false) && (contenitoreMine.includes(numInserito) == false) && (numInserito <= 100) && (numInserito >= 1)) {
//         numeriUtente.push(numInserito);
//     }
// } while ((numeriUtente.length < tentativiMax) && (isInArray(contenitoreMine, numInserito)) == false)

document.getElementById("campo").addEventListener("click",
function(e) {
    console.log(e.target.dataset.cella);
    let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella +"']");
    console.log(element[0]);
    
    if (contenitoreMine.includes(parseInt(e.target.dataset.cella))) {
        console.log("HAI PERSO");
        element[0].classList.add("red");
    }
    else {
        numeriUtente.push(parseInt(e.target.dataset.cella));
        console.log(numeriUtente);
        element[0].classList.add("green");
    }
}
)


console.log(numeriUtente);


// PARTE GRAFICA ---------------------------------------

creaCampo(100);

// FUNZIONI 


function creaCampo(celle) {
    
    for (let i = 1; i <= celle; i++) {
        let cella = `
        <div data-cella="${i}" class="cella"></div>
        `;
        
        let templateCella = document.createElement('DIV');
        templateCella.classList.add("quadrato");
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

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