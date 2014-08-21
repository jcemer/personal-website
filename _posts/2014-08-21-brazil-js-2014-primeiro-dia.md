---
layout: post
title: 'Live posting do primeiro dia de BrazilJS 2014'
tags:
  - javascript
excerpt: "<p>Resenha do primeiro dia do maior evento de JavaScript do mundo.</p>"
---

## Service Workers / Renato Mangini

A palestra de Renato Mangini é sobre a especificação com o maior potencial de mudar a forma que você programa para a web. 

O Network Service, uma das especificaçães de Service Workers, é responsável por controlar as requisições de rede. Ao contrário da especificação de App Cache, mais destinada ao controle dos arquivos e não das requisições, os Service Workers permitem lidar facilmente com arquivos dinâmicos e responder a diferentes cabeçalhos da requisição.

O Service Worker é instalado via JavaScript no primeiro acesso a uma página. Enquanto isto, a página continua requisitando os *resources* normalmente. No primeiro acesso, o Network Service não será utilizado.

Nos acesso subsequentes a mesma página, o Service Worker será consultado com a requisição de cada um dos *resources*. O serviço tem acesso a um *cache* que armazena os arquivos indiferente de seus cabeçalhos indicarem o contrário. Fica a critério do Network Service consultar este *cache* persistente ou direcionar a requisição para o mundo exterior.  Mais informações sobre Service Workers podem ser encontradas no [repositório slightlyoff/ServiceWorker](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md).

As especificações futuras dos Service Workers incluirão: Background sync, Push messages, Geofencing e Bluetooth.

---

Os Network Services servem como que um *proxy* para as requisições. Além do *cache*, arquivos não encontrados no servidor e entrega de arquivos alternativos quando Offline podem ser melhor resolvidos pelo serviço, por exemplo. Nisto é que reside a magia da especificação.

## Frontend at Scale - The Tumblr Story / Chris Miller

O Stack front-end do Tumblr é composto por Backbone, jQuery, Sass (com [Bourbon](http://bourbon.io)), [VelocityJS](http://julian.com/research/velocity) para animações e Gulp para automação de processos. O processo do Tumblr envolve times pequenos com cerca de cinco pessoas o que permite reagir a mudanças rapidamente. Todo código escrito precisa da revisão de dois outros desenvolvedores antes de ser considerado pronto.

O desenvolvimento de funcionalidades é guiado por testes A/B. O que comprova estatisticamente que o código escrito traz melhorias para algum aspecto do produto ou negócio. Além disto, novas funcionalidades no Tumblr são disponibilizadas inicialmente para usuários privilegiados antes de ser colocada para 1%, 5%, 10%, até 100% dos usuários.

Uma preocupação interessante é o tratamento adequado de excessões com uma *callback* simples associada a `window.onerror`. Os erros podem então ser monitorados.

---

É interessante observar como grandes produtos do mercado utilizam técnicas simples e ferramentas comuns que já são aplicadas há muito tempo por aqui. Precisamos reconhecer nosso talento e capacidade em manter aplicações com maestria e deixar de lado nossa *síndrome de vira-lata*.

## Raw WebGL / Nick Desaulniers

Existe todo um mundo além de [three.js](http://threejs.org) para utilizar WebGL no navegador. O que segue é um panorama sobre computação gráfica, utilização de triângulos e transformadas que podem ser aplicadas a eles.

