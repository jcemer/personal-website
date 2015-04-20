---
layout: post
title: 'Live posting do segundo dia da JSConfUY - parte 1'
tags:
  - javascript
excerpt: "<p>Texto escrito durante a JSConf do Uruguai.</p>"
---

Cobertura comentada da manhã do segundo dia da JSConfUY 2014. Não deixe de ler a [cobertura do primeiro dia](primeiro-dia-jsconf-uy.html) e a [parte 2 do segundo dia de evento](segundo-dia-jsconf-uy-parte-2.html).

## Tiny modules on the frontend - James Halliday

Conhecido como [@substack](https://twitter.com/substack), Halliday tem o título de maior número de pacotes publicados no NPM, gerenciador de pacotes do Node.js.

A palestra inicia com a justificativa de que aplicações podem ser compostas por pequenos módulos e um bom exemplo daquilo que pode ser um módulo são os *polyfills*. A partir do momento que você desenvolve módulos no estilo do node.js (usando `require()`), ferramentas como [browserify](https://github.com/substack/node-browserify), criação do substack, podem ser usadas para empacotar seus módulos permitindo que sejam usados no *front-end*.

A principal vantagem é poder usar toda a organização e padrões adotados pelo node.js e escrever código que, quando adequado, possa ser executado tanto no *front-end* quanto no *back-end*.

James mostrou alguns de seus pequenos módulos preferidos em ação, dentre eles:

- [observable](https://www.npmjs.org/package/observable)
- [insert-css](https://www.npmjs.org/package/insert-css)
- [class-list](https://www.npmjs.org/package/class-list)
- [baudio](https://www.npmjs.org/package/baudio)

--------

A palestra teve muito *live conding*. Substack tem uma capacidade incrível de raciocinar e escrever, não é por nada que ele possui mais de três centenas de módulos publicados. Todos os exemplos focaram em ilustrar como uma aplicação pode ser construída com base em módulos com responsabildiades bem definidas.

O desenvolvimento web já está com os dois pés na modularização, se você ainda está por fora do assunto, aconselho que confira [Modularização em JavaScript](http://tableless.com.br/modularizacao-em-javascript).


## Be MEAN - Jean Carlo Nascimento

Suissa, como é conhecido, é um grande evangelista do *stack* MEAN no Brasil. A proposta é a escrita de aplicações utilizando o máximo possível de JavaScript. O *stack* compreende, na ordem das letras de seu nome: MongoDB, Express, Angular e Node.js.

O sitema de gerenciamento de banco de dados MongoDB é não relacional e permite que dados em formato JSON sejam traduzidos automaticamente e armazenados. MongoDB tem a características de escalar com facilidade. Uma série de conceitos e outros mecanismos permitem utilizar mais de uma instância de máquina com tolerância a falhas. O sistema permite ainda o uso de GridFS, um sistema de arquivos distribuído baseado em mémoria, para reduzir significativamente o acesso a disco.

A principal mudança de paradigma é deixar de lado a modelagem dos relacionamentos do banco de dados e focar nas perguntas e respostas que se espera extrair dos dados.

As demais tecnologias são apresentadas.

- Node.js:  A plataforma  é utilizada no *back-end* graças a sua característica de I/O não bloqueante
- Express: *framework* para escrita de aplicações em Node.js
- Angular: *framework front-end* para escrita de aplicações caracterizado por ser *two-way data-binding*.

-------

A palestra atende seu propósito de apresentar as tecnologias e suas particularidades. É tentador observar a quantidade de recursos que já temos acesso via JavaScript. Não acredito que toda a aplicação deve utilizar necessariamente este *stack*, mas com certeza muitas aplicações podem se beneficiar de alguma das tecnologias.

## JavaScript Security: myths, fallacies and anti-patterns - Joe Petterson

Joe justifica que não pensamos o suficiente em segurança. Nosso principal desafio é considerar o ambiente do cliente como nosso ambiente de execução.

Os conceitos de segurança no *front-end* estão ficando cada vez mais complexos. Várias das técnicas apresentadas estão relacionadas com tratar qualquer informação não confiável antes de adicioná-la a elementos HTML.

Outros assuntos abordados foram: *LocalStore*, *SesssionStorage*, *WebWorkers*, *Sandboxed iframes*, *Offline Applications* e *WebGL*. O ataque mais interessante apresentado foi o de *WebGL*: um modelo 3D com capacidade de explorar algum *driver* de GPU vulnerável é enviado para o cliente em uma tentativa de executar código em *kernel mode*.

-----

O conteúdo da palestra foi bastante vasto e denso, até o momento, foi a apresentação mais difícil de acompanhar. Todavia, os *slides* são (TODO: adicionar o hiperlink) uma fonte de estudo muito boa.


## MontageJS - Benoit Marchant

Benoit é criador do *framework* HTML5 [MontageJS](http://montagejs.org) e trabalhou por dez anos para a Apple. A despeito dos desafios com o DOM e custos de renderização de CSS, Benoit defende a máxima de que a experiência do usuário é a chave.

O *framework* disponibiliza uma estruta *MVC* calcada em componentes. O *flow* da aplicação é baseado em receber *input*, processar a lógica e renderizar. Todo este processo precisa ser rápido o suficiente para não prejudicar a performance. MontageJS consegue mitigar este problema desacoplando a lógica da renderização.

A apresentação foi recheada de exemplos enfatizando a experiência do usuário e a organização das aplicações em componentes.

------------

Os conceitos e filosofias apresentados na palestra foram muito bons. Mas nada disto é novidade e se aventurar em um *framework* com uma pequena comunidade pode não ser uma boa ideia. Mesmo assim, para quem se interessar [My First MontageJS Application](http://renaun.com/blog/2013/05/my-first-montagejs-application) apresenta muito bem o *framework* e de quebra rascunha uma aplicação simples.

------------

Não deixe de ler a [cobertura do primeiro dia](primeiro-dia-jsconf-uy.html) e a [parte 2 do segundo dia de evento](segundo-dia-jsconf-uy-parte-2.html).
