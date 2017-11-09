---
layout: post
title: 'TJ Holowaychuk anunciou que está largando o Node.JS e você com isto?'
lang: pt
tags:
  - javascript
  - node.js
excerpt: "<p>A repercussão e as razões que levaram um dos membros mais importantes a abandonar o Node.js.</p>"
---

A repercussão não tem como ser das melhores quando um dos membros mais ativos da comunidade Node.js [anuncia a sua despedida](https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b). TJ Holowaychuk ([@visionmedia](https://github.com/visionmedia)) detém a autoria de quase seiscentos pacotes do NPM. Seus projetos vão desde *frameworks* para teste, pré-processadores de CSS, *template engines* para HTML a *framework* de aplicações web. Sem contar a sua iniciativa em definir [componentes para *front-end*](https://github.com/component/component.io) muito antes de falarmos em WebComponents.

A primeira reação da comunidade foi agradecer todos estes projetos e a colaboração do TJ com a comunidade. Mas, em seguida, muitos se voltaram aos argumentos deixados no texto de despedida por de certa forma colocar em xeque o futuro do Node.js. Há algum tempo tenho pensando em escrever algo a respeito de como a plataforma é mal compreendida e o momento parece bastante oportuno.

## Um breve histórico

Ryan Dahl, criador do Node.js, iniciou seu desenvolvimento buscando a melhor maneira de notificar o usuário sobre o progresso do *upload* de um arquivo. A plataforma teve como premissa ser um *webserver* que respondesse a requisições sem estar apoiado em um sistema de arquivos assim como Apache ou nginx.

Na época, o V8 se tornava popular pela sua perfomance e não havia nenhum projeto promissor que levasse o JavaScript para o *server side* (na realidade já existiam projetos como o [Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)). Ryan aproveitou que não existiam APIs para lidar com I/O e então pode definir a sua maneira.

Esperar o *upload* de um arquivo, por exemplo, pode ser endereçado sincronamente (ficando indisponível para outras requisições), criando novos processos ou *threads* (custoso e podendo ficar complexo com facilidade). O trunfo do Node.js é conseguir lidar com várias conexões (request/response) economicamente graças ao *event-loop*, [tudo executa em paralelo exceto seu código](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop).

## Usos do Node.js

Acredito que o principal pacote do Node.js seja o Socket.io. Aplicações de *real time* utilizando Server Sent Events ou WebSockets são as mais adequadas para serem escritas utilizando a plataforma. Nunca pense em utilizar a plataforma para aplicações que servem muitos arquivos ou sejam *CPU bound*, existem soluções muito melhores para isto. Entenda melhor as razões e definições neste [artigo do Fabio Akita](http://www.akitaonrails.com/2013/12/23/solucoes-para-um-mundo-assincrono-concorrente). Levando isto em conta, o mercado em que realmente se aplica o uso de Node.js é limitado.

A disciplina de *front-end* tem ganhado importância e naturalmente evoluído para suprir as necessidade de desenvolvimento. O Node.js é escrito inteiramente em JavaScript, linguagem que todo o *front-end* está familiarizado. Nada mais natural que a plataforma seja utilizada para criação de ferramentas que garantam qualidade e dêem conta das tarefas do dia-a-dia.

Existem projetos como gerenciadores de tarefa, pré e pós processadores de CSS, *frameworks* de teste com suporte a integração contínua, concatenadores de código, compiladores de módulos, conversores entre diferentes sistemas de módulos, dentre muitos outros. O Node.js se consolidou como a plataforma do desenvolvedor *front-end*.

## Por que TJ está se despedindo?

Segundo seu texto de despedida, ele simplesmente não está mais inserido em um mercado onde o uso do Node.js é justificado. Dito isto, ele alega estar indo para [Go](https://code.google.com/p/go/) que assim como o Node.js, lida muito bem com concorrência.

Uma mudança deste tipo faz todo sentido. Apenas alguns argumentos do TJ contra *callbacks* precisam ser melhor esclarecidos. O Node.js utiliza a mesma especificação da linguagem JavaScript utilizada nos navegadores. A única diferença é a maneira com que o Node.js implementa seu sistema de módulos baseado em CommomJS. Nenhuma nova construção foi criada para lidar com código assíncrono, por exemplo. E por isto o Node.js faz uso das famigeradas *callbacks* tão conhecidas por nós *front-ends*.

É claro que, como TJ mesmo cita, os *generators* (em conjunto com *promises*) dão uma nova perspectiva para o tratamento de operações assíncronas. Tanto que os projetos que ele se compromete em continuar mantendo são o [co](https://github.com/visionmedia/co) e [koa](http://koajs.com).

O Node.js já foi [criticado antes](https://blog.jcoglan.com/2013/03/30/callbacks-are-imperative-promises-are-functional-nodes-biggest-missed-opportunity) por ter adotado *callbacks* ao invés de *promises*, por exemplo. Mesmo assim, as funções da API do Node.js podem ser facilmente convertidas em promessas. **A plataforma continua sendo muito poderosa e simples. As APIs são muito bem definidas e é muito fácil estender e aplicar novas técnicas.**

## O que a comunidade perde

A comunidade com certeza perde um dos seus membros mais ativos. É inegável que o TJ atraia bastante atenção e tenha trazido conceitos (a exemplo do Co) de outras fontes para a plataforma. Assim como o [@shiota apontou](https://twitter.com/shiota/status/485073199672360960), desenvolvedores com a importância do TJ precisam tomar cuidado com suas declarações. É muito comum que as opiniões sejam mal interpretadas. Muitos outros já deixaram o Node.js antes, inclusive Ryan Dal que foi seu criador. Não há nada de errado nisto, seres humanos enjoam e todos ganham quando sangue novo toma conta do pedaço.

Apesar de ser um grande desenvolvedor, TJ iniciava muitos grandes projetos e os abandonava para partir para outros que abordavam os mesmos problemas. Um grande exemplo é o próprio Express em relação ao Koa.

A comunidade Node.js tem muito o que amadurecer e este amadurecimento passa pela criação de soluções canônicas e robustas. Isto sem esquecermos quais os reais usos da plataforma. O Node.js sobreviverá. Longa vida ao Node.js.
