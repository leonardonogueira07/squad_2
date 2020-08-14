/* --------------------------- Esconder Divs no Mobile --------------------------- */




function EsconderTweets() {
    if (document.getElementById('Imagens') !== undefined) {
        if (document.getElementById('Imagens').style.display == 'flex') {
            document.getElementById('Imagens').style.display = 'none';
            document.getElementById('Tweets').style.display = 'flex';
        } else {
            document.getElementById('Imagens').style.display = 'flex';
            document.getElementById('Tweets').style.display = 'none';
        }
    }
}


function EsconderImagens() {
    if (document.getElementById('Tweets') !== undefined) {
        if (document.getElementById('Tweets').style.display == 'block') {
            document.getElementById('Tweets').style.display = 'none';
            document.getElementById('Imagens').style.display = 'block';
        } else {
            document.getElementById('Tweets').style.display = 'block';
            document.getElementById('Imagens').style.display = 'none';
        }
    }
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