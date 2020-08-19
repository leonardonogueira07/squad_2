
//Efeito Menu Js
window.addEventListener('scroll', function(){
    let header = document.querySelector('.container');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})

//Campo de Busca / Validação em Enter - Eliminando Caractere
window.onload = function() {
    document.getElementById('txt-busca').onkeypress = function searchKeyPress(event) {
       if (event.keyCode == 13) {
           //window.alert('deu');
           document.getElementById('txt-busca').click();
           document.getElementById('message').innerHTML = "Enviado!"
           var limpa = document.getElementById('txt-busca').value;
           limpa.replace("#","");
           document.getElementById('txt-busca').value = "";
       }
   };
   
}

var txtBusca = $('#txt-busca');
txtBusca.on('keydown', function(){
  var continha = 140 - txtBusca.val().length;
});
txtBusca.on('keydown', function(){
  var validacaoBusca = txtBusca.val().length < 140;
  if(!validacaoBusca){
    document.getElementById('message').innerHTML = "<p style='color: red;'>Ultrapassou de 140 caracteres!</p>"; 
  } else {
    document.getElementById('message').innerHTML = ""; 
  }
})
/*function validar(event) {
    if (
        event.which == 13 || event.keyCode == 13
     )  { 
        document.querySelector("#message").innerHTML = "Busca Validada!";
         return false;
          }else{
          window.alert();
          document.querySelector("#message").innerHTML = "Busca Invalidada";
          return true;}
    }
 document.getElementById('txt-busca').addEventListener('key', function(event){ validar(event); }, false );   
*/
 /*  

https://api.twitter.com/1.1/search/tweets.json */

