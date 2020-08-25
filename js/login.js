/*var login = document.getElementById("botao");
login.addEventListener("click", clicar);*/

function validarForm() {
    var nome = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    var erroUsuario = document.getElementById("erroUsuario");
    var erroSenha = document.getElementById("erroSenha");

    if(nome.value =="academy@cocreare.com.br" && senha.value =="123456"){
        window.location.href = "buscas.html";
        console.log("FUNCIONA");
        return true;
    }
    else{
        if(nome.value!="academy@cocreare.com.br" || nome.value ==''){
            erroUsuario.innerHTML = "Usuario Incorreto!";
        }
        if(senha.value!="123456" || senha.value ==''){
            erroSenha.innerHTML = "Senha Incorreta!";
        }
        return false;
    }

}