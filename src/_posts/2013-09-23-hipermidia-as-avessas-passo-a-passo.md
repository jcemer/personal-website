---
layout: post
title: 'Hipermídia as Avessas: Passo a passo'
tags:
  - HTML5
  - mobile
excerpt: <p>Reunião dos pontos e técnicas mais importantes que você deve lembrar enquanto estiver desenvolvendo um projeto para diferentes suportes computacionais.</p>
---

Espero que já tenha lido as outras postagens da série, comece pela [introdução](/hipermidia-as-avessas.html) caso não o tenha, recomendo. Conheceremos a partir de agora os pontos e técnicas mais importantes para lembrar enquanto estiver desenvolvendo um projeto para diferentes suportes computacionais.

A dica mais importante é que você deve começar a desenvolver para os dispositivos que oferecem menor performance e nos quais você tem menos experiência como desenvolvedor:  os dispositivos mobile. Nunca se esqueça de testar desde as fases iniciais e principalmente na de homologação como seu projeto se comporta em mobile.

## Layout desktop

Caso seu projeto não seja [responsivo](/hipermidia-as-avessas-responsive-design.html), não utilize a `meta viewport` a menos que a página não renderize na largura correta em mobile.

~~~ html
<meta name="viewport" content="width=1024">
~~~

## Layout responsivo

Defina a `meta viewport` e os *breakpoints* a medida que forem necessários, [esqueça as receitas com resoluções padrões](/hipermidia-as-avessas-responsive-design.html#Breakpoints).

~~~ html
<meta name="viewport" content="width=device-width">
~~~

### CSS

Escreva primeiro as folhas de estilo para que seu layout funcione bem em mobile. Suas *media queries* devem ser usadas para adaptar o *layout* para resoluções maiores, repare nos `min-width` abaixo:

~~~ css
/* Styles to mobile */

/* a bit wider */
@media screen and (min-width: ...em) { /* Styles */ }

/* wider */
@media screen and (min-width: ...em) { /* Styles */ }
~~~

### Fontes

Utilize sempre [medidas relativas](/hipermidia-as-avessas-responsive-design.html#Tamanho-relativo). Isto possibilita que, ao alterar o tamanho da fonte no `body`, os tamanhos de fonte dos demais elementos sejam afetados na mesma proporção.

~~~ css
/* Styles to mobile */

.body { font-size: 23px; }

p { font-size: 0.8em; }

/* wider */
@media screen and (min-width: ...em) {
   .body { font-size: 16px; }
}
~~~

### Imagens

Tente achar um tamanho que fique com nitidez razoável na maior parte dos dispositivos ou aplique uma das <a href="/hipermidia-as-avessas-imagens.html#Soluções-possíveis">soluções possíveis</a> até que exista uma melhor.

## Por fim

Obrigado ao [Marcelo](https://twitter.com/askoth) por ter ajudado e apresentado comigo. Muitas das ideias desta série partiram da experiência e conhecimento dele. Outro salve à [Morvana](https://twitter.com/morvanabonin) e [Cynthia](https://twitter.com/cynthia_zanoni) por terem organizado o [primeiro evento de mobile do sul do país](http://mobilebrazilconference.com.br), o nível estava altíssimo.

A você, respeite e fique antenado a era mobile, ela está por aqui para ficar e a tendência é que teremos mais e mais dispositivos conectados. É nossa responsabilidade como desenvolvedores fazer uma web melhor e adequada a todos estes dispositivos.
