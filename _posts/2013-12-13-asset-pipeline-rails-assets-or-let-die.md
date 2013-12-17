---
layout: post
title: 'Asset Pipeline: Rails Assets or let die'
tags:
  - assets
  - rails
---

Já de início, deixe-me esclarecer duas coisas:

1. Este post trata do [Asset Pipeline do Ruby on Rails](http://www.akitaonrails.com/2012/07/01/asset-pipeline-para-iniciantes)

2. Considero o Asset Pipeline ainda o melhor [workflow para gerência de assets, veja meus argumentos](http://tableless.com.br/workflow-para-cuidar-dos-seus-assets).

A motivação em escrever vêm de algumas conversas entre amigos, discussões no Twitter e sobretudo meus estudos para a palestra: [E agora, virei um front-end Rails!?](https://speakerdeck.com/jcemer/e-agora-virei-um-front-end-rails).

## A força do Node.js

Começando com um pouco de embasamento. A maior aptidão do Node.js são as aplicações que demandam entrada e saída massiva de dados, em suma, para isto é que ele foi desenvolvido.

Por outro lado, o Node.js tem sido adotado pela comunidade front-end como suporte para suas ferramentas há bastante tempo. A lista vai desde transpiladores e *parsers* de JavaScript, pré-processadores de CSS a automatizadores de tarefas.

> Node.js é a ferramenta mais importante pro desenvolvedor front end.
  <br>[Marcelo Oliveira](http://twitter.com/askoth)

### Gerenciamento de pacotes

Disponibilizar bibliotecas, frameworks ou qualquer outro tipo de código foi um dos maiores desafios do confeiteiro de HTML da era passada. Para disponibilizar código, o jeito era criar um website com uma área para download. Fizemos isto com a [Rye](http://ryejs.com) nos longínquos 2012.

Nada mais óbvio que a medida que o NPM conquistasse o maior sucesso gerenciando pacotes do Node.js surgissem gerenciadores destinados a código front-end no geral. Surgiram vários: [Jam](http://jamjs.org/), [Component](http://component.io) e [Volo](http://volojs.org).

Sem dúvida, o gerenciador de pacotes de maior adoção até o momento foi o Bower. **Toda a biblioteca, framework ou código front-end que se preze está no Bower**.

## Gerenciamento de pacotes no Asset Pipeline

É importante reparar que o Asset Pipeline é apenas um framework, de maneira alguma ele seria acompanhado por um gerenciador exclusivo de pacotes. Assim como o Ruby on Rails, o Asset Pipeline utiliza as gems do Ruby para empacotar dependências. Mas a discussão que surge é: **são as gems o empacotamento mais adequado para código front-end?**.


Alguns desenvolvedores já deixaram muito claro qual a sua opinião: [caso seu pacote forneça apenas conteúdo para a interface, ele deve estar em um gerenciador específico tal como o Bower](http://simplesideias.com.br/gerenciando-dependencias-client-side-com-bower). O custo desta abordagem no Ruby on Rails implica em ter dois arquivos de configuração de dependências (sim, não temos como abandonar o Gemfile) e duas etapas de *install* e *update* de dependências. Sem contar que muita gente não quer depender do Bower para fazer o deploy.

Uma das soluções apontadas é adicionar ao repositório de versionamento do projeto os pacotes baixados pelo Bower. Desculpe, mas se for o caso, prefiro continuar com o protocolo antigo de *download* manual das dependências, um gerenciador de pacotes tem muitas mais funções que apenas esta.

### Rails Assets

O [Rails Assets](https://rails-assets.org) é uma fonte de gems que empacotam código de interface já disponíveis no Bower. É a solução perfeita. Uma orla de front-enders cadastra e atualiza seus pacotes no Bower e as gems se alimentam diretamente destes repositórios para criar uma **versão compatível** com o Asset Pipeline.

Quando me refiro a versão compatível, é importante que saiba que alguns códigos precisam de adaptações para que funcionem no Asset Pipeline. Pegando como exemplo uma [folha de estilo da Fancybox](https://github.com/fancyapps/fancyBox/blob/master/source/jquery.fancybox.css#L97), todas as referências às imagens precisam de instruções especiais para preservar as estratégias de cache. O Rails Assets faz todas as conversões necessárias automaticamente.

Muita biblioteca front-end já está registrada no Ruby Gems com a única função de ser usada pelo Asset Pipeline, e portanto mantendo a organização de arquivos e outros aspectos propostos pelo framework. O *core team* do Ruby on Rails já faz isto há bastante tempo com a [jQuery](https://github.com/rails/jquery-rails), por exemplo. Isto implica que **outras gems que dependam da jQuery passem a usar o mesmo pacote**, e esta é a vantagem de se ter um único gerenciador de pacotes.

O principal contra tempo de encapsular código front-end era a necessidade de se criar um repositório exclusivo e manter o código atualizado, o que já está resolvido com maestria pelo Rails Assets. É claro que o Rails Assets se trata de um produto beta, melhorias no seu processo de funcionamento com certeza ainda devem ser necessárias. Mais detalhes no [blog post do seu lançamento](http://codetunes.com/2013/we-released-rails-assets).

## Abandonar o Asset Pipeline

O Grunt.js, com todos os seus inúmeros plugins, já está muito próximo (ou talvez já tenha ultrapassado) das capacidades do Asset Pipeline. Acho fantástico quando diferentes linguagens e comunidades chegam a soluções equivalentes e passam a disputar palmo a palmo por espaço.

### Half Pipe

É óbvio que a esta altura já exista uma gem que se encarregue de trocar o Asset Pipeline por um workflow apoiado no Grunt.js e Bower, chama-se [Half-pipe](https://github.com/d-i/half-pipe).

A vantagem é que você vai poder fugir totalmente da discussão da maneira de usar o Bower e em como é errado empacotar código de interface em gems. Além disto, todas as ferramentas de front-end estarão disponíveis em primeira mão, nossos assets estarão a cuidados do Node.js.

A desvantagem será a falta de integração dos seus assets com a aplicação, adeus estratégia *just works* de gerência de *cache*. Você até pode ter um plugin do Grunt que cuide disto, mas isto não vai influenciar no asset referenciado pelo `<head>` dos seus documentos HTML como acontece com o Asset Pipeline.

Até o momento, o Half Pipe substitui por completo o Asset Pipeline, isto significa que outras gems como o Active Admin passarão a não funcionar. E pra finalizar, o deploy em serviços como o Heroku pode ficar bem mais complicado que o usual.

## Conclusão

O Ruby on Rails tem como uma das suas maiores filosofias "convenção sobre configuração". Não é por acaso que ele já inclui um workflow para gerenciar os assets da aplicação: **garantir boas práticas e agilidade no desenvolvimento**. Dito isto, não parece fazer sentido ter o trabalho de desativar o Asset Pipeline ou até mesmo configurar outro gerenciador de dependências que não seja aquele já utilizado.

Aceite as escolhas tomadas por aqueles que cruzaram o caminho do Asset Pipeline ou o abandone. Digamos que até mesmo o extremo de desacoplar completamente os assets da sua aplicação pode ser uma boa ideia. Nestes casos, a escolha de ferramentas e frameworks para cada uma das partes fica a seu critério. O que você perde e ganha com isto vai depender da sua aplicação. Vale a pena?
