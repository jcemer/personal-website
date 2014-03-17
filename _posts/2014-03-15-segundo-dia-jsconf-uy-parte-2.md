---
layout: post
title: 'Live posting do segundo dia da JSConfUY - parte 2'
tags:
  - javascript
excerpt: "<p>Texto escrito \"ao-vivo\" durante a JSConf do Uruguai.</p>"
---

Cobertura comentada da tarde do segundo dia da JSConfUY 2014. Saiba que também há cobertura do [primeiro dia](primeiro-dia-jsconf-uy.html) e da [primeira parte deste mesmo dia de evento](segundo-dia-jsconf-uy-parte-1.html).

## A future called Web Components - Zeno Rocha

Zeno Rocha, nosso Paul Irish do Brasil, começou com sua predição de que todos os projetos *client-sides* estão fadados ao fracasso. Sua opinião é logo justificada com o surgimento de `<canvas>`, `document.querySelector()` e `<input type="date">` que abalaram o mercado do Flash, jQuery e JQueryUI, respectivamente.

Temos uma quantidade incrível de *frameworks* e bibliotecas *front-end* atualmente, e todas elas são baseadas em seus próprios pequenos módulos. Sempre que precisamos de algo novo, vamos direto aos buscadores e testamos (com muito pouco sucesso) uma infinidade de *plugins*.

WebComponents permitem criar novos componentes ou extender outros elementos com novas funcionalidades. WebComponents é termo mestre para as seguintes tecnologias:

- *CustomElements*: permitem definir um novo elemento através de JavaScript já prevendo uma série de comportamentos. A especificação ainda está em rascunho e por isto é preciso usar *polyfills* como [Polymer](http://www.polymer-project.org).

- *Templates*: Todos sabemos que a tarefa de definir *templates* em HTML é um tanto arriscada. Principalmente porque o conteúdo será processado podendo requisitar recursos. Por tal motivo é que encapsulamos *templates* com `<script type="template">`. A especificação de *Template* é a solução definitiva.

- *ShadowDOM*: diz respeito a como os navegadores escondem os detalhes de implementação de um elemento. A especificação nos dá acesso a esta abstração permitindo, por exemplo, que possamos definir estilos próprios para este conteúdo. Adeus a todos os *namespaces* e dificuldades de organização de *CSS*.

- *imports*: permitem incluir recursos externos aos documentos, assim como fazemos no *back-end* das aplicações.


É preciso ter maturidade e conhecimento para entender que, mesmo com todas estas funcionalidades, não devemos criar uma aplicação inteira utilizando uma única *tag*.

Inspirado em repositórios de código e componentes como NPM e Bower, Zeno juntou uma *turma da pesada* e lançou o projeto [Custom Elements](http://customelements.io). O que segue é a apresentação de alguns destes componentes.

----------

É fantástico como Zeno consegue inspirar a galera e instigar o crescimento de todas as comunidades pelas quais ele passa. A palestra é perfeita em apontar desafios que temos nos tempos atuais e apresentar interessantes evoluções.

*WebComponents* e um conjunto de especificações que ainda precisam amadurecer e fugir do alvo de disputadas como esta da [Apple que removeu o suporte](http://trac.webkit.org/changeset/164131) de *ShadownDOM* do *Webkit*. Mesmo que não sejam estas as especificações que teremos nos futuro, com certeza estas ideias farão parte de uma evolução eminente do desenvolvimento *front-end*.


## Source Maps, how they work and why you should care - Thorsten Lorenz

Thorsten, criador do [es6ify](https://github.com/thlorenz/es6ify), inicia sua apresentação explicando qual a utilidade dos *source maps* e como ferramentas como [stack-mapper](https://github.com/thlorenz/stack-mapper) auxiliam na sua geração.

A sequência da palestra mostra muitos exemplos e ferramentas que fazem uso de *source maps*. O funcionamento de geradores de *source maps* também é abordado.

------

Thorsten tem uma série de projetos relacionados com *source maps* e sua palestra mostrou como tirar proveito de cada um deles.


## Testing Sucks - Leo balter

Leo Balter, um dos *contributors* da jQuery e criador da [Dexter](http://dexterjs.com/), inicia sua apresentação definindo um dos grandes desafios da programação JavaScript: MEH - *Multiple Environment Hell*. São muitos navegadores e dispositivos em que nosso código JavaScript precisa funcionar. Uma das boas citações da palestra é a de que todo código sem testes é um código legado.

É inerente a programação testar seu próprio código. Precisamos apenas definir como fazer isto de uma maneira que seja pouco monótona e o menos custosa possível. O essencial é que você comece a testar seu código de maneira unitária com base em TDD. A parte mais crítica e meno complexa de seu código deve ser sua porta de entrada.

O que seguem são exemplos de suítes de testes escritas em [QUnit](https://qunitjs.com). Balter demostrou a evolução de uma implementação juntamente com seus testes.

Outro ponto importante na prática de testes é analisar o quanto do seu código está coberto por testes. Ferramentas como  Grunt e [Instanbul](https://github.com/taichi/grunt-istanbul) provêm um relatório completo com a porcentagem de instruções, *branches*, linhas e funções testadas.

O fechamento da palestra apresentou o conceito de *Continuous Integration* e sua importância de uso em equipes de desenvolvedores. O [Travis-CI](http://travis-ci.com) também teve seu espaço na apresentação com a configuração de um projeto JavaScript no serviço.

---------

Balter já é um evangelista de testes há muitos anos e seu conhecimento na área só parece amadurecer. A apresentação descomplicou o uso de testes e apontou as vantagens de seu uso. Além disto, respondeu uma das principais dúvidas que tenho ouvido: por onde começar a testar.


## Death to cookies, long live JSON Web Tokens - Matias Woloski e Jose Romaniello

Nos anos 90 a vida era muito fácil. Havia cliente fazia autenticação com o servidor e a partir disto esta autenticação era persistida. Em 2000, há o surgimento das *intranets* apoiadas em *tokens* de autenticação.

Na atualidade, as aplicações possuem muitos outros componentes e surge então o problema de autenticação nas *single pages aplications*. O alvo da palestra passa a ser a discussão de como cuidar da autenticação em uma aplicação AngularJS: Cookies ou Tokens.

Os problemas dos *cookies* são os seguintes:

- exclusivos de um domínio e portanto logo enfretamos o problema de CORS.
- cookies são específicos para cada *framework* de *back-end*.
- sucessíveis a ataques de CSRF.

A proposta é o uso de [JSON Web Token](http://jwt.io) ([rascunho da especificação](http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-18)). Uma aplicação de exemplo escrita em Express e usando o módulo [Express-JWT](https://github.com/auth0/express-jwt) é apresentada.

[Slides da palestra](https://github.com/auth0/death-to-cookies-jsconfuy)


## Distributed Applications in Node.js - Angel "Java" Lopez

Angel inicia sua apresentação mostrando alguns conceitos e experimentos escritos por ele em Node.js. Aplicações distribuídas são aquelas que executam em múltiplas máquinas interligadas por uma rede.

As razões de uso do Node.js são justificadas pelo seu suporte a redes, *built-in modules*  e pelo seu ecosistema.

A base de um sistema distribuído é a troca de mensagens. Angel apresenta uma série de projetos seus relacionados com o tema: [ObjectStream](https://github.com/ajlopez/ObjectStream), [SimpleMessages](https://github.com/ajlopez/SimpleMessages), [SimpleRemote](https://github.com/ajlopez/SimpleRemote), [SimpleBroadcast](https://github.com/ajlopez/SimpleBroadcast) e [SimpleQueue](https://github.com/ajlopez/SimpleQueue), [SimpleBus](https://github.com/ajlopez/SimpleBus), [AjFabriqNode](https://github.com/ajlopez/AjFabriqNode), [SimpleActors](https://github.com/ajlopez/SimpleActors) dentre outros.

Os desafios de se manter múltiplas máquinas são: comunicação, gerenciar *jobs* e resiliência. Por fim, uma série de experimentos é mostrado.

----------

Angel fez uma abordagem bastante humorada e simplificada de um tópico bastante interessante que tem raízes bastante acadêmicas. Vale a pena conferir sua postagem [Distributed Applications and Node.js](http://ajlopez.wordpress.com/2013/05/30/aplicaciones-distribuidas-y-node-js) que explica minuciosamente toda a palestra.


## Why Bacon is actually good for your health - Leonardo Garcia e Sergio Gianazza

A apresentação é a respeito de *Functional Reactive Programming (FRP)* utilizando a biblioteca [Bacon.js](https://github.com/baconjs/bacon.js/tree/master). O paradigma FRP é baseado na represetação de um valor que varia em um espaço de tempo. Uma *event stream* é uma coleção de eventos que acontece ao longo de um tempo. Simplificando, é como um cano que, ao invés de água, recebe eventos. A media que o evento flui pela *stream*, se este não for assitido, é perdido.

FRP merece nossa anteção pelos seguintes motivos:

- Permitir a composição de eventos.
- Podemos tratar nossas coleções utilizando programação funcional.
- Alto level de abstração que nos permite expressar mais o "o que" ao invés de "como".

As *streams* permitem a aplicações de funções já bastante conhecidas como `map` e `filter` dentro outras.

O funcionamento da biblioteca Bacon.js foi mostrado através de um fluxo de *ticks* que resulta em um relógio completo com suporte a alarme. Outras duas implementações integradas com Backbone e Angular são mostradas justificando as múltiplas possibilidades de uso da biblioteca.

----------

É essencial justificar o uso de novos paradigmas, melhor ainda se puderem interagir com o que já utilizamos atualmente. Os exemplos com Backbone e Angular foram excelentes para isto. A apresentação fluiu bem e me provocou a investigar e implementar código usando o paradigma. Ótimo trabalho.

## A merger of the Browser and Operating System - Nick Desaulniers

Nick, trabalha na Mozilla no projeto do FirefoxOS, sua apresentação surge de um questonamento para a platéia: tudo aquilo que você vê no computador pode ser feito em aplicações que funcionam em navegadores.

Nick observa o quanto de poder nossos sistema operacionais dão para aplicações que instalamos. O que pensar a respeito de uma aplicação que acessa nosso sistema de arquivos ou recursos via rede. Devíamos ter medo de fazer *download* de novas aplicações.

Atualmente, é totalmente justificável pensar em aplicações escritas inteiramente em JavaScript, a linguagem se tornou cem vezes mais rápido desde 2006. Nick apresentou o asm.js também e sua aplicação em jogos como Banana Bread e Unreal Enfine 3 e [4](https://blog.mozilla.org/blog/2014/03/12/mozilla-and-epic-preview-unreal-engine-4-running-in-firefox/). Outros exemplos mais foram mostrados apoiando a performance da linguagem.

----------

A missão da Mozilla tenta trazer *web* para o *desktop* através do FirefoxOS. Assim como o Google está trazendo o ChromeOS. Os resultados de vendas de ambos os produtos já demonstram sucesso.


## The Better Parts - Douglas Crockford

Autor do livro JavaScript: The Good Parts, Douglas Crockford sobe ao palco contando a história do autor de outro livro, O Pequeno Príncipe.

Se uma funcionalidade é útil e ao mesmo tempo perigosa, devemos ficar com a funcionalidade mais útil. Douglas brinca que não somos pagos por usar todas as partes de uma linguagem e que uma boa linguagem tem a capacidade de ensinar algo.

> Eu já fiz todos os erros que você pode fazer escrevendo JavaScript. - Douglas Crockford

Esta experiência guiou a criação do JSLint que então passou a lhe ensinar algumas coisas. Surgem então alguns argumentos contra as boas partes, dentre eles, que cada funcionalidade é útil e é um direito poder utiliza-la.

Muitas das funcionalidades da linguagem estão lá unicamente para induzir ao erro. Apesar disto, é necessário poder escrever bons programas utilizando JavaScript.

Segundo Douglas, aqueles que não usam ponto e virgula, não passam de iniciantes. Existem dois tempos envolvidos na escrita de código: escrever e fazer o código funcionar de acordo. Sempre se leva tempo para se codificar bem.

A parte mais esperada da apresentação são as melhores partes da ES6:
- [*Proper Tail Calls*](http://bbenvie.com/articles/2013-01-06/JavaScript-ES6-Has-Tail-Call-Optimization)
- *Rest* e *spread*
- Módulos

Douglas explica que há muitos anos deixou de usar `new` em favor de `Object.create` e que ultimamente abandonou por completo o uso de `this`.

A construção de laço *for* também foi alvo do abandono em favor do uso dos métodos de *array*. Em especial no ES6, graças a *Proper Tail Calls*, o `while` pode ser deixado de lado.

Douglas acredita que uma das piores partes da nova especificação do ES6 serão as classes. Os argumetos são baseados em que a herança clássica é dificil de manter e desnecessária em uma linguagem como JavaScript em que objetos podem ser criados seguindo a demanda. A herança por protótipos fazia todo o sentido em 1995, não são necessárias. Objetos literias devem ser criados através de funções.

O que segue são comparações entre JavaScript e funcionalidades de outras linguagens. Uma ressalva é que alguns dos erros do JavaScript são por culpa de outros padrões adotados que continham erros, como *Binary Floating Point*.

A responsabilidade do programador diz respeito as pessoas que utilizam seu trabalho. Outras responsabilidades envolvem trabalhar em equipe e gerenciar seu trabalho.

O conselho final foi para que ninguém deixe *bugs* no código.

--------

Não existe outro palestrante que possa me deixar tão frustrado quanto este. Concordo com muitas das suas opiniões e reconheço a função e importância do seu livro na época em que foi escrito. Mas a sua opinião inflexível e muitas vezes grosseira joga tudo por terra.

Objetos gerados por funções são órfãos. Classes são abstrações extremamente úteis para identificar e organizar código. Pegue como exemplo o padrão MVC: Jeremy fez um trabalho fantástico com Backbone.js e isto justifica completamente a necessidade de classes na linguagem.

Veja, não precisamos fazer tudo com classes. O mesmo Jeremy não fez uso deste tipo de abstração para manipular coleções de dados na Underscore.js.

--------

Saiba que também há cobertura do [primeiro dia](primeiro-dia-jsconf-uy.html) e da [primeira parte deste mesmo dia de evento](segundo-dia-jsconf-uy-parte-1.html).

--------

A minha opinião é que o *keynote* do evento esteve ontem, neste mesmo palco, falando sobre Backbone.js. Outros bons palestrantes foram os que abordaram *Promises* e o show de simplicidade e habilidade do substack. Por fim, os amigos do Brasil representaram muito bem nossa comunidade. O evento estava impecável e foi um prazer trocar figurinhas por aqui.
