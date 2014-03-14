---
layout: post
title: 'Live posting do primeiro dia da JSConfUY'
tags:
  - javascript
excerpt: "<p>Texto escrito \"ao-vivo\" durante a JSConf do Uruguai.</p>"
---

Cobertura do primeiro dia da JSConfUY 2014.

## We Play - Guillermo Rauch

Guillermo, conhecido pelo [socket.io](http://socket.io) dentre outros vários projetos *open source*, é um dos *keynotes* do evento. Sua palestra inicia abordando um pouco da história do socket.io, que surgiu da frustração do difícil uso de outras ferramentas similares e teve como objetivo tornar simples o uso de WebSockets.

O assunto principal são as novidades da versão 1.0.0-pre do socket.io que teve seu *release* recenente. Nesta nova versão modularização foi levada a sério e todos os commits são testados automaticamente em IE6+, iPhone, iPad entre outros navegadores e dispositivos.

Note que a API nativa de WebSockets aceita apenas a troca de mensagens no formato de *strings*. A nova versão, além de suportar o formato JSON já presente na versão 0.x, também suporta *binary data*.

O projeto http://weplay.io, título da sua palestra, é um ótimo exemplo do transporte de informações em formato binário em um jogo colaborativo. O jogo é emulado no servidor e cada *frame* é enviado para os clientes em formato binário, o que é impressionante e extremamente performático.

-------

Guillermo foi muito aplaudido por ser um nome importante da comunidade JavaScript. WebSockets é uma tecnologia incrível que infelizmente possui muitas implementações e problemas de suporte. Socket.io é um dos poucos projetos que efetivamente simplificou e popularizou a tecnologia. Foi uma honra assistir a apresentação de um dos seus criadores.


## Jade: A templating language - Forbes Lindesay

Sem muita cerimônia, Forbes logo explora um código escrito em HTML e seu equivalente em [Jade](http://jade-lang.com). O que segue é a apresentação completa da sintaxe e *feaures* da linguagem.

Um dos pontos interessantes foi a demonstração de como é possível passar conteúdo JavaScript para ser renderizado nos *templates* permitindo a geração dinâmica de HTML. Em favor do reuso, os *mixins* e *layout templates* foram apresentados. Outra funcionalidade interessante são os *filters* que permitem, por exemplo, mesclar código Jade com markdown.

O compilador do Jade foi descrito e defendido por ser bem desenvolvido e conter três estágios: *lexer*, *parser* e *compiler*. A vantagem para o usuário é a fácil depuração do código.

-------

Sou um grande admirador de linguagens que geram outras, por assim dizer. Mas apresentar uma nova linguagem em um evento deste porte inclui destacar os problemas que esta soluciona. O uso de uma linguagem ou tecnologia precisa ser bem justificado.


## Building for scale with KrakenJS - Lenny Markus

O objetivo do Kraken foi o de introduzir Node.js no PayPal. O [Kraken.js](http://krakenjs.com) é *Web Application Framework** apoiado em Express e que segue suas convenções. O *framework* compreende uma série de módulos com funções específicas: Lusca, para segurança; Marara, para internacionalização; Kappa, que é um *proxy#* NPM para manter módulos privados. Os módulos podem ser utilizados individualmente em aplicações escritas em Express.

O Kraken teve sua infraestrutura definida em três meses e em mais quatro meses um projeto piloto foi codificado para substituir outro escrito em Java. O impressionante é que a equipe que escreveu o projeto piloto possuia apenas dois desenvolvedores contra doze do projeto anterior. As diferenças de números de linhas de código também impressionam positivamente. A função do projeto piloto foi adquirir credibilidade para a tecnologia Node.js no PayPal.

------

O *framework* teve uma adoção absurda no PayPal e eles já mantêm 20 aplicações escritas. A apresentação foi muito boa e o mais humilde dos ensinamentos foi: "Mantenha as convenções de *Open Source* ao invés de reinventar suas próprias".


## Improving client-side apps' perfomance with Facebook's React - Jú Gonçalves

Jú Gonçalves inicia sua palestra com um de seus tweets que demonstra sua preocupação com performance. Em seguida, é apresentada uma explanação de como *frameworks* MVW geralmente funcionam.

O que faz o [React](http://facebook.github.io/react) diferente inicialmente é que ele não se trata de um MVW *framework*: não há *views*, *controllers* e similares.

A chave dos ganhos de performance estão relacionados com o fato de o React evitar acessar o DOM, o que ocasionaria *repaints* e *reflows*. A biblioteca obtem informações do DOM através de uma abstração da *DOMTree*: a *ComponentTree*. Após uma série de processamentos, esta abastração pode ser consultada e atestar se é necessária alguma intervenção no DOM.

O projeto [Om](https://github.com/swannodette/om), uma interface em ClojureScript para React também foi apresentado. Om alcança peformances mais interessantes ainda devido as características de imutabilidade das linguagens funcionais.

---------

A palestra tem um nível técnico de tirar o fôlego. É necessário muito estudo para dominar o uso e entender o funcionamento interno de cada uma das ferramentas apresentadas.


## Taking Promises Seriously - James MacAulay

*Promises* surgiram de diferentes bibliotecas e propostas de especificações. O padrão mais aceito é o Promises/A+ e já há uma especificação rascunho no ES6: `function Promise() { [native code] }`. Antes das *promises*, o único jeito era usar *callbacks* aninhadas.

O uso de *promises* é baseado na função `.then`: *promises* que seguem a especificação irão retornar um valor transformado em uma chamada de `.then`. Desta forma, é possível aninhar chamadas de tal maneira que sua ordem afete o resultado final. É importante notar que o `Deferred` retornado nas chamadas assíncronas da jQuery não segue esta premissa.

Um uso interessante da API de *promises*, é utilizar a função `race` para definir um tempo limite de espera para que um valor fique "pronto".

É essencial que biblitoecas e *frameworks* passem cada vez mais a aceitar valores de *promises*. Para ajudar com esta tarefa, bibliotecas como [kozu](http://github.com/jamesmacaulat/kozu) permite tornar qualquer função passível de ser utilizada com promises. Assim podem usar underscore com coleções cujos valores sejam *promises*, o que é muito interessante.

----------

A palestra é cheia de boas sacadas em diversas bibliotecas e o conteúdo foi apresentado de maneira muito clara. Além disto, dominar *promises* é essencial para todo desenvolvedor que queira evitar o `callback hell` e explorar outras características poderosas.


## Functional JavaScript - Federico Silva

Uma linguagem é baseada em expressões primitivas, meios de combinação e de abstração. Com a definição de linguagem é que Federico inicia sua palestra.

> JavaScript possibilita diferentes paradigmas mas não força o uso de algum.
> - Jeremy Ashkenas

Em JavaScript, funções são cidadões de primeira classe, o que significa que funções são equivalentes a qualquer outro tipo de valor da linguagem, podendo ser atribuídas a variáveis, por exemplo. Ainda, em JavaScript, as funções são de alta ordem: uma chamada de função pode receber funções e retornar outras.

Linguagens unicamente funcionais são bastante calcadas em imutabilidade. Pela caracterísica orientação a objetos do JavaScript, que tendem a manter estado e portanto são mutáveis, devemos tomar atenção.

A sequência da palestra mostra uma série de conceitos e práticas de programação funcional. Muitos dos exemplos são escritos em [Underscore](http://underscorejs.org).

A conclusão é que, por programação funcional ser orientado ao processamento de dados, esta pode facilitar a vida do programador em muitos casos.

------

Este é um assunto do qual sou muito fã. Mesmo sem uma base funcional perfeita no JavaScript, (sem [Tail call optimization](http://en.wikipedia.org/wiki/Tail_call), por exemplo) bibliotecas como Underscore podem fazer valer a pena programar no paradgima funcional. Um livro ótimo para quem quiser se aprofundar no assunto é o Functional JavaScript do Michael Fogus.

-------

*Esta postagem ainda será atualizada.*
