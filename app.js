const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.querySelectorAll('#qwerty button');
const phrase = document.querySelector('#phrase');
const heart = document.querySelectorAll('li > img');
const title = document.querySelector('.title');
const phraseList = document.querySelector('#phrase ul');

let missed = 0;

let phrases = [
    'Pretty Woman',
    'Sleeping with the enemy',
    'Family man',
    'Mamma mia',
    'Crazy rich asians'
];

/**
 * @param {arr} takes any array that stores a string.
 * @returns {array} array of characters
 */

function getRandomPhaseAsArray(arr){
    let randomPhrase = Math.floor(Math.random() *arr.length);
    let charactersArray = arr[randomPhrase].split('');
    return charactersArray;
}


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
 *     function checkLetter() - check the letter from the button and compares it with the phrase to find a match.
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

/*
 *      function checkWin();   check the correct letters, if all letters in the prhase are correct is a winner.
 *                             if the player misses 5 times, loses.
 */


function checkWin(){
    let show = document.querySelectorAll('li.show')
    let letter = document.querySelectorAll('li.letter')

    if (missed >= 5){
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        title.textContent = 'Sorry, better luck next time';
        startButton.textContent = 'Try Again';
        resetGame();
    }
    if (show.length === letter.length){
        overlay.className = 'win';
        overlay.style.display = 'flex';
        title.textContent = 'Well Done!';
        startButton.textContent = 'Another Phrase?';
        resetGame();
    }
}

/*
 *      function resetGame();  reset the game. set the value missed to zero, unblock the keyboard and shows a new random phrase.
 */


function resetGame() {
    missed = 0;
    for (let i = 0; i < keys.length; i++ ) {
		keys[i].disabled = false;
		keys[i].classList.remove('chosen');
	}
    phraseList.innerHTML = '';
    const newPhrase = getRandomPhaseAsArray(phrases);
    addPhraseToDisplay(newPhrase);
    for(let i = 0; i < heart.length; i++){
        heart[i].src = "images/liveHeart.png";
    }
}


/**
 *   Event Listeners
 */

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


keys.forEach( key => key.addEventListener('click', function () {
    key.className += "chosen";
    key.setAttribute('disabled', true);
    let letterFound = checkLetter(key);
    if(letterFound == null){
        heart[missed].src = 'images/lostHeart.png';
        missed += 1;
    }
    checkWin();
}));