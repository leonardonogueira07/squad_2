/* --------------------------- Esconder Divs no Mobile --------------------------- */
// Declara variáveis com os endereços dos elementos
const containerTweets = document.getElementById('tweets'),
    containerImagens = document.getElementById('imagens'),
    botaoTweets = document.getElementById('tweetMobile'),
    botaoImagens = document.getElementById('imagensMobile');


/* ------ Esconder abas quando sair do media query do mobile -------------------- */
// fonte: https://www.w3schools.com/howto/howto_js_media_queries.asp
var mql = window.matchMedia("(max-width: 700px)") // Define a largura onde as mudanças ocorrerão

function esconderAmbos(x) {
    if (x.matches) {
        /* Se a tela tiver 700px de largura ou menos */
        if (botaoImagens.classList == 'botaoAbas botaoAbasSelecionado') {
            /* Verifica se o usuário selecionou o botão imagens previamente */
            containerTweets.style.display = 'none';
            containerImagens.style.display = 'flex';
        } else {
            /* Se não selecionou */
            containerTweets.style.display = 'block';
            containerImagens.style.display = 'none';
        }

    } else {
        /* Se a tela tiver mais de 700px de largura, volta para as configurações originais */
        containerImagens.style.display = 'flex';
        containerTweets.style.display = 'block';
    }
}

mql.addListener(esconderAmbos) // Cria um função que fica "escutando" mudanças de estado


/* -------------- Esconde os tweets quando o botao das imagens é clicado ---------- */
function esconderTweets() {
    /* Oculta o container dos tweets e revela o das imagens */
    containerImagens.style.display = 'flex';
    containerTweets.style.display = 'none';

    /*  Quando um botão de aba é selecionado, essa função adiciona uma classe chamada "botaoAbasSelecionado" 
        a este botão e remove a mesma classe do outro botão. */
    botaoTweets.classList.remove("botaoAbasSelecionado"); // O botão Tweets vem selecionado por padrão
    botaoImagens.classList.add("botaoAbasSelecionado");
}

/* -------------- Esconde as imagens quando o botao dos tweets é clicado ---------- */
function esconderImagens() {
    /* Oculta o container das imagens e revela o dos Tweets */
    containerTweets.style.display = 'block';
    containerImagens.style.display = 'none';

    /* Faz a troca das classes dos botões */
    botaoImagens.classList.remove("botaoAbasSelecionado");
    botaoTweets.classList.add("botaoAbasSelecionado");
}


/* ---------------------------  Janela Modal Imagens ----------------------- */
/* funçao criada para abrir as imagens em zoom quando clicadas*/
function cliqueModal(img) {
    const modalJanela = document.getElementById('janela-modal');
    const modalImagens = document.getElementById('img-modal');
    const modalBtn = document.getElementById('btn-fechar');

    modalJanela.classList.remove("esconde-janela-modal");
    modalJanela.classList.add("mostar-janela-modal");

    modalImagens.src = img.src;
    modalImagens.alt = img.alt;

    /* botao criado para fechar a janela modal */
    modalBtn.onclick = function() {
        modalJanela.classList.add("esconde-janela-modal");
        modalJanela.classList.remove("mostar-janela-modal");
    }


}