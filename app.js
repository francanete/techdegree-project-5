const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.querySelectorAll('button');

const header = document.querySelector('.header');



startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


keys.forEach( key => key.addEventListener('click', function () {
    header.style.color = 'red';
    console.log(key);
}));