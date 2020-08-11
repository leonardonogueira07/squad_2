
//Efeito Menu Js
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})
