---
layout: post
title: O dilema do único na Web
lang: pt
tags:
  - Front-end
  - HTML
  - CSS
  - JavaScript
excerpt: "<p>Alguns pensamentos e conceitos da Web.</p>"
---

As construções que fundamentam uma página Web são todas únicas. Cada página assume uma aba do navegador, com um endereço único, um `<body>` de um lado e outro `window` do outro. É tudo global, meu amigo.

A unicidade é tão absurda que JavaScript, HTML e CSS compartilham do mesmo fluxo de execução. Caso um demore a fazer seus cálculos, os demais sofrerão. Acontece.

Na Web, nada se parte pela metade. Mesmo quando desafiamos com alguns *scripts* postos a executar em modo assíncrono, além da garantia que irão executar um por vez, temos a garantia que o farão até terminar.

Simples e fácil como parece. A plataforma Web joga fora toda a complexidade que a computação carregou ao longo de sua história e é única em como conquista adeptos.
