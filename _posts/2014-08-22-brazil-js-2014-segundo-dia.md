---
layout: post
title: 'Live posting do segundo dia de BrazilJS 2014'
tags:
  - javascript
excerpt: "<p>Resenha do segundo dia do maior evento de JavaScript do mundo.</p>"
---

## From commit to prod in 5 minutes / Jacob Page

Jacob inicia sua palestra mostrando como o GoDaddy utilizava *branchs* do Git para criar novas funcionalidades com um processo que envolvia colocar código em produção em nada menos que 16 etapas. O processo era maçante e tomava muito tempo. 

A implementação de um sistema de Continuous Integration (CI) e Continuous Delivery (CD) os levaram a um processo de 5 minutos. O primeiro passo foi a definição de um GitHub Flow baseado em *pull request*. *Pull requets* são ótimas por documentarem funcionalidades sem que seja preciso escrever comentários no código. O fluxo compreende uso de JSHint e testes de código.

O *framework* [Mocha](http://visionmedia.github.io/mocha) com a biblioteca [Chai.js](http://chaijs.com) foi a escolha para testes de *front-end* que rodam em Selenium. A ferramenta [Istanbul](http://gotwarlost.github.io/istanbul) registra a cobertura de testes do código. 

A infra estrutura também é composta por Logstash para armazenar os *logs*, Elasticsearch para indexar as informações e Kibana para gerar representações dos dados. O *back-end*, que é escrito em Node.js, faz uso de New Relic para monitoramento. Ferramentas como Jira, Slack e Github Enterprise também foram utilizadas na nova infra estrutura. 

---

As ferramentas certas aplicadas em projetos de médio e grande porte podem melhorar significativamente a agilidade de publicação de código. Isto sem contar na capacidade de monitoramento de ocorrências. A palestra apresentou muito bem o tema e surpreendeu.

## Frontend was always my favorite color / Ricardo Tomasi

Ricardo ingressou na Booking.com no início do ano e ao ver que não existia nenhum fluxo para publicação de código, escreveu um projeto em Bash. A palestra é focada um tanto nas lições aprendidas neste projeto e muito mais nas experiências adquiridas na longa carreira de desenvolvimento *front-end* do palestrante.

O primeiro conselho do palestrante é compartilhar código e sobretudo escrever código. É importante aprender a fazer as coisas e saber ponderar quando incluir código dos outros no seu projeto. Código é um recurso orgânico e em algum momento será substituído. De qualquer maneira, saiba que seu código deve ser lido por outros programadores e nunca será perfeito.

Aprenda sempre sem abraçar tudo o que surgir, saiba escolher e focar seu aprendizado. Só não deixe de aprender Ciência da Computação. Conceitos por trás de redes de computadores são fundamentais para o desenvolvedor *front-end*. Estude também sobre algoritmos básicos, lógica, navegadores e sistemas operacionais. 

Não deixe de ajudar, você trabalha com outros seres humanos. Observe a competição no ambiente de trabalho como um estímulo para sua própria evolução.

Tente sempre dosar o nível de complexidade e suas habilidades de maneira a não chatear ou criar muita frustração na sua rotina. Faça menos e melhor. A menor *feature* que entrega mais valor é a que deve ser priorizada. Nesta linha, evite discutir e opinar sobre particularidades triviais da aplicação. As pessoas tendem a deixar de lado as parcelas mais importantes e complexas. Foque no menor produto que será apreciado pelo usuário.

---

O Ricardo tem um conhecimento extraordinário em desenvolvimento. Com toda certeza o caminho mais fácil para ele seria ter mostrado alguma ferramenta ou técnica de programação. Não teria chegado aos pés daquilo que ele apresentou hoje aqui. Precisamos conhecer mais sobre processo de aprendizado, trabalho em equipe e em como criar aplicações incríveis.

## Mastering IE’s updated F12 tools / Jonathan Sampson

A apresentação de Jonathan destacou as novas funcionalidades incluídas na ferramenta para desenvolvedores do Internet Explorer.

As melhorias são várias e afetam o painel de *debug*, análise no perfil de consumo de memória e contadores de tempo de execução de porções de código. 

A palestra foi muito baseada em mostrar como os painéis da ferramenta funcionam e em como tirar proveito deles.

---

As novas versões do Internet Explorer ainda são engessadas mas muito melhores que as cavernosas versões do passado que demoraram tanto a desaparecer. Tecnologias fechadas não merecem muita credibilidade, mas uma ferramenta para desenvolvedores mais poderosa pode ajudar muito a identificar *bugs*. O Internet Explorer ainda desfruta de uma boa parcela de mercado e não pode ser negligenciado. Melhor seria se rodasse no OSX.

## The Web Component Ecosystem / Rob Dodson

Muitos projetos são acompanhados de um componente de *tabs*. Cada um destes projetos, utiliza um conjunto de *tags* em quantidade e ordem arbitrária. 

Os Web Components surgem como uma alternativa para padronização e reuso. Mas as tecnologias que tornam possível a criação de componentes ainda são incipientes e não possuem um suporte adequado. Polymer trata-se de projeto que permite a criação de Web Components que operam nos navegadores que temos atualmente.

O projeto permitem declarar *custom elements*, definir *templates* e manipular Shadow DOM. A parte mais interessante diz respeito ao Shadow DOM, que permite encapsular CSS e *markup*. [Vale a pena conferir este artigo sobre Shadow DOM no HTML5Rocks](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom).

Polymer inclui uma série de *core components* que podem ser utilizados para estruturar projetos. Ressaltando que, segundo o projeto, componentes não precisam necessariamente de uma interface visual.

Seguido de muitos exemplos, os conselhos finais são: aprender, compartilhar e explorar.

---

A palestra apresentou muito bem o projeto e os conceitos por trás dos Web Components. Particularmente, não fico nada convencido em ter componentes que não possuam interface. Outro ponto é que a especificação de Web Components e "Polymer Web Components" possuem APIs diferentes. Um componente escrito agora utilizando Polymer precisará de alterações para seguir as especificações no futuro. Por estes itens e alguns outros, não considero que esteja pronto (ou deva) ser utilizado em produção.

## Data-binding [R]evolution / Leonardo Balter

Data-binding é o processo que estabelece uma conexão entre a interface da aplicação e os dados. Alguns *frameworks* como Angular e Ember inclusive já emulam data-binding.

A especificação do ES6 trás consigo uma especificação de *proxies*. Os *proxies* permitem receber um objeto e criando um novo objeto capaz de monitorar alterações e acessos a propriedades. 

Os *proxies* permitem, por exemplo, validar alterações de propriedades ou reagir a elas. Outro exemplo interessante é um *proxy* que simula o comportamento do gato de Schrödinger, que gera diferentes valores ao acessar propriedades. 

No ES7 temos uma implementação ainda mais interessante que permite observar objetos. Diferente dos *proxies*, o `Object.observe` não implica na criação de um novo objeto. Um pequeno detalhe é a impossibilidade de observar propriedades de elementos do DOM. Esta e outras funcionalidades do EcmaScript podem ser conferidas neste [repositório no Github](https://github.com/tc39/ecma262).

Os *proxies* já estão implementados no Firefox e os *observers* apenas no Chrome. Por inviabilidade técnica, nenhuma das duas *features* está inclusa no Traceur. Outros *polyfills* emulam estas funcionalidades mas é importante atentar para a influência que isto pode causar na performance.

A palestra encerrou com a apresentação de um exemplo de rádio que arrancou apláusos utilizando *data-binding*.

--- 

Os *frameworks* já indicam há bastante tempo que *data-binding* é uma ótima funcionalidade para se ter no JavaScript. Se formos analisar, APIs dos navegadores já utilizam *observers* para operar. Um ótimo exemplo é a propriedade `window.location` que quando alterada encaminha o usuário para uma nova URL. O `<video>` e `<audio>` são bons exemplos com suas propriedades `muted`, `volume`, `currentTime` e `src`. Enfim, há outros muitos exemplos. Seria uma benção ter o mesmo poder que os navegadores já tem há bastante tempo.

## AST, CST e Ferramentas Incríveis / Miller Medeiros

A palestra inicia com uma regra: não use expressão regular para analisar JavaScript. Antes de entender sobre AST e CST é importante observar como *parsers* funcionam. Em linhas muitos gerais, os *parsers* processam texto identificando grupos de caracteres que são os *tokens*.

Uma AST é uma representação abstrata de uma informação que irá sofrer alguma transformação. Através de uma AST de um código JavaScript é possível analisar este código e definir algum tipo de substituição ou simplificação.

O *parser* mais popular de JavaScript é o [Esprima](http://esprima.org). O resultado da sua execução é uma árvore em formato JSON com a análise léxica do código.

O CST, por sua vez, é uma representação concreta do código. Diferente de uma AST, a árvore gerada aqui inclui parênteses, vírgulas e outros itens. A AST do código `((a + b))` e `a + b` é a mesma. O CST é importante pois facilita reconstruir o código. Infelizmente, não temos nenhum padrão de CST para código JavaScript.

O projeto [Esformatter](https://github.com/millermedeiros/esformatter) do próprio Miller endereça a capacidade de formatar código EcmaScript. Junto com este, o projeto Rocambole precisou definir um padrão de CST para JavaScript. Uma última contribuição do palestrante é o projeto [Nodefy](https://github.com/millermedeiros/nodefy) para conversão do padrão de módulos AMD para aquele aceito pelo Node.js.

Outras ferramentas relacionadas ao assunto também foram apresentadas no final da palestra. Conferir os [slides da palestra](http://slides.millermedeiros.com/braziljs/ast) é válido para quem se interessou pelo assunto.

---

O Miller Medeiros com certeza é um dos melhores programadores JavaScript que devemos ter a honra de dizer que é brasileiro. Seus projetos são bastante significativos e sua palestra, mesmo abordando um tema extremamente complexo, foi impecável.

## A Day in the Life of an Ember Developer / Yehuda Katz

Yehuda começa sua palestra com a declaração de que não irá mostrar um simples *Hello World* e sim uma aplicação em que ele trabalha no dia-a-dia.

Um conceito importante para compreender o funcionamento do Ember é o de *data-binding*. Os templates no JavaScript não deixam de ser uma função que recebem dados e retornam *markup*. Com auxílio de *data-binding* é possível alterar o resultado do *template* assim que os dados sofrerem alguma alteração. Ainda, um dado pode ser ligado a um `<input>` e a informação passada pelo usuário então reflete em outras seções do *markup*. 

Uma alternativa ao *data-binding*, adotada por bibliotecas como Backbone, é o uso de um *event bus* para notificar ações ou ocorrências que podem influenciar no estado dos dados. O *framework* Angular.js utiliza um modo diferente conhecido como *dirty cheking*. E ainda é possível utilizar Virtual DOM assim como o React.js e talvez as próximas versões do Ember.

Yehuda apresentou diferentes alternativas para consolidar os dados e a interface que são adotadas pelos mais populares *frameworks* e bibliotecas. Assim como prometido, o fim da palestra foi um misto de apresentação de funcionalidades e *live coding*.

---

Precisamos cada vez mais tomar atenção aos diferentes *frameworks* e bibliotecas para escrita de aplicações. Cada um deles possui diferentes características e a escolha de qual utilizar sempre irá depender do contexto do produto e da equipe de desenvolvedores. A palestra conseguiu mostrar muito bem as diferenças entre eles sob o viés da gerências de dados.

## Making 3D Graphics Accessible / Ricardo Cabello (Mr. Doob)

Ricardo é criador da biblioteca [Three.js](http://threejs.org). Baseado em sua experiência em WebGL, o projeto surgiu com o objetivo de simplificar a escrita de aplicações 3D.

No passado, a única maneira de mostrar 3D no navegador era através de *plugins* como o Flash Player. O HTML5 se tornou uma carta de alforria da Adobe.

A palestra apresentou uma série de demonstrações de usos da biblioteca. As capacidades e funcionalidades são infinitas. Até mesmo foi mostrado um editor de modelos 3D executando diretamente no navegador.

---

A palestra encheu os olhos de muita gente. Mr. Doob merece o maior respeito por aquilo que fez. A mim deu uma nostalgia boa de quando eu estudava e escrevia Flash e tudo isto enchia campanhas publicitárias por ai. Em algum momento matamos os *plugins*. Corrijam se estou errado, mas agora estamos recriando todas estas tecnologias. Longa vida as tecnologias abertas.