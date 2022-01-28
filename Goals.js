const clicker1 = document.getElementsByClassName('card')[0];
const clicker2 = document.getElementsByClassName('card')[1];
const clicker3 = document.getElementsByClassName('card')[2];
const clicker4 = document.getElementsByClassName('card')[3];

clicker1.addEventListener('click', function() {
    clicker1.classList.toggle('is-flipped');
});

clicker2.addEventListener('click', function() {
    clicker2.classList.toggle('is-flipped');
});

clicker3.addEventListener('click', function() {
    clicker3.classList.toggle('is-flipped');
});

clicker4.addEventListener('click', function() {
    clicker4.classList.toggle('is-flipped');
});