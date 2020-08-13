
//Efeito Menu Js
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})

//Campo de Busca 
let busca = document.querySelector('#txt-busca').value;



/*
function validaBusca() {
    
}


https://api.twitter.com/1.1/search/tweets.json */

