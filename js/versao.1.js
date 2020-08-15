
//Efeito Menu Js
window.addEventListener('scroll', function(){
    let header = document.querySelector('.container');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})

//Campo de Busca 
function validaBusca() {
    if (
    document.getElementById('txt-busca').value != ''
     )  { 
         console.log('Busca Invalida!')
         return false;
          }
          console.log('Busca Valida!')
          return true;
    }

 /*  

https://api.twitter.com/1.1/search/tweets.json */

