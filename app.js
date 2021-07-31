const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.querySelectorAll('button');
const phrase = document.querySelector('#phrase');

let missed = 0;

let phrases = [
    'phrase number 1',
    'phrase number 2',
    'phrase number 3',
    'phrase number 4',
    'phrase number 5'
];

const header = document.querySelector('.header');



startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


keys.forEach( key => key.addEventListener('click', function () {
    header.style.color = 'red';
    console.log(key);
}));