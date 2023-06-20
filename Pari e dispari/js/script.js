
const evenOrOdd = prompt('Scegli un numero pari o dispari');
console.log(evenOrOdd, typeof evenOrOdd);

const numPlayer = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('player', numPlayer, typeof numPlayer);

const numComputer = Math.floor(Math.random () * 5) + 1;
console.log('computer', numComputer, typeof numComputer);

function somma(numPlayer, numComputer) {
    const sum =  numPlayer  + numComputer;
    console.log(sum);

    return sum; 
}

somma (numPlayer, numComputer);
console.log(somma(numPlayer, numComputer));

