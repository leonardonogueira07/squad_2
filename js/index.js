
/* -------------------------  Lógica
1 – Identificar quando o usuário utiliza o scroll
2 – Calcular a distância entre o topo da página e o scroll
3 – Calcular a distância entre o topo da página e o elemento que deseja animar
4 – Comparar as duas distâncias anteriores
5 – Adicionar uma classe com css animation ou transition ao elemento animado
        Toda a lógica será criada com JavaScript. 
        Eu vou usar a biblioteca de funções jQuery para facilitar  o desenvolvimento. 
---------------------------------------------------------------------------*/

/* ----------------------- Classe .JS adicionada ao HTML do site ----------------------*/
//Estiliza o conteúdo do site e deixa o JavaScript ativo
var root = document.documentElement;
root.className += 'js';

/* ------------------------------- Função Boxtop ---------------------*/
//Essa função é responsável por calcular a distância 
// entre cada elemento que adicionarmos a classe anime e o topo da página.
function Boxtop(idcontainerTweets){
    // o .offset() retorna os valores de left e top dentro do
  // elemento que selecionarmos em $(idcontainerTweets). 
  // Como queremos o topo usamos ao final o .top
  var boxOffset = $(idcontainerTweets).offset().top;
  return boxOffset;

}