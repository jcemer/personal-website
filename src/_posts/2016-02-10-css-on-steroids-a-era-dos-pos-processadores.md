---
layout: post
title: "CSS on Steroids: a era dos pós-processadores"
tags:
  - Front-end
  - CSS
excerpt: "<p>Revisão de um texto sobre técnicas e práticas de escritas de CSS.</p>"
---

No longínquo ano de 2013 escrevi o artigo [CSS on Steroids](http://tableless.com.br/css-steroids) que é muito sobre como escrever CSS de forma mais eficiente. Alguns anos se passaram e uma série de tecnologias nasceram, enquanto outras estagnaram.

A premissa do artigo original é apresentar alguns dos problemas mais comuns em folhas de estilo e sugerir soluções apoiadas no uso de pré-processadores e outras ferramentas como os pós-processadores. O plano aqui é revisitar as soluções e analisar novas estratégias de escrita de código. Conhecer as principais funcionalidades dos pré-processadores de CSS é pre requisito para esta leitura.

Os pós-processadores são utilitários difundidos e apoiados principalmente pela ferramenta [PostCSS](https://github.com/postcss/postcss). A ferramenta permite a escrita de *plugins* em JavaScript que podem ter acesso ao seu código CSS e aplicar transformações ou validações. Ao longo do artigo aprofundaremos mais o assunto e veremos alguns exemplos de *plugins* e sua aplicação.

O que é apresentado a seguir tem base em projetos que vivenciei e portanto são frutos de algumas das minhas experiências. Cada projeto e equipe constituem seu próprio contexto e, como sempre, algumas coisas (ou até mesmo tudo) podem não se aplicar em sua integridade.

## Variáveis de código: cores e medidas

Medidas e cores normalmente são os maiores causadores de ruídos em uma folha de estilo. Interpretar as cores ou decifrar a relação entre medidas apenas batendo o olho no código não é tarefa fácil. As variáveis dos pré-processadores são de grande ajuda, veja abaixo um exemplo consolidando práticas apresentados no artigo original.


``` sass
$site-width: 960px;
$site-gap: 20px;
$speaker-list-width: 400px;

$grey-color: #3F4955;
$main-color: $grey-color;

body {
  width: $site-width;
}

.header {
  width: $site-width - $site-gap;
}

.speaker-list {
  width: $speaker-list-width;
  border: 1px solid $main-color;
}
.speaker-list__item {
  width: $speaker-list-width / 2;
}
```

Alguns editores já possuem *plugins* para facilitar a interpretação das cores hexadecimais. Mas é importante **ponderar a necessidade de cada variação de cor** ao consolidar arquivos de *layout* vindos do Photoshop, Sketch e demais ferramentas. Um novo aliado é o utilitário de pós-processamento [CSS Colorguard](https://github.com/SlexAxton/css-colorguard) que identifica variações desnecessárias de uma mesma cor.

De qualquer maneira, variáveis com cores ainda auxiliam muito na tarefa de manter o controle sobre as cores utilizadas no projeto. Possuir um único arquivo no projeto contendo todas as cores ajuda a construir um projeto mais enxuto e organizado, o que facilita alterar ou replicar componentes.

A não ser que você esteja escrevendo o sucessor do Twitter Bootstrap, [arquivos imensos cheios de variáveis](https://github.com/twbs/bootstrap-sass/blob/3.2-stable/assets/stylesheets/bootstrap/_variables.scss#L91-L852) que tem seu valor acessado uma única vez e que são associadas a componentes e especificidades do *layout* não fazem sentido. Arquivos como este apenas dão trabalho de manutenção e podem criar uma falsa impressão de flexibilidade ao projeto. Poder alterar as características de um componente é mais fácil quando existe **um único arquivo para cada componente responsável por toda sua estilização**.

Por outro lado, variáveis são úteis quando componentes do projeto estão relacionados e precisam compartilhar determinado valor. Lembrando que casos como estes devem ser evitados ao máximo por tornarem o código do projeto mais acoplado e dificultar seu reuso. Ainda, as variáveis podem ser utilizadas em escopos isolados de um componente para facilitar o entendimento de algum cálculo ou relação principalmente quando estiver lidando com medidas.

Abra mão de variáveis como `$main-color` e `$speaker-list-width` que criam indireção com pouco benefício. Abuse de variáveis como `$dark-grey`, `$soft-grey` e `$grey` que garantem identidade ao projeto e também `$width` facilitam o entendimento de algum cálculo em um escopo isolado. O exemplo acima revisado fica dividido em dois arquivos como estes:

``` sass
// file: colors.scss
$grey: #3F4955;

// file: speaker-list.scss
@import 'colors.scss';

.speaker-list {
  $width: 400px;

  width: $width;
  border: 1px solid $grey-color;

  &__item {
    width: $width / 2;
  }
}
```

## Frameworks e mixins

Os maiores representantes desta classe são o [Compass](http://compass-style.org/) e [Bourbon](http://bourbon.io/). Esta dupla já solucionou muitos problemas no passado. Porém o próximo passo é nos livrarmos destas tecnologias.

O motivo para nos livrarmos do Compass poderia ser o fato deste ser um [projeto abandonado](https://github.com/Compass/compass/graphs/contributors), mas existem outros mais. O Compass é um projeto muito generalista ao tentar gerar *sprites*, definir *resets*, trazer consigo alguns utilitários, incluir fontes e images e ainda gerenciar *vendor prefixes*. Existem soluções individuais muito melhores para cada um dos pontos que o projeto endereça:

- **Sprites**: lembre-se que SVG está em alta, mas se mesmo assim precisar de sprites, vá de [Spriteful](https://github.com/lucasmazza/spriteful) ou [spritesmith](https://github.com/Ensighten/spritesmith). Fazer uso do pós-processador [postcss-sprites](https://github.com/2createStudio/postcss-sprites) é uma ótima alternativa não invasiva que permite deixar de usar a técnica de *spriting* facilmente no futuro quando não mais necessária.

- **CSS resets**: esta é fácil demais, basta rodar `npm install --save normalize.css`.

- **Mixins**: como Miller já apontou em [The problem with CSS pre-processors](http://blog.millermedeiros.com/the-problem-with-css-pre-processors/), os *mixins* muito bem podem ser classes utilitárias dentro do seu projeto. Classes utilitárias  também eliminam o uso de `@extend`.

- **Vendor prefixes**: Algumas propriedades do CSS passam por uma fase de adaptação e especificação e por causa disto ganham um prefixo com base no fabricante do navegador. **Apesar de não ser aconselhado fazer uso de propriedades em fase de experimentação**, muitos projetos aplicam gradientes até hoje da seguinte maneira `@include background(linear-gradient($blue, $light-blue));`. Os navegadores atualmente lançam versões com um frequência incrível e é comum ter definições de projeto do tipo: daremos suporte para as duas últimas versões do Chrome. Soluções de pós-processamento como o [Autoprefixer](https://github.com/postcss/autoprefixer) são muito melhores pois não exigem estudar e lembrar de aplicar diferentes *mixins* além de não tornarem seu projeto escravo de um *framework*.

- **Assets**: o Compass possuía uma série de utilitários para cuida dos *assets* permitindo determinar tamanho de imagens, adicioná-las à folha de estilo através de Data URI (apesar da técnica já ter sido [envolvida em algumas polêmicas](http://www.mobify.com/blog/base64-does-not-impact-data-uri-performance/)) dentre outras *features*. Uma alternativa, se o projeto estiver utilizando a [ferramenta para *bundle* Webpack](https://webpack.github.io/), são os *loaders* [css-loader](https://github.com/webpack/css-loader), [file-loader](https://github.com/webpack/file-loader) e [url-loader](https://github.com/webpack/url-loader) que endereçam algumas destas *features* e ainda garantem [*cache busting*](http://www.adopsinsider.com/ad-ops-basics/what-is-a-cache-buster-and-how-does-it-work/). Na categoria de pós-processadores, o [postcss-assets](https://github.com/assetsjs/postcss-assets) é uma boa alternativa para projetos que não utilizam Webpack.


Muitos dos argumentos que desencorajam o uso de Compass também se aplicam para o Bourbon. Em linhas gerais, fuja destas tecnologias. A excessão é que o Bourbon pode  prestar muito bem para prototipações e como substituto do Twitter Bootstrap quando em conjunto com a tríade [Neat](http://neat.bourbon.io/), [Bitters](http://bitters.bourbon.io/) e [Refills](http://refills.bourbon.io/).

## Nesting: agrupando regras

Agrupar regras de CSS na minha opinião é a *feature* mais interessante dos pré-processadores. Aplicar *media queries* localizadas e facilitar o uso do [BEM](http://getbem.com/introduction/) são atualmente meus casos de uso favoritos.

``` sass
.speaker-list {
  @media screen and (min-width: 1200px) {
    width: 50%;
  }

  &__item {
    color: $red;
  }
}
```

O ponto do uso de *nesting* continua sendo tomar cuidado e sempre ter em mente a folha de estilo gerada para [não extrapolar no peso dos seletores](http://josh.github.io/css-explain/).

Utilitários de pós-processamento como [postcss-modules](https://github.com/outpunk/postcss-modules) e [React CSS Modules](https://github.com/gajus/react-css-modules) também permitem manter o escopo dos componentes em um projeto. Tratando especificamente de postcss-modules, seu uso exige que seu HTML tenha relação com o CSS gerado, em outras palavras, seu projeto [precisará no mínimo de uma *template engine*](https://github.com/outpunk/postcss-modules-example/blob/master/html/index.ejs).

O React CSS Modules tem uma adoção mais simples para quem estiver em um projeto React e utilizando uma ferramenta de *bundle*. De qualquer maneira, soluções mais avançadas como estas parecem promissoras e merecem atenção.

## Indo além com pós-processadores

Já vimos uma [série de pós-processadores](https://github.com/postcss/postcss) que podem ser aplicados ao seu *workflow*. O próximo passo, como você já deve imaginar é eliminar até mesmo os pré-processadores. O pacote [PreCSS](https://github.com/jonathantneal/precss) amarra uma série de outros pós-processadores que permitem substituir as principais *features* dos pré-processadores e ainda oferecer mais.

A grande vantagem dos pós-processadores é permitir facilmente escrever ou ativar novos *scripts* para experimentar alguma especificação CSS ainda em fase de rascunho e ou atender um conjunto de funcionalidades limitadas do SASS que são realmente úteis para seu projeto e equipe.

## Conclusão

A experiência de reler o artigo original e ver o quanto a comunidade front-end evoluiu a maneira de utilizar e enxergar código CSS é incrível. A aposta em tecnologias mais específicas em desfavor das generalistas Compass, Bourbon e até mesmo SASS é uma grande tendência.

O Compass já é um projeto declaradamente extinto e investir em um *workflow* baseado unicamente em pós-processadores é a bola da vez. Minha aposta é que na próxima revisão eu não mais mencionarei pré-processadores.

Qual a sua opinião? Gostou do artigo? Comente abaixo!
