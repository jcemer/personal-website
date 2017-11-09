---
layout: post
title: 'Continuous Integration and Delivery: alguns estudos de caso'
lang: pt
tags:
  - javascript
excerpt: "<p>Aplicando um <i>pipeline</i> de integração em projetos web.</p>"
---

A teoria versa que membros de um time devem integrar frequentemente seu trabalho com o dos demais. O objetivo é maximizar em função do tempo as funcionalidades em um produto pronto para uso. Para isto, é indispensável que se mantenha testes de *software* - para assegurar que o produto esteja pronto - e automatização de *build* - para viabilizar uma entrega rápida.

Na Wikipedia, é possível encontrar um série de [boas práticas](http://en.wikipedia.org/wiki/Continuous_integration#Best_practices) para se implantar CI. Manter um repositório de código, automatizar a *build* e garantir que seja testada, são os alicerces da prática.

A maneira mais simples de automatizar é utilizando serviços próprios para CI (servidores de CI). Os mais populares são o [Travis CI](https://travis-ci.org) e [Snap CI](https://www.snap-ci.com) (descontinuado). Estes servidores são máquinas que assistem os repositórios de versionamento e executam um *pipeline* - conjunto de passos com tarefas - a cada mudança de código.

A extensão e complexidade deste *pipeline* vai depender muito do projeto. Já participei desde projetos com um único passo para teste de *software*, até projetos que incluíam *build* e envio do aplicativo para a Play Store.

Nos últimos dias, estive configurando a integração para o site do evento [RSJS](http://rsjs.org) e para este blog. Estes serão os casos que usarei para apresentar um pouco mais da teoria e principalmente explorar a prática.

## Case RSJS

O projeto do RSJS utiliza um gerador de sites estáticos e tem seu [repositório de código e hospedagem no Github](https://github.com/braziljs/rsjs). Sempre que uma informação do evento é alterada, é preciso fazer dois *commits* em diferentes *branchs*. Um destes *commits* é o resultado das alterações nos arquivos estáticos que são entregues aos usuários, em outras palavras, é o que dispara o *deploy*.

Este processo é moroso, pois para alterar o *site* é preciso fazer *build* manualmente, e suscetível a erro, algumas vezes um dos *commits* era esquecido. A alternativa foi a criação de um *pipeline*, caracteristicamente de Continuos Delivery, com um único passo que gera e disponibiliza os arquivos estáticos.

O Snap-CI tenta a integração de cada um dos *commits* e atesta se esta passou ou falhou. A ferramenta também gera um histórico de execução das tarefas de cada um dos passos. Assim, todas as alterações - *commits* - integram o *baseline* - *branch* master - do projeto e disparam o processo de *build* e *deploy*, o que segue a risca as boas práticas de CI.

As tarefas executadas no único passo de integração do projeto são:

~~~ bash
npm install
docpad deploy-ghpages --env static
~~~

## Case deste site

O site jcemer.com é muito semelhante ao do RSJS. A diferença é a quantidade de conteúdo que é bastante superior. Então, além dos desafios já explorados, é preciso garantir que a marcação do projeto esteja correta e que não hajam *links* quebrados.

A documentação do Jekyll, gerador de site estáticos utilizado no projeto, contém uma [seção de CI](http://jekyllrb.com/docs/continuous-integration) apresentando como garantir que *links* não estejam quebrados e imagens não estejam faltando. A referência é interessante mas o desejo aqui é criar um *pipeline* mais completo:

1. **Test**: deve gerar os arquivos, assegurar que a marcação esteja correta e validar *links* e imagens.

2. **Deploy**: passo igual àquele já implementado no projeto RSJS com excessão de que só deve ser executado se os testes passarem.

O passo de testes utiliza duas ferramentas: uma [integração com os validadores de *markup* da W3C](https://github.com/alexdunae/w3c_validators) e o [HTML Proofer](https://github.com/gjtorikian/html-proofer) para testar os *links* do projeto. O mais interessante desta etapa de configuração foi encontrar uma [série de *links* quebrados](https://github.com/jcemer/jcemer.github.com/commit/e138ac3a121d57fa6e2646aa5ef6b6c27f69509d) e [erros na marcação](https://github.com/jcemer/jcemer.github.com/commit/d1240d4893c885c98dae9f699f65c42a29ee358d) do projeto, o que por si só já justifica a importância dos testes.

A etapa de testes executa as seguintes tarefas:

~~~ bash
bundle install
bin/rake build
bin/rake w3c_validators
bin/rake html_proofer
~~~

Já o passo de *deploy*, é constituído por:

~~~ bash
bundle install
bin/rake setup_deploy\[git@localhost:jcemer/jcemer.github.com,master\]
bin/rake build deploy
~~~

Pelos textos deste blog apontarem para muitos *sites* externos, a qualquer momento um *link* pode quebrar. Ou seja, não é preciso haver um *commit* para que o projeto entre em um estado inconsistente. A solução trivial e prática comum em CI é agendar que o *pipeline* seja executado regularmente. Como medida inicial, agendei para que esta integração aconteça todos os dias às 12h.

------------

Os detalhes de como configurar um servidor de CI não são do escopo deste texto. Tanto o Travis quanto o Snap CI possuem integração com o Github, o que permite inclusive utilizar *Pull Requests*. Repositórios públicos, assim como os dos *cases* mostrados aqui, podem ser configurados gratuitamente.

------------

Saiba que a teoria original de Continuos Integration, dependendo das características do projeto, pode ser pouco usual. O texto [Continuous Integration is Dead](http://www.yegor256.com/2014/10/08/continuous-integration-is-dead.html) ilustra muito bem por quais motivos e é um ótimo ponto de partida para aplicar uma adaptação melhorada da prática.
