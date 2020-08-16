/* --------------------------- Esconder Divs no Mobile --------------------------- */

/* ------ Esconder ambos quando sair do media query do mobile -------------------- */
// fonte: https://www.w3schools.com/howto/howto_js_media_queries.asp

var mql = window.matchMedia("(max-width: 700px)") // Define a largura onde as mudanças ocorrerão

function esconderAmbos(x) {
    if (x.matches) { 
        /* Se a tela tiver 700px de largura ou menos */
        document.getElementById('tweets').style.display = 'block';
        document.getElementById('imagens').style.display = 'none';
    } else {
        /* Se a tela tiver mais de 700px de largura */
        document.getElementById('imagens').style.display = 'flex';
        document.getElementById('tweets').style.display = 'block';
        document.getElementById('tweets').focus();
    } 
}

mql.addListener(esconderAmbos) // Cria um função que fica "escutando" mudanças de estado



function esconderTweets() {
    document.getElementById('imagens').style.display = 'flex';
    document.getElementById('tweets').style.display = 'none';
    /*
    if (document.getElementById('Imagens') !== undefined) {
        if (document.getElementById('Imagens').style.display == 'flex') {
            document.getElementById('Imagens').style.display = 'none';
            document.getElementById('Tweets').style.display = 'flex';
        } else {
            document.getElementById('Imagens').style.display = 'flex';
            document.getElementById('Tweets').style.display = 'none';
        }
    }
    */
}


function esconderImagens() {
    document.getElementById('tweets').style.display = 'block';
    document.getElementById('imagens').style.display = 'none';
    /*
    if (document.getElementById('Tweets') !== undefined) {
        if (document.getElementById('Tweets').style.display == 'block') {
            document.getElementById('Tweets').style.display = 'none';
            document.getElementById('Imagens').style.display = 'block';
        } else {
            document.getElementById('Tweets').style.display = 'block';
            document.getElementById('Imagens').style.display = 'none';
        }
    }
    */
}


/* ---------------------------  Janela Modal Imagens ----------------------- */
function cliqueModal(img) {
    const modalJanela = document.getElementById('janela-modal');
    const modalImagens = document.getElementById('img-modal');
    const modalBtn = document.getElementById('btn-fechar');

    modalJanela.classList.remove("esconde-janela-modal");
    modalJanela.classList.add("mostar-janela-modal");

    modalImagens.src = img.src;
    modalImagens.alt = img.alt;

    modalBtn.onclick = function() {
        modalJanela.classList.add("esconde-janela-modal");
        modalJanela.classList.remove("mostar-janela-modal");
    }


}