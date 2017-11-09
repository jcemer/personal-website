---
layout: post
title: 'Hipermídia as Avessas: Responsive Design'
lang: pt
tags:
  - HTML5
  - mobile
---

[Responsive Design](http://alistapart.com/article/responsive-web-design), no contexto de hipermídias, é a entrega de uma experiência ótima de leitura e navegação independente de dispositivo sem que para isto seja preciso criar duas mídias totalmente distintas.

----------

Antes de mais nada, saiba que este texto é a continuação de [Hipermídias as avessas](/hipermidia-as-avessas.html). Lá são apresentados alguns [desafios](/hipermidia-as-avessas.html#Desafios-da-web-plural) que, a partir daqui, aprenderemos a enfrentar.

----------

## Tamanho de fonte

O tamanho da fonte - `font-size` - é determinante para se garantir uma boa legibilidade. Seu tamanho básico, utilizado caso você não defina, geralmente é **16px**.

Apesar de sempre considerarmos o tamanho de 16px, não existe especificação: **cada navegador pode definir o mais adequado e permitir que o usuário configure**.

Explore isto em seu projeto utilizando as medidas: `xx-small`, `x-small`, `small`, ` medium`, ` large`, `x-large` e `xx-large`.

~~~ css
p {
  font-size: large;
}
~~~

### Tamanho relativo

Uma maneira de flexibilizar ainda mais as variações de tamanho de fonte do seu projeto é utilizando medidas relativas. Com ela, é possível basear os tamanhos em elementos anscestrais ou outras propriedades. **Note: o tamanho do `<body>`, que é nossa primeira base, será definido pelo dispositivo ou usuário**. Esta é a justificativa para uso de **em** e **rem** em projetos.

A medida **em** é relativa ao tamanho da fonte definido ou herdado no elemento pai.

~~~ html
<body>
  Foo
  <div style="font-size: 0.5em">
    bar <span style="font-size: 2em">fizz</span>
  </div>
</body>
~~~

Supondo um tamanho básico de 16px, a palavra *bar* será renderizada com tamanho de 8px. O *fizz*, por sua vez, terá o dobro do tamanho de *bar*: 16px.

A medida **em**, apesar de bastante útil, dificulta (a série de cálculos pode ser penosa) e até mesmo inviabiliza a modularização do seu projeto. A evolução natural é a medida **rem** que é definida diretamente com base no `<body>`.

~~~ html
<body>
  Foo
  <div style="font-size: 0.5rem">
    bar <span style="font-size: 2rem">fizz</span>
  </div>
</body>
~~~

Novamente supondo um tamanho básico de 16px, a palavra *bar* será renderizada com tamanho de 8px e *fizz* com tamanho de 32px. Veja, a definição de *fizz* não afetou o *bar*. A única restrição para não se abandonar completamente **em** é que o suporte de **rem** é restrito ao IE9+.

Defina também a altura de linha - `line-height` - utilizando uma medida relativa para garantir flexibilidade.

~~~ css
p {
  line-height: 1.5em;
}
~~~

## Conteúdo fluído

Websites com uma grade de conteúdo fluída não são nenhuma novidade e fazem bastante sentido quando estamos falando em diferentes resoluções de dispositivos. A técnica por si só é simples, basta definir as dimensões dos elementos em porcentagem. As imagens também podem ser fluídas, basta aplicar a regra abaixo.

~~~ css
img {
    max-width: 100%;
}
~~~

Aplicar a técnica em conteúdos *embutidos* é mais complicado pois eles não mantem proporcionalmente a altura. Em especial, para vídeos, vale a pena conferir o [FitVids.JS](http://fitvidsjs.com).

## Media Queries

Chegamos então ao Santo Gral do design responsivo. As *media queries* nada mais são que um meio que nos permite aplicar regras de estilo específicas com base em aspectos do meu dispositivo.

A manifestação mais rudimentar delas, que surgiram ainda em 1994 e tiveram sua primeira especificação em 2002, foi a de definir uma folha de estilos específica para impressão do documento. O resultado do código a seguir fica como exercício. Dica: tente imprimir este blog.

~~~ css
@media print {
  a[href]:after {
    content: " (" attr(href) ")";
  }
}
~~~

As *media queries* [evoluíram muito](http://www.w3.org/TR/css3-mediaqueries), atualmente a [gramática][1] de sua definição é bastante extensa. Vale destacar aspectos como: `min-width`, `max-width`, `min-height`, `max-height`, `min-device-aspect-ratio`, `max-device-aspect-ratio`, `min-resolution`, `max-resolution`, que podem ser utilizados para condicionar a aplicação das regras.

  [1]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries#Pseudo-BNF_(for_those_of_you_that_like_that_kind_of_thing)

Vamos para um exemplo: com este, para resoluções de viewport com largura de até no máximo 800px, teremos parágrafos em *Comic Sans MS* de cor vermelha. [Faça o teste](http://jsbin.com/ulaYuyO/3).

~~~ css
@media only screen and (max-width: 800px) {
  p {
    font: 2em "Comic Sans MS", cursive, sans-serif;
    color: red;
  }
}
~~~

Agora, se você abrir este mesmo exemplo em seu *smartphone* (digamos que ele tenha resolução com largura inferior a 800px) a regra não será aplicada. Isto se deve ao fato de que a configuração de largura da sua [viewport ser 980px por padrão](/hipermidia-as-avessas.html#Mobile-Viewport). Você precisa disto:

~~~ html
<meta name="viewport" content="width=device-width">
~~~

Definir a `meta tag viewport` com largura igual a `device-width` permite a criação de *breakpoints* e potencializa o design responsivo para mobile, [confere aqui](http://mediaqueri.es). Ah, o exemplo, vai lá, [testa outra vez](http://jsbin.com/ulaYuyO/4).

### Breakpoints

Este é um ponto bastante importante, talvez o mais. Fazendo uma rápida busca você encontrará uma série de folhas de estilo com *breakpoints* definidos para atender as resoluções dos principais dispositivos móveis. E o problema é exatamente este: **principais** dispositivos.

Existem milhares de dezenas de dispositivos com uma infinidade incalculável de resoluções (ainda mais se falarmos do universo Android) e a cada semana aparelhos são lançados. Você já perdeu essa briga há muito tempo. Ou melhor, você nunca deveria ter lutado por ela.

Os *breakpoints* do seu projeto **não devem ser baseados em nenhuma receita**, apenas no seu próprio conteúdo. O conteúdo é o rei. A partir da resolução em que: a leitura do texto se torna difícil, o menu quebra, as fotos dos produtos ficam pequenas demais; você define um *breakpoint* e ajusta.

Se o designer que não sabe HTML e CSS ficar confuso, diga a ele que já passa da hora de ele aprender. E não, saber de editor de fotos não é o bastante para *fazer web*.

## Gestos e interação

Os dispositivos mobile que temos em mãos atualmente são fantásticos. Por nossa sorte, todos estes dispositivos se adaptam aos periféricos disponíveis. E mais, já desenvolvi muitos websites no passado que funcionam perfeitamente em mobile.

Soluções como o [fastclick](https://github.com/ftlabs/fastclick) são péssimas para a experiência do usuário. Em primeira análise, porque o usuário já está acostumado a esperar para que seu clique tenha efeito naquele dispositivo. Mais que isto, este tempo não existe por acaso: o dispositivo fica a espera de uma ação que possa ser complementar.

Em suma, tome muito cuidado ao implementar novas formas de interação através de gestos e, sobretudo, não reescreva comportamentos padrões. Mais uma vez, lembre-se que novos navegadores e dispositivos surgem toda a semana e você não pode se dar o luxo de correr atrás e testar em cada um deles seu [carrossel](http://shouldiuseacarousel.com).

-----------

## Desafio das imagens

O próximo desafio é escolher uma imagem que tenha uma boa nitidez em diferentes dispositivos sem exagerar no tamanho.

Saiba que o [HTTP Archive](http://httparchive.org) registra que 63% daquilo que compõe seu website são imagens. Os *scripts*, sempre parte do assunto de otimizações, representam apenas 17%. Fica evidente que as imagens merecem uma atenção especial, [vamos a ela](/hipermidia-as-avessas-imagens.html).


-------------

**Edição em 12/2013:** Detalhamento sobre o funcionamento e utilidade de fontes com tamanhos relativos.
