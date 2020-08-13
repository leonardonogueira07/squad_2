/* Esconder Divs no mobile*/


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