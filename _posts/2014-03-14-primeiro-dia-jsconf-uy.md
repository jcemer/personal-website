---
layout: post
title: 'Live posting do primeiro dia da JSConfUY'
tags:
  - javascript
excerpt: "<p>Textp escrito \"ao-vivo\" durante a JSConf do Uruguai.</p>"
---

Cobertura do primeiro dia da JSConfUY 2014.

## We Play - Guillermo Rauch

Guillermo, conhecido pelo socket.io dentre outros vários projetos *open source*, é um dos *keynotes* do evento. Sua palestra inicia abordando um pouco da história do socket.io, que surgiu da frustração do difícil uso de outras ferramentas similares e teve como objetivo tornar simples o uso de WebSockets.

O assunto principal são as novidades da versão 1.0.0-pre do socket.io que teve seu *release* recenente. Nesta nova versão modularização foi levada a sério e todos os commits são testados automaticamente em IE6+, iPhone, iPad entre outros navegadores e dispositivos.

Note que a API nativa de WebSockets aceita apenas a troca de mensagens no formato de *strings*. A nova versão, além de suportar o formato JSON já presente na versão 0.x, também suporta *binary data*.

O projeto http://weplay.io, título da sua palestra, é um ótimo exemplo do transporte de informações em formato binário em um jogo colaborativo. O jogo é emulado no servidor e cada *frame* é enviado para os clientes em formato binário, o que é impressionante e extremamente performático.

-------

Guillermo foi muito aplaudido por ser um nome importantes da comunidade JavaScript. WebSockets é uma tecnologia incrível que infelizmente possui muitas implementações e problemas de suporte. Socket.io é um dos poucos projetos que efetivamente simplificou e popularizou a tecnologia. Foi uma honra assistir a apresentação de um dos seus criadores.


## Jade: A templating language - Forbes Lindesay

Sem muita cerimônia, Forbes logo explora um código escrito em HTML e seu equivalente em Jade. O que segue é a apresentação completa da sintaxe e *feaures* da linguagem.

Um dos pontos interessantes foi a demonstração de como é possível passar conteúdo JavaScript para ser renderizado nos *templates* permitindo a geração dinâmica de HTML. Em favor do reuso, os *mixins* e *layout templates* foram apresentados. Outra funcionalidade interessante são os *filters* que permitem, por exemplo, mesclar código Jade com markdown.

O compilador do Jade foi descrito e defendido por ser bem desenvolvido e conter três estágios: *lexer*, *parser* e *compiler*. A vantagem para o usuário é a fácil depuração do código.

-------

Sou um grande admirador de linguagens que geram outras, por assim dizer. Mas apresentar uma nova linguagem em um evento deste porte inclui destacar os problemas que esta soluciona. O uso de uma linguagem ou tecnologia precisa ser bem justificado.

-------

*Esta postagem ainda será atualizada.*
