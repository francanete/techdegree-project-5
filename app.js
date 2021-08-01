const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.querySelectorAll('button');
const phrase = document.querySelector('#phrase');

let missed = 0;

let phrases = [
    '1 This is a pet',
    '2 This',
    '3 This',
    '4 This',
    '5 This'
];

/**
 * @param {arr} takes any array that stores a string.
 * @returns {array} array of characters
 */

function getRandomPhaseAsArray(arr){
    let randomPhrase = Math.floor(Math.random() *arr.length);
    let charactersArray = arr[randomPhrase].split('');
    // console.log(charactersArray);
    return charactersArray;
}


const phraseList = document.querySelector('#phrase ul');

/*
*    function addPhraseToDisplay(arr) -  Takes any array and create an il element, then appends it to '#phrase ul'
 */


function addPhraseToDisplay(arr){
    for (let i= 0; i<arr.length; i++) {
        if(arr[i] !== ' ') {
            let letter = document.createElement('li');
            letter.className = "letter";
            phraseList.appendChild(letter);
            letter.innerHTML = arr[i];
            console.log(letter);
        } else {
            let space = document.createElement('li');
            space.className = "space";
            phraseList.appendChild(space);
            space.innerHTML = arr[i];
        }
    }
}



const phraseArray = getRandomPhaseAsArray(phrases);
addPhraseToDisplay(phraseArray);



/*
 *     function checkLetter() - 
 */


function checkLetter(button) {
    
}





startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


keys.forEach( key => key.addEventListener('click', function () {
    console.log(key);
}));