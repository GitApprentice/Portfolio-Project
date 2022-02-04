const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-box');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
})



$(".About-Me").click(function(){
    window.open("About Me.html")
})

$(".My-Programming-Story").click(function(){
    window.open("Goals.html")
})

$(".Goals").click(function(){
    window.open("https://gitapprentice.github.io/React-Portfolio/")
})

$(".Skills").click(function(){
    window.open("https://gitapprentice.github.io/Angular-Portfolio/")
})