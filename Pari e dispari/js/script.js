
// Prompt 
const evenOrOdd = prompt('Scegli un numero pari o dispari');
console.log(evenOrOdd, typeof evenOrOdd);

const numPlayer = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('player', numPlayer, typeof numPlayer);

// Generatore di numeri random 
const numComputer = Math.floor(Math.random () * 5) + 1;
console.log('computer', numComputer, typeof numComputer);

// Funzione somma che addiziona il numero del player e del computer

const sum =  numPlayer  + numComputer;

function somma(numPlayer, numComputer) {

    return sum; 
}

somma (numPlayer, numComputer);
console.log(somma(numPlayer, numComputer));
document.getElementById('title').innerHTML = numPlayer + numComputer;

// Funzione che verifica se un numero è pari o dispari 

 function isEven (sum) {
    
     if (sum % 2 == 0 && evenOrOdd === 'pari') {
        console.log('Hai vinto');
       alert('Hai vinto :D');
         return true;
     }
     else if ( sum % 2 != 0 && evenOrOdd === 'dispari') {
        console.log('Hai vinto');
        alert('Hai vinto :D');
         return true;
     }
     else {
        console.log('Hai perso');
        alert('Hai perso :(');
        return false;
     }
 }



 isEven(sum);
 console.log(isEven(sum));
