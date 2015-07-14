---
layout: post
title: Revisitando como atribuir comportamento a componentes
description: Uma releitura de como melhor atribuir comportamento a elementos já presentes em seu DOM
published: false
tags:
  - JavaScript
  - Módulos
excerpt: "<p>Tratar elementos do seu HTML como componentes é bastante útil para manter a sanidade do seu projeto. Este texto discute um assunto muitas vezes subestimado: qual o local mais adequado para iniciar seus componentes.</p>"
---

Já tem dois anos que escrevi um texto pontuando [como melhor amarrar código JavaScript a elementos do DOM](atribuindo-comportamento-a-componentes.html). De lá pra cá vivenciei uma série de projetos e entrei em contato com novas práticas e tecnologias. Nada mais justo que revistar o tema e acrescentar novos aprendizados.

## O problema

É natural que tecnologias, em especial as abertas, evoluam e conquistem agregados. Foi de uma maneira tímida que há algum tempo o HTML ganhou o JavaScript para si. E ao contrário do que muitos pensam, o difícil não foi desenhar uma nova linguagem, e sim definir como esta conversaria com o HTML. Assim surgiu a [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), a primeira e mais importante das JavaScript APIs.

O primeiro rascunho da DOM era bem simples e dava acesso a alguns itens da página, dentre eles: imagens, formulários e âncoras. Faça um teste e mude o *source* da primeira imagem da sua página favorita `document.images[0].src="bla.png"` ou experimente [validar um formulário à moda antiga](http://www.quirksmode.org/js/forms.html). Naquela época, nada além disto carecia de interatividade.

Passaram-se três anos até que a primeira versão do

## ReactJS
