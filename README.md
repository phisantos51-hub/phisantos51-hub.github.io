# Jogos do LED

Menu dos Jogos do Laboratório de Educação Digital, para o 1º, 2º e 3º ano do Ensino Fundamental.

Endereço: https://phisantos51-hub.github.io/

## Arquivos

- `index.html`: a página.
- `css/estilo.css`: cores, tamanhos e o visual dos cartões.
- `js/jogos.js`: **a lista dos jogos** (nome, frase, ícone, cor e link).
- `js/menu.js`: monta um cartão para cada jogo da lista.

## Como acrescentar um jogo

Abra `js/jogos.js`, copie um bloco `{ ... },`, cole no fim da lista e troque o nome, a frase, o ícone (um emoji), a cor (`azul`, `verde`, `laranja`, `roxo`, `rosa` ou `vermelho`) e o link. Para quem usa o computador sem JavaScript, acrescente também o link no `index.html`, dentro de `<ul id="lista-jogos">`.

## Para professores

No rodapé há uma área fechada chamada **Para professores**. Ao abrir, aparece a lista **O que você quer enviar?** (o menu inteiro ou um dos jogos) e um único botão **Compartilhar no Google Sala de Aula**, que abre numa nova aba. A lista é montada sozinha a partir de `js/jogos.js`, então um jogo novo aparece nela automaticamente, sem aumentar o rodapé.

## Versão dos arquivos (cache do navegador)

No `index.html`, os arquivos de estilo e de JavaScript são chamados com `?v=` e um número (por exemplo, `css/estilo.css?v=4`). Sempre que `css/estilo.css`, `js/jogos.js` ou `js/menu.js` mudar, aumente esse número nas três linhas. Assim, os navegadores baixam a versão nova, em vez de usar a cópia antiga guardada.
