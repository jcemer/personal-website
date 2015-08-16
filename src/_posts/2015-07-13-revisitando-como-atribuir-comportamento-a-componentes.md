---
layout: post
title: Revisitando como atribuir comportamento a componentes
description: Uma releitura de como atribuir comportamento a elementos da página
tags:
  - JavaScript
  - Módulos
excerpt: "<p>Tratar elementos do HTML como componentes é bastante útil para manter a sanidade do seu projeto. Este texto discute um assunto muitas vezes subestimado: qual a forma mais adequada para iniciar seus componentes.</p>"
---

Já faz dois anos que escrevi um texto pontuando [como melhor amarrar código JavaScript a elementos do DOM](atribuindo-comportamento-a-componentes.html). De lá pra cá, vivenciei uma série de projetos e entrei em contato com novas práticas e tecnologias. Nada mais justo que revisitar o tema e acrescentar aprendizados.

## O problema

Foi de maneira tímida que no ano de 1995 o HTML ganhou o JavaScript para si. E ao contrário do que muitos pensam, o difícil não foi projetar uma nova linguagem (o que foi feito em pouco tempo), mas sim definir como esta conversaria com o HTML. Assim, praticamente junto com a criação do JavaScript, surgiu a [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), uma das mais importantes das JavaScript API's.

O primeiro rascunho da DOM era bem simples e dava acesso a alguns itens da página, dentre eles: imagens, formulários e âncoras. Era possível apenas consultar elementos e criar as famigeradas validações de formulários. Faça um teste e mude o *source* da primeira imagem da sua página favorita `document.images[0].src="bla.png"` ou experimente [validar um formulário à moda antiga](http://www.quirksmode.org/js/forms.html).

Mais tarde, em 1998, surgiu a especificação [W3C DOM level 1](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html), que contemplava o modelo completo de um documento HTML. Ela permitia criar, remover e alterar elementos mesmo depois de o documento ser carregado. Faça um teste e se impressione com a evolução que representou esta especificação `document.getElementsByTagName('P')[0].setAttribute('style', 'color:red')`.

As especificações [DOM level 2](http://www.w3.org/TR/DOM-Level-2-Core/changes.html) e [3](http://www.w3.org/TR/DOM-Level-3-Core/changes.html) de 2000 e 2004, respectivamente, não trouxeram muitas novidades.

>  São duas décadas evoluindo tecnologias para garantir que as páginas fossem cada vez mais interativas.

A comunidade de desenvolvimento desempenhou talvez o papel mais importante nesta evolução. A biblioteca jQuery foi uma grande revolução. Ela [implementou uma maneira mais simples de selecionar elementos](https://github.com/josephmisiti/the-first-version-of-jquery/blob/master/jquery.js#L365-L494) no HTML próxima àquela utilizada no CSS. A equivalente função `querySelectorAll`, mesmo que com um bom suporte nos navegadores, só deve sair na especificação [DOM level 4](http://www.w3.org/TR/2015/WD-dom-20150428).

Por outro lado, surgiram diversos *frameworks* de desenvolvimento *front-end* que forçam uma mudança total nos fundamentos e propósitos do HTML.

## A relevância do conteúdo

*Frameworks* de *front-end* como AngularJS, Ampersand.js, Vue.js e KnockoutJS são baseados em observação e *data-binding*. E infelizmente, indiferente de qual você adotar, **seu HTML se tornará um grande template**.

> É tudo sobre conteúdo e o que se perde é justo ele.

A própria documentação do AngularJS é um exemplo de desperdício de processamento no *lado do cliente* e entrega de uma página desconfigurada sem conteúdo. A solução é simples: **mostrar um belo "carregando"** enquanto se espera que sejam feitos algumas requisições a mais. Além disso, sempre pode-se usar um `ng-init` para injetar conteúdo e melhorar a *performance*.

Alguns destes *frameworks* são mais modernos e possuem estratégias mais inteligentes que merecem ser conhecidas e avaliadas. O Vue.js, por exemplo, [transforma as propriedades dos objetos em getters e setters](https://github.com/yyx990803/vue/blob/dev/src/observer/index.js) e evita o *dirty checking* presente no AngularJS 1.x. Outro exemplo é o [*design* baseado em componentes e a remoção do *two-way data-binding* no AngularJS 2.0](http://blog.mgechev.com/2015/04/06/angular2-first-impressions).

## Aplicações isomórficas

Aplicações web isomórficas são aquelas que podem ter seu código JavaScript processado também no servidor. O benefício desta técnica é a entrega de uma página **HTML recheda de conteúdo**, pronta para ser mostrada para o usuário. Esta técnica, inclusive, é apontada como o futuro do desenvolvimento web e é uma das mais atuais e inteligentes justificativas para utilização de Node.JS (além de *tooling*).

Meteor e React, você já deve ter ouvido falar, são as duas mais famosas tecnologias para criação de aplicações isomórficas, mas [existem  outras mais já disponíveis](http://isomorphic.net). Uma delas é o *open sourced* [Rendr do Airbnb](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps), que permite construir aplicações com Backbone.js.

Em um mundo apoiado em micro-serviços acessíveis por meio de APIs, nada mais justo que escrever **aplicações simples com um único codebase que atenda cliente e servidor**. Contudo, aplicações legadas ou restrições de uso de Node.JS (aplicações [CPU bound](https://en.wikipedia.org/wiki/CPU-bound) ou pura política) são algumas das razões que podem não permitir que sua aplicação seja isomórfica.

## Soluções não isomórficas

Vejamos as alternativas e técnicas disponíveis para criação de uma aplicação não isomórfica sem que seja preciso recorrer a *frameworks*.

### Componentização

Pensar seu *front-end* com base em [componentes é essencial para um código coeso e modular](https://speakerdeck.com/jcemer/componentes-para-a-web). Para ajudar nesta tarefa, gosto bastante da prova de conceito [Piecemaker](http://jcemer.com/atribuindo-comportamento-a-componentes.html#Piecemaker), apresentado no meu primeiro artigo sobre este assunto.

As *views* do Backbone.js são ótimas aliadas nesta tarefa. Elas são simples, possuem um bom padrão de nomenclatura e permitem [assistir os eventos do DOM](http://backbonejs.org/#View-delegateEvents) de maneira centralizada através da propriedade `events`.

### Dados e interface

Neste momento você deverá colocar a prova suas experiências com *data-binding*. Pergunte-se se vale a pena utilizar um *framework* apenas para aplicar as mudanças nos dados na interface.

Analise que os componentes irão ajudar muito a organizar o código. Com eles, será menos  doloroso aplicar mudanças ao documento de maneira artesanal, sem uso de *data binding*. E a partir do momento que sua aplicação prioriza a entrega de conteúdo pelo *back-end*, serão poucos os casos em que *templates* serão realmente necessários.

**Os *models* do Backbone.js são ótimos para armazenar dados oriundos de requisições adicionais ao servidor**. Além de [atenderem aos princípios REST](http://backbonejs.org/#API-integration), permitem facilmente que os componentes assistam mudanças nos dados por meio de eventos.

### Comunicação entre componentes

Em aplicações um pouco mais complexas, é comum que componentes sejam afetados uns pelos outros. O principal desafio, negligenciado pelos famigerados Web Components, é estabelecer uma forma de comunicação entre componentes.

Na época em que escrevi o artigo anterior, já havia enfrentado este problema e apliquei a solução mais simplista possível. Em muitos dos casos, um objeto global pode servir muito bem para estabelecer comunicação entre componentes.

Recentemente experimentei uma solução mais robusta inspirada no `$scope` do AngularJS que acredito que vale compartilhar. Assim como nos *controllers* e diretivas, cada componente possui um escopo que pode ser acessado pelos componentes que o constituem. O funcionamento pode ser melhor explicado através do código abaixo:

~~~ javascript
function bootstrap(root, parentScope) {
  _.map(root.children, bootstrapEach.bind(this, parentScope))
}

function bootstrapEach(parentScope, el) {
  if (el.hasAttribute('data-component')) {
    var Component = App.components[el.getAttribute('data-component')]
    var scope     = Object.create(parentScope)
    new Component(el, scope)

    bootstrap(el, scope)
  } else {
    bootstrap(el, parentScope)
  }
}
~~~

Os componentes, quando instanciados, receberão um elemento do DOM e um escopo. Sempre que um componente desejar compartilhar dados com os componentes que o constituem (aqueles associados a elementos filhos), basta atribuir um modelo ao `scope`.

Repare na linha 8 que, graças a orientação a objetos baseadas em protótipos do JavaScript, podemos fazer que os escopos funcionem igual ao efeito cascata do CSS na árvore do documento. A título de simplificação, sempre que dois componentes pertencentes ao mesmo nível no DOM quiserem compartilhar dados, um componente ancestral deverá adicionar um modelo a seu escopo.

### Single Page APPs

Uma das principais promessas do AngularJS 1.x e demais *frameworks* é tornar sua aplicação uma Single Page APP (SPA). Esta pode ser uma grande vantagem. Muitos deles inclusive já oferecem um bom suporte a manipulação de URL.

> Aplicações devem estar prontas para que o usuário possa a qualquer momento salvar ou compartilhar o estado atual.

O problema destas abordagens é que, para que os *frameworks* funcionem, as diferentes URLs da aplicação devem ser [configuradas no servidor para retornar o mesmo esqueleto](https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode). O que contraria a premissa de que **todos os estados da aplicação devem possuir uma página correspondente no servidor com conteúdo relevante para o usuário**.

A maneira mais eficaz de não cair neste erro, mais uma vez, é manter o *back-end* como protagosnista da sua aplicação. Caso mesmo desejar ou necessitar, alguns projetos como [Turbolinks](http://staal.io/blog/2013/01/18/dangers-of-turbolinks) podem auxiliar você a tornar sua aplicação uma SPA.

## Conclusão

Atribuir comportamento a uma página não é tarefa fácil. Muitas tecnologias e práticas tem surgido para preencher este abismo. A exemplo temos os [MutationObservers](http://caniuse.com/#feat=mutationobserver) e [*life cycle* dos Custom Elements](http://webcomponents.org/articles/introduction-to-custom-elements/#lifecycle-callbacks) que permitem um melhor monitoramento do documento dispensando muitas das pirotecnias atuais. **Ouso arriscar que todos estes *frameworks* serão extintos com o passar do tempo**.

Aplicações isomórficas prometem ser o futuro das aplicações web. Mas quando não recorrermos a elas, por mais retrô que pareça, boas práticas de desenvolvimento aliadas a bibliotecas como jQuery, Backbone.js e pequenos outros módulos ainda serão a melhor saída para desenvolver aplicações.

