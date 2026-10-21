/*
  LISTA DOS JOGOS
  ===============
  Para acrescentar um jogo novo, copie um dos blocos abaixo (do { até o },),
  cole no fim da lista e troque os textos:

    nome:   o nome do jogo, que aparece em letras grandes no cartão;
    frase:  uma frase curta dizendo o que a criança faz;
    icone:  um emoji grande que represente o jogo;
    cor:    a cor do cartão: "azul", "verde", "laranja", "roxo", "rosa" ou "vermelho";
    link:   o endereço do jogo.

  O botão "Compartilhar no Google Sala de Aula" do jogo, na área
  "Para professores" do rodapé, é criado sozinho a partir desta lista.

  A ordem da lista é a ordem dos cartões na tela.
*/
// Endereço do próprio menu, usado no botão de compartilhar o menu inteiro.
const ENDERECO_MENU = "https://phisantos51-hub.github.io/";

const JOGOS = [
  {
    nome: "Robô Letrinha",
    frase: "Programe o robô para formar palavras!",
    icone: "🤖",
    cor: "azul",
    link: "https://phisantos51-hub.github.io/JOGO-DE-ALFABETIZA-O/"
  },
  {
    nome: "Feira do Robô",
    frase: "Ajude o robô a contar e vender na feira!",
    icone: "🍎",
    cor: "verde",
    link: "https://phisantos51-hub.github.io/JOGO-DE-ALFABETIZA-O/matematica/"
  },
  {
    nome: "Robô Desenhista",
    frase: "Programe o robô para desenhar formas e letras!",
    icone: "🖍️",
    cor: "laranja",
    link: "https://phisantos51-hub.github.io/robo-desenhista/"
  },
  {
    nome: "Craques do LED",
    frase: "Jogue futebol sozinho ou com um amigo!",
    icone: "⚽",
    cor: "roxo",
    link: "https://phisantos51-hub.github.io/craques-do-led/"
  },
  {
    nome: "Robô Explorador",
    frase: "Explore a natureza e responda perguntas de Ciências!",
    icone: "🌱",
    cor: "rosa",
    link: "https://phisantos51-hub.github.io/robo-explorador/"
  }
];
