---
layout: post
title: 'Hipermídia as Avessas: Imagens'
tags:
  - HTML5
  - mobile
---

O que denominamos [Hipermídia as avessas](/hipermidia-as-avessas.html) e aprendemos sobre [design responsivo](/hipermidia-as-avessas-responsive-design.html) nos obriga a dar uma atenção especial às imagens. Temos algumas propostas para lidar com elas. Antes de mais nada, é importante conhecer basicamente os diferentes formatos de imagens, vamos a eles.

## Formatos de imagens

É bastante importante saber identificar e compreender os diferentes formatos de imagens:

- **Bitmaps**: são imagens que possuem resolução específica e definem a cor de cada um dos seus *pixels*. Os formatos mais comuns na internet são [png](http://en.wikipedia.org/wiki/Portable_Network_Graphics), [jpeg](http://en.wikipedia.org/wiki/JPEG) e [webp](https://developers.google.com/speed/webp) (confere este último).

- **Vetores**: não pertencem a uma resolução específica, definem formas através de linhas e pontos. Os principais são [svg](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) e as próprias fontes.

Como você já deve ter notado, o problema são as imagens *bitmap*. Imagens vetoriais podem ser apresentadas em qualquer resolução sem perda de nitidez. As imagens em formato bitmap devem ser **evitadas ao máximo**, dê prefência a **usar formatos vetoriais**.

## Imagens no CSS

Todas as imagens que são ligadas unicamente ao layout da sua página podem e devem ser inseridas através das folhas de estilo. Desta forma, você pode utilizar todo o poder das [media queries](/hipermidia-as-avessas-responsive-design.html#Media-Queries) para, quando não for possível utilizar uma imagem vetorial, entregar imagens *bitmaps* adequadas a cada resolução e demais aspectos do dispositivo.

Não se esqueça também que [fontes](http://fortawesome.github.io/Font-Awesome) podem ser usadas como biblioteca de ícones vetoriais em seu projeto.

## Imagens no HTML

Imagens devem ser inseridas de `<img>` quando fizerem parte do seu conteúdo. Uma única imagem pode ser indicada e a consequência é não ser possível escolher diferentes arquivos com base nos aspectos do dispositivo.

### Soluções no servidor

Uma forma tangível aos navegadores atuais é o uso de alguma inteligência no servidor que possa ajudar a entregar a imagem mais adequada. Esta é uma [lista bem completa com de soluções](https://docs.google.com/spreadsheet/ccc?key=0Al0lI17fOl9DdDgxTFVoRzFpV3VCdHk2NTBmdVI2OXc#gid=0), falaremos aqui das que possuem a primeira coluna marcada.

Mesmo sendo óbvio, acho importante destacar que estas soluções vão depender de configurações específicas nas máquinas que são servidoras do seu projeto. Além disto, a solução mais comum opera com a criação de um *cookie* com as informações do dispositivo e não há garantia que este seja criado antes da requisição das imagens.

Outro detalhe é que tais soluções podem enfrentar problemas em servidores [proxy](http://pt.wikipedia.org/wiki/Proxy) mal configurados além de quebrar o princípio de [REST](http://pt.wikipedia.org/wiki/REST), o que pode ser contornado com o cabecalho de `Vary` [como destacado pelo Sério Lopes](https://twitter.com/sergio_caelum/statuses/379684187600482304).

### Soluções no navegador

Sempre que pesquiso e penso sobre o assunto me parece bastante claro que o único sujeito com capacidade de decidir qual a imagem mais adequada é o navegador.

A solução para termos imagens responsivas habita em duas novas especificações:

~~~ html
<img src="pear-mobile.jpeg"
     srcset="pear-mobile.jpeg 720w, 
             pear-tablet.jpeg 1280w, 
             pear-desktop.jpeg 1x"
     alt="The pear is juicy."
~~~

A epecificação de [srcset attribute](http://www.w3.org/html/wg/drafts/srcset/w3c-srcset), exemplificada acima, permite definir uma série de arquivos com base em resolução e densidade de *pixels* do dispositivo em relação ao *pixel* do CSS.

~~~ html
<picture width="500" height="500">
  <source media="(min-width: 45em)" src="large.jpg">
  <source media="(min-width: 18em)" src="med.jpg">
  <source src="small.jpg">
  <img src="small.jpg" alt="hi, there" lazyload>
</picture>
~~~

O elemento [picture](http://www.w3.org/TR/html-picture-element) viabiliza o poder total das *media queries* para selecionar a imagem mais adequada.

Saiba que as especificações são desenhadas de maneira a manter a compatibilidade com navegadores antigos, tanto por isto a primeira mantem o `src` e a segunda possui uma `<img>` embutida. A questão é que são ainda rascunho e o suporte em navegadores é nulo. Existe bastante discussão em torno do assunto e um [grupo exclusivo de imagens responsivas](http://www.w3.org/community/respimg/) para fomentar o debate.

#### Soluções possíveis

Por enquanto, nos restam algumas poucas técnicas possíveis:

- **Não faça nada**, inclua uma imagem com nitidez mediana que esta ficará aceitável para uma vasta gama de dispositivo. Esta é a solução mais adotada, sem dúvidas.

- Entregue uma imagem de nitidez inferior e depois, via JavaScript, **substitua por uma mais adequada**. A desvantagem é que o usuário precisará fazer o *download* de duas imagens e terá sua experiência visual afetada por enxergar estas diferentes imagens.

- Outra técnica interessante é criar uma **imagem de dimensão maior** que a utilizada e de muita pouca qualidade que, depois de reescalada, terá uma nitidez bastante aceitável sem pesar muito para a banda. O detalhe é que a imagem gigantesca ficará ocupando memória do navegador.

Enfim, não temos nada muito adequado para resolver este problema. É preciso torcer para que as especificações amadureçam logo e que os fabricantes de navegadores as adotem.
