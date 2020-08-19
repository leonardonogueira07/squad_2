//Efeito Menu Js
window.addEventListener('scroll', function(){
    let header = document.querySelector('.container');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})

//Campo de Busca / Validação em Enter - Eliminando Caractere
/*
window.onload = function() {
    document.getElementById('txt-busca').onkeypress = function searchKeyPress(event) {
       if (event.keyCode == 13) {
           //window.alert('deu');
           document.getElementById('txt-busca').click();
           document.getElementById('message').innerHTML = "Enviado!"
           let limpa = document.getElementById('txt-busca').value;
           limpa.replace("#","");
           document.getElementById('txt-busca').value = "";
       }
   };
   
} */
// VALIDAÇÃO DO CAMPO DE BUSCA COM LIMITE DE CARACTERE
let txtBusca = $('#txt-busca');
txtBusca.on('keydown', function(){
  let continha = 140 - txtBusca.val().length;
});
txtBusca.on('keydown', function(){
  let validacaoBusca = txtBusca.val().length < 140;
  if(!validacaoBusca){
    document.getElementById('message').innerHTML = "<p style='color: red;'>Ultrapassou de 140 caracteres!</p>"; 
  } else {
    document.getElementById('message').innerHTML = ""; 
  }
})

// Executar a seguinte função ao fim do carregamento do body
document.querySelector('body').onload = function() {

    //CAMPO BUSCA VALIDAÇÃO COM TECLA ENTER - LIMPA CAMPO - RETIRADA DE #
    document.getElementById('txt-busca').onkeypress = function searchKeyPress(event) {
        if (event.keyCode == 13) {
            //window.alert('deu');
            document.getElementById('txt-busca').click();
            document.getElementById('message').innerHTML = "Enviado!"
            let limpa = document.getElementById('txt-busca').value;
            limpa.replace("#","");
            document.getElementById('txt-busca').value = "";
        }
    };
    
    
    //EFEITO TWEETS

	let tweetElements = document.querySelectorAll('.containerTweets'),
		windowHeight = document.documentElement.clientHeight;


	function tweetAnimScroll() {

		for (tweet of tweetElements) {

			if (tweet.getBoundingClientRect().top <= windowHeight - tweet.getBoundingClientRect().height) {
				tweet.classList.add('containerTweetsAnim');
			}
		}
	}

	tweetAnimScroll();
	document.querySelector('body').onscroll = tweetAnimScroll;
}