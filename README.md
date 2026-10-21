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

No rodapé há uma área fechada chamada **Para professores**. Ao abrir, aparecem os botões **Compartilhar no Google Sala de Aula**: um para o menu inteiro e um para cada jogo. Cada botão abre numa nova aba. Eles são criados sozinhos a partir da lista em `js/jogos.js`, então um jogo novo ganha o seu botão automaticamente. (Sem JavaScript, valem os links escritos no `index.html`, dentro de `<ul id="lista-compartilhar">`.)
