//Efeito Menu Js
window.addEventListener('scroll', function () {
  let header = document.querySelector('.container');
  header.classList.toggle('scrolling-active', window.scrollY > 0);
})


// VALIDAÇÃO DO CAMPO DE BUSCA COM LIMITE DE CARACTERE
let txtBusca = $('#txt-busca');
txtBusca.on('keydown', function () {
  let continha = 140 - txtBusca.val().length;
});
txtBusca.on('keydown', function () {
  let validacaoBusca = txtBusca.val().length < 140;
  if (!validacaoBusca) {
    document.getElementById('message').innerHTML = "<p style='color: yellow;'>Ultrapassou de 140 caracteres!</p>";
  } else {
    document.getElementById('message').innerHTML = "";
  }
})

// Executar a seguinte função ao fim do carregamento do body
document.querySelector('body').onload = function () {

  //CAMPO BUSCA VALIDAÇÃO COM TECLA ENTER - LIMPA CAMPO - RETIRADA DE #
  document.getElementById('txt-busca').onkeypress = function searchKeyPress(event) {
    if (event.keyCode == 13) {
      //window.alert('deu');
      document.getElementById('txt-busca').click();
      document.getElementById('message').innerHTML = "Enviado!"
      document.getElementById('txt-busca').onfocus("")

    }
  };


  //EFEITO TWEETS

  // Elementos que devem aparecer conforme o usuário desce a página
  let tweetElements = document.querySelectorAll('.containerTweets');

  // Função que será rodada sempre que o usuário mexer no scroll da página
  function tweetAnimScroll() {

    let windowHeight = document.documentElement.clientHeight;

    for (tweet of tweetElements) {

      // Se o elemento estiver visível dentro da janela
      if (tweet.getBoundingClientRect().top <= document.documentElement.clientHeight - tweet.getBoundingClientRect().height) {
        // Adicionar a classe que mudará suas propriedades CSS
        tweet.classList.add('containerTweetsAnim');
      }
    }
  }

  // Chamar a função ao carregar a página, e depois sempre que o usuário mexer no scroll
  tweetAnimScroll();
  document.querySelector('body').onscroll = tweetAnimScroll;
}