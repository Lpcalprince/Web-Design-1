

// JAVASCRIPT FOR HAMBURGER

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
leftNav = document.querySelector('.leftNav');



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    leftNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})
