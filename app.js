const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.querySelectorAll('button');
const phrase = document.querySelector('#phrase');
const heart = document.querySelectorAll('li > img');

let missed = 0;

let phrases = [
    '1 This is a pet',
    '2 This is a pet',
    '3 This is a pet',
    '4 This is a pet',
    '5 This is a pet'
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
            // console.log(letter);
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
    let allLetters = document.querySelectorAll('li.letter') && document.querySelectorAll("li:not(.show)");
    let match = null;
    for(let i = 0; i<allLetters.length; i++){
        if( allLetters[i].textContent.toLowerCase() === button.textContent.toLowerCase()){
            allLetters[i].className += " show";
            match = allLetters[i];
        }
    } 
    return match;
}



startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


keys.forEach( key => key.addEventListener('click', function () {
    key.className += "chosen";
    key.setAttribute('disabled', true);
    let letterFound = checkLetter(key);
    if(letterFound === null){
        missed += 1;
        for(let i = 0; i < heart.length; i++){
            if( heart[i].src = "images/liveHeart.png" ){
                heart[i].src = "images/lostHeart.png";
            }
        return;
        }
    }
}));

