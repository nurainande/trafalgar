'use strict'
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const nav = document.querySelector('.navbar');


const header = document.querySelector('.header');
const logoIcon = document.querySelector('.logo-icon');
const logomain = document.querySelector('.logo-main');
const navLink = document.querySelectorAll('.nav-link');
const navIcon = document.querySelector('.nav-icon');


menu.addEventListener('click',function(){
    nav.style.display = 'block';
    menu.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click',function(){
    nav.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'none';
})

window.onscroll = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        header.classList.add('nav-scroll');
       logoIcon[0].classList.add('nav-logo-scroll');
        navLink[0].classList.add('nav-title-scroll');
       navIcon[0].classList.add('nav-icon-scroll');

       navLink.forEach(navLinks => {
        navLinks.classList.add('nav-link-scroll');
       })
    } else {
        header.classList.remove('nav-scroll');
       logoIcon[0].classList.remove('nav-logo-scroll');
        navLink[0].classList.remove('nav-title-scroll');
       navIcon[0].classList.remove('nav-icon-scroll');

       navLink.forEach(navLinks => {
        navLinks.classList.remove('nav-link-scroll');
       })
    }
}

