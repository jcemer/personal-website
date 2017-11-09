---
layout: post
title: Dicas para evoluir um front-end legado
lang: pt
tags:
  - Front-end
  - HTML
  - CSS
  - JavaScript
excerpt: "<p>Um pouco da minha experiência com projetos legados.</p>"
---

Com a evolução das plataformas computacionais, os requisitos que as aplicações para a Internet devem atender têm se tornado mais e mais complexos. Em conformidade a isto, a disciplina de *front-end* é a que mais tem sofrido mudanças na sua gama de técnicas e práticas. **A lista de novos *frameworks*, bibliotecas e modos de escrita de código de maneira geral cresce a cada dia.**

Este artigo é focado em dicas gerais de como **aplicar gradativamente** as mais adequadas técnicas e práticas para modernizar o *front-end* de aplicações legadas.

## Estude o projeto

O projeto precisa ser estudado a fundo para que suas principais fraquezas sejam descobertas. Alto acoplamento, falta de organização, duplicação e código mal escrito (ou exclusivo para atender navegadores bem antigos) serão problemas facilmente encontrados em projetos legados.

Procure seguir os principais fluxos de navegação e **compreender bem o projeto** antes de aplicar qualquer mudança. Estudar bibliotecas e demais dependências é também importante nesta etapa.

## Testes

Uma suíte de testes é essencial para evoluir código legado. Caso seu projeto não possua nenhum tipo de teste, os funcionais são uma boa pedida para começar.  **Cubra ao máximo com testes** uma funcionalidade antes de começar a mexer em seu código. Apenas assim há uma garantia (mas nunca de 100%) de que você não irá quebrar nada.

## Dependências

Evoluir a versão das dependências de um projeto pode nem sempre ser uma tarefa fácil. Apesar disto, pode trazer muitos benefícios de perfomance e correção de *bugs*. **Investigue quais as mudanças nas versões das dependências que irá evoluir**. Mudar a versão da jQuery, por exemplo, não é uma boa ideia se sua aplicação não possui uma cobertura adequada de testes.

## Separe o código em módulos

O mais comum dos problemas de um código CSS e JavaScript legado é a falta de *separation of concerns*. São várias as maneiras de modularizar seu código, mas a simples tarefa de dividir o código em diferentes arquivos é um ótimo começo. **Durante este trabalho, será fácil identificar duplicações e criar novas abstrações.**

Ferramentas como o Asset Pipeline do Rails e gerenciadores de tarefas como Gulp e Grunt são essenciais para concatenar arquivos e executar tarefas de pré e pós processamento. Adotar e ou melhor configurar uma destas ferramentas para o projeto será o primeiro passo desta etapa.

## Pare de referenciar ids do HTML

Os *ids* servem como alvos para âncoras e portanto não podem ser duplicadas em um documento. **Referenciar *ids* no CSS quebra completamente qualquer chance de reuso de código**. Altere todos os seletores do CSS que referenciam *ids* para utilizarem classes.

As mudanças no seu JavaScript devem ser ainda mais drásticas. Evite usar *ids* ou classes (que servem para estilização) no seu código JavaScript. Os *data attributes* são ótimos para adicionar comportamento e dar acesso ao DOM.

## Implemente um sistema de escrita de CSS

Apesar de não ser um assunto tão novo, a maioria dos projetos legados não segue nenhum tipo de sistema de escrita de CSS. Além disto, seletores muito generalistas e os odiados *!important* podem ser ervas daninhas que você terá que se livrar.

Há um tempo [escrevi um artigo sobre os sistemas de escrita de CSS mais populares](http://tableless.com.br/oocss-smacss-bem-dry-css-afinal-como-escrever-css). A dica final de escrita de código apresentada no artigo pode servir de inspiração.

## Não abandone os padrões do HTML

Muitos *frameworks* e bibliotecas modernas de *front-end* pegam a responsabilidade de redefinir o fluxo da aplicação. E isto não é uma má ideia. Porém, é bastante difícil evoluir um código legado para utilizar AngularJS, por exemplo. Neste ponto, as dicas do [artigo que escrevi sobre como atribuir comportamento a componentes devem ajudar](/revisitando-como-atribuir-comportamento-a-componentes.html).

Em resumo, aplicar alguns padrões simples e bibliotecas como o Backbone.js são uma melhor estratégia. Apenas considere utilizar um *framework* quando seu código estiver em um estado mais maduro (e ainda assim, pense muito bem a respeito). **Receber um HTML pronto do servidor e enviar dados utilizando formulários nunca será uma má ideia.** Alguns *frameworks* privam você disto.

## Componentes

Reconhecer quais componentes fazem parte do projeto e entender quais seus padrões visuais é uma tarefa árdua. **O trabalho aqui é relacionar HTML, CSS, JS e demais recursos em uma única unidade**.

Esta etapa poderá exigir que você inclua novas bibliotecas e ferramental de *build* para o projeto. Não se preocupe, você já conhecerá o suficiente do projeto para fazer estas escolhas de forma acertada.

***

Evoluir projetos legados exige um plano de ação bem definido. Ao contrário do senso comum, sair reescrevendo tudo ou criar um projeto novo quase sempre é uma má ideia. **O ideal é estabelecer pequenas interações**. Lembre-se de documentar e compartilhar seu plano de ação a medida que seu domínio sobre o projeto for aumentando.

> Se cada vez você deixar um pouco melhor que antes, nunca vai degenerar - Juan Ibiapina.

***

Ao mesmo tempo, não se preocupe, algumas vezes etapas intermediárias deixarão o código mais verboso e até mais confuso. **Foque no resultado final, umas escoras e tapumes poderão ser necessários para fazer sua obra**.
