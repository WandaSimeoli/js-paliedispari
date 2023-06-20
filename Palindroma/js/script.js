function isPalindrome (word) {

    const wordLength = word.length;

    let i = 0; 

    for(let i = 0; i < wordLength / 2; i++); {

        if (word[i] !== word[wordLength - 1 - i]) {

            console.log('non palindromo');
            alert('non è un palindromo');
          
        } else {
            console.log('palindromo');
            alert('è un palindromo');
        }

    }
    
    
}

const word = prompt("Inserisci una parola");
console.log('Parola Inserita', word, typeof word);

const value = isPalindrome (word);
console.log (value);