---
layout: post
title: 'Atribuindo comportamento a elementos HTML'
description: Atribuindo comportamento a elementos já presentes em seu DOM
tags:
  - JavaScript
  - Módulos
---

[Plugins](http://plugins.jquery.com) e [widgets](http://jqueryui.com) de jQuery, [componentes](http://component.io) e outras muitas abstrações de organização e modularização de código são muito úteis para manter a sanidade do seu projeto.

## O problema

A partir do momento que um elemento no HTML é considerado um componente e precisa ter comportamento, este precisa ser instanciado por alguma abstração (sim, seu plugin, widget ou [Flight Component](http://flightjs.github.io)). O problema é justamente este: **como e aonde fazer isto**. Lembre-se que você terá várias páginas que terão diferentes (e alguns mesmos) componentes.

## Solução simplista

Acredito que já seja um consenso que entregar o mínimo e os mesmos arquivos em uma série de páginas seja essencial para economizar requisições e tirar proveito do *cache* do navegador do usuário.

A primeira vista, o mais simples então é empacotar todos os seus componentes em um único arquivo e instanciar todos eles no fim do arquivo. Claro, seu `<script>` precisa estar no fim do `<body>` para que isto tenha efeito.

~~~ javascript
$.widget("datepicker", { /* ... */ })
$.widget("draggable", { /* ... */ })
$.widget("comments", { /* ... */ })
/* ... */

// Setup
$(".draggable").draggable()
$(".datepicker").datepicker()
$(".comments").comments()
~~~

Código típico da jQuery UI, apenas um pitaco a respeito: componentes não possuem ligação nenhuma com estilização, [instanciar elementos com base em `data-*` é muito melhor](http://blog.realstuffforabstractpeople.com/post/31753521367/classnames-for-styling-data-attributes-for-behavior). Posto isto, chegamos a uma instanciação parecida com `$("[data-draggable]").draggable()`.

Esta abordagem nos leva a varrer o DOM, e chamar uma série de funções para isto, na intenção de instanciar os componentes de *draggable*. Mas, talvez uma página em específico, não tenha nenhum.

Na tentativa de corrigir este problema, na minha opinião não tão significativo, chegamos a outros piores.

## Soluções piores

A primeira delas é passar todas as instanciações para um arquivo específico que é exclusivo para cada página. O que nos leva a uma requisição extra.

Uma abordagem que é bastante útil para estilização é atribuir uma classe no `<body>` indicando a página, algo como: `page-home`, `page-product`. Deixando claro, nada contra utilizar classes no `<body>` para apoiar a **estilização**.

Enfim, naturalmente portamos isto para o JavaScript e chegamos no código a seguir:

~~~ javascript
$.widget("datepicker", { /* ... */ })
$.widget("draggable", { /* ... */ })
$.widget("comments", { /* ... */ })
/* ... */

var root = $('body')

// Setup product page
if (root.is('.page-product')) {
  $("[data-draggable]").draggable()
  $("[data-comments]").comments()

// Setup checkout page
} else if (root.is('.page-checkout')) {
  $("[data-draggable]").draggable()
  $("[data-datepicker]").datepicker()
}
~~~

É importante salientar que ambas soluções: arquivo JavaScript exclusivo e classes no `<body>` enfrentam problemas de manutenção.

Um componente pode ser removido de alguma página e o JavaScript precisará ser alterado para que este **não seja mais instanciado**. Pior, em muitos destes casos o JavaScript não será alterado por esquecimento, chegamos às famosas inconsistências.

Da mesma forma, quando a página de produtos ganhar um elemento que precisa utilizar *datepicker*, sei lá o porquê, este componente **não será instanciado**. Ok, isto será notado com alguns poucos testes e com alguma experiência no projeto (e boa memória) a solução será rápida. O arquivo de JavaScript será alterado com a adiação desta nova instanciação específica àquela página.

Alterar o JavaScript como efeito colateral da alteração de uma página não me parece prático, este arquivo precisará ser baixado novamente pelo usuário. Além disto, a estrutura de cache dos seus *assets* será afetada, os que trabalham com aplicações ou portais sabem o quanto isto pode não ser simples.

## Soluções melhores

Frameworks como o [Angular.js](http://angularjs.org) e a biblioteca [Dojo](http://dojotoolkit.org/features/1.6/html5data-attributes) há tempo tomaram a consciência de que o próprio elemento HTML deve indicar a qual componente pertence. Caso você não esteja utilizando nenhuma destas soluções, algo como o [Piecemaker](https://github.com/jcemer/piecemaker) deve resolver bem este problema.

### Piecemaker

A solução é simples, basta indicar quais os componentes que devem ser instanciados para cada elemento. Por convenção, o atributo utilizado será `data-pieces`.

~~~ html
<div class="container" data-pieces="colorize" data-color="#903D3D">
  Colorize
</div>
~~~

O JavaScript precisará conter, é claro, a definição do componente e o `setup` do Piecemaker.

~~~ javascript
var pieces = {
  colorize: function (container) {
    container.style.background = container.dataset.color
  }
}

// Setup
var piecemaker = new Piecemaker({
  namespace: pieces
})
piecemaker.setup()
~~~

O *setup* é responsável por buscar todos os elementos com `[data-pieces]` e instanciar as "peças" como se fossem construtores passando o *container* como parâmetro.

[Veja mais exemplos de usos da ferramenta](http://jcemer.com/piecemaker/samples) que também dá suporte a [ativação de componentes sob demanda](http://jcemer.com/piecemaker/samples/namespace_reload), [AMD](http://jcemer.com/piecemaker/samples/amd) e suporte a *mediator* para disparar novos *setups*.

-------

O Piecemaker, que já utilizei em alguns projetos, é apenas mais uma solução para este problema. O código é ainda imaturo e Pull Requests são bem vindos.

Por fim, espero gerar uma discusão saudável sobre este tema que vejo muitas vezes ser desprezado e cercado de soluções ruins. Atrelar comportamento via JavaScript ao seu projeto não é tão trivial quanto parece.

Até a próxima.
