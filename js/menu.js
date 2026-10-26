// Monta um cartão para cada jogo da lista em jogos.js.
// Cada cartão é um link comum: abre na mesma aba, recebe foco com Tab e abre com Enter.
(function () {
  const lista = document.getElementById("lista-jogos");
  lista.textContent = "";

  JOGOS.forEach(function (jogo) {
    const item = document.createElement("li");

    const cartao = document.createElement("a");
    cartao.className = "cartao cor-" + (jogo.cor || "azul");
    cartao.href = jogo.link;

    const icone = document.createElement("span");
    icone.className = "icone";
    icone.setAttribute("aria-hidden", "true");
    icone.textContent = jogo.icone;

    const nome = document.createElement("span");
    nome.className = "nome";
    nome.textContent = jogo.nome;

    // O ponto separa o nome da frase na leitura do NVDA.
    const pausa = document.createElement("span");
    pausa.className = "so-leitor";
    pausa.textContent = ". ";

    const frase = document.createElement("span");
    frase.className = "frase";
    frase.textContent = jogo.frase;

    cartao.append(icone, nome, pausa, frase);
    item.append(cartao);
    lista.append(item);
  });
})();

// Área "Para professores": uma lista para escolher o menu inteiro ou um jogo
// e um único botão que compartilha a escolha no Google Sala de Aula (nova aba).
(function () {
  const escolha = document.getElementById("escolha-compartilhar");
  const botao = document.getElementById("botao-compartilhar");
  escolha.textContent = "";

  const itens = [{ nome: "Jogos do LED (menu inteiro)", link: ENDERECO_MENU }].concat(JOGOS);

  itens.forEach(function (item) {
    const opcao = document.createElement("option");
    opcao.value = item.link;
    opcao.textContent = item.nome;
    escolha.append(opcao);
  });

  function atualizarBotao() {
    botao.href = "https://classroom.google.com/share?url=" + encodeURIComponent(escolha.value);
  }

  escolha.addEventListener("change", atualizarBotao);
  atualizarBotao();
})();
