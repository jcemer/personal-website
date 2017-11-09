---
layout: post
title: 'Live posting do primeiro dia de BrazilJS 2014'
lang: pt
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

Existe todo um mundo além de [three.js](http://threejs.org) para utilizar WebGL no navegador. O que segue é um panorama sobre computação gráfica, utilização de triângulos e transformadas que podem ser aplicadas a eles. O uso de texturas e processo de *rendering* e *shading* também foram abordados.

WebGL se trata de um contexto do `<canvas>` e as mesmas práticas utilizadas para desenhos 2D podem ser utilizadas por aqui. Vários exemplos de código foram apresentados para atestar o poder e capacidade da API para escrever código 3D no navegador.

Os exemplos aplicando um vídeo e a captura da câmera em um objeto triângulo com animação de rotação em espaço 3D foram um dos ápices da apresentação.

---

Computação gráfica é um assunto vasto e difícil. É natural que toda interface de programação relacionada leve a carga desta área. Apesar de ser muito interessante possuir uma API JavaScript, acredito que o uso de WebGL é mais destinado a membros da área de computação gráfica em busca de novas plataformas. Bibliotecas como o Three.js ainda estão mais próximas (e não muito) da realidade do desenvolvimento *front-end*.

## Effective jQuery / Jörn Zaefferer

A palestra é guiada por regras e dicas em como escrever código eficiente utilizando jQuery.

Considere inicializar código em um momento mais oportuno que não seja o carregamento da página. Um *autocomplete* pode ser condicionado ao foco na caixa de texto. A mesma lógica pode ser aplicada a validação de um formulário.

Seu código deve suportar mudanças no ambiente. Prefira `prevAll` ao invés de `prev`. Ao utilizar métodos mais flexíveis, caso o *markup* seja alterado, seu código não irá sofrer consequências.

A jQuery sempre mantém a ordem dos elementos selecionados como encontrada no DOM. Adicionar elementos a esta coleção implica acessar a árvore para identificar qual sua posição. Evite utilizar o método `add` quando `push` pode ser usado sem manter a ordem.

Animações CSS em alguns casos são mais performáticas e ainda assim podem ser controladas em JavaScript. *Plugins* como o [jQuery.transit](http://ricostacruz.com/jquery.transit) auxiliam na tarefa.

---

A jQuery, mesmo com quase uma década, ainda nos permite descobrir maneiras de melhor utilizá-la.

## Web versus native: round 1? / Chris Mills

Performance, operar *offline*, ter acesso a recursos da máquina e outros fatores podem favorecer a adoção de nativo ao invés de web? Projetos como o Firefox OS estão ai para provar o contrário.

O Firefox OS vem acompanhado de APIs que permitem acessar recursos nativos. As APIs incluem capacidade de medir a bateria do aparelho, medir a orientação do dispositivo, disparar notificações e controlar vibração.

Um destaque especial para as APIs que permitem operar as aplicações em modo *offline*. Nesta esfera, dados podem ser facilmente armazenados em IndexedDB, LocalStorage e WebSQL. O desafio está mesmo nos *resources* e App Cache pode não ser suficiente. A promessa está nos Service Workers.

A falta de performance já é uma desculpa ultrapassada. Web Workers, Pointer Lock e ASM.JS podem ser utilizadas para melhorar a performance.

---

O cenário se mostra favorável para a web ganhar esta briga. Se tratando de dispositivos móveis, ainda é preciso de certa forma convencer o mercado. Tecnologia não pode ser colocada acima da sua subordinação de ser apenas um meio.

## Limpando CSS gigantes com JS / Mauricio Wolff

Mauricio utiliza como *case* o website da Booking.com. O projeto enfrenta lidar com múltiplos idiomas, diferentes moedas, aplicação de testes A/B, muitos desenvolvedores e legado de dez anos de código.

A quantidade de código CSS que pode existir em um projeto como este, apenas se considerado o *download*, implica na percepção de performance. Outro ponto importante é que IE 6 a 9 suporta até 4095 seletores em cada folha de estilos.

A técnica mais comum de identificar código CSS em desuso é baseada em acessar a página e marcar quais regras de CSS não estão sendo usadas. Em consequência do uso de testes A/B, não é possível utilizar esta técnica.

A solução encontrada é destacar todos os seletores identificados nas folhas de estilo e comparar com os seletores referenciados nos templates do repositório de código. A ferramenta, escrita em Node.js, ainda retorna quais os *commits* que inseriram o seletor e qual sua última alteração.

Node.js é uma excelente plataforma para gerar ferramentas. A recomendação final é se aprofundar nas funcionalidades do Git.

---

O assunto e a solução são bem interessantes. Dominar Node.js e Git cada vez mais será importante para nós desenvolvedores.

## Single Page Applications Done Right / Eduardo Lundgren

No passado, os estudos de cinema concluíram que 24 *frames* por segundo era a medida ideal para produzir um filme. Mas se colocarmos em paralelo um vídeo a 60 fps, a diferença é facilmente identificada.

Por esta ótica, performance é uma medida subjetiva e depende do contexto. Ainda, performance não é apenas sobre segundos e *bytes*, é sim sobre como o usuário percebe o impacto disto ao executar alguma ação. E neste ponto é que Single Page Applications (SPA) ganham destaque.

As Single Page Applications foram introduzidas já nos anos 2000. A maneira mais primitiva de desenvolver este tipo de aplicação, antes de do advento do Ajax, era através de *iframes*.

O que é muitas vezes negligenciado no desenvolvimento de uma aplicação é não possuir uma URL única para cada variação de conteúdo. A History API, através do comando `pushState`, permite modificar a URL *on the fly*. Desta maneira, o histórico de navegação manterá as diferentes URLs da sua aplicação.

Outros aspectos para se levar em conta são: posição do *scroll* ao voltar a uma página, *cache* das páginas e *render* da página inicial no servidor. Uma boa SPA é a que imita o comportamento do navegador.

Eduardo falou muito sobre suas experiências e lançou o projeto *open source* [Senna](https://github.com/eduardolundgren/senna) para escrita de SPA.

---

A palestra mostrou muito bem todos os desafios e suas soluções. Gosto bastante da abordagem de desenvolver uma aplicação sem nenhum código JavaScript e depois adaptar alguns pontos (ou todos) para operar assincronamente. Inclusive escrevi o artigo [Acelere o carregamento de suas páginas](http://jcemer.com/acelere-o-carregamento-de-suas-paginas.html) sobre este assunto.

## The 7 Principles of rich web applications / Guillermo Rauch

A palestra de Guillermo foi guiada por princípios que ele acredita guiar o desenvolvimento de aplicações web ricas. O ponto principal é experiência do usuário. O JavaScript deve ser usado como um meio de viabilizar uma melhor experiência para o usuário.

Páginas não devem ser retornas do servidor apenas com `<scripts>`s e sem conteúdo. Novas requisições serão necessárias para capturar o conteúdo enquanto o usuário é apresentado a uma página em branco. A latência de rede irá impactar na experiência mesmo quando a requisição for respondida por um CDN. Os primeiros 4096 bytes da sua página são os mais valiosos por serem retornados no primeiro pacote de resposta a uma requisição.

Algumas técnicas auxiliam a induzir o usuário de que a aplicação está pronta em um tempo mais hábil. Separar o espaço para o carregamento de uma imagem, indicar o *thumbnail* de um arquivo de *upload* são alguns dos exemplos. Tempos de resposta menores que um segundo evitam a necessidade de mostrar um *loading spinner* para indicar ao usuário de que a interface não está congelada.

Bibliotecas como socket.io permitem manter uma conexão permanente com o servidor. Reconhecer mudanças no estado dos dados armazenados no servidor permite reagir no *front-end* da aplicação imediatamente. Considere ações de *login* e *logout* em uma aplicação com instâncias em diferentes abas. A melhor experiência é a que mantém o mesmo estado da sessão de usuário em todas as instâncias.

Reconhecer a ausência de conexão com internet e reagir a isto é outro fator importante em aplicações. A possibilidade de armazenar informações no cliente e sincronizar os dados assim que possível afeta diretamente a experiência do usuário. Service Workers permitem inclusive sincronizações depois da página ter sido fechada.

Aplicações podem sofrer alterações no seu código enquanto estão sendo utilizadas. Isto pode ser endereçado notificando o *front-end* da aplicação de que é necessário um *reload* da página. Soluções mais elaboradas ainda podem alcançar a atualização do código sem a necessidade de recarregar a página por completo.

Prever ações do usuário para requisitar recursos é outro princípio que pode ser usado para aprimorar a aplicação.

---

A palestra cumpriu muito bem seu papel e apresentou técnicas e práticas relevantes para construir aplicações ricas. É interessante observar como Service Worker foi citado de forma recorrente durante o dia.
