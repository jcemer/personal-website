---
layout: post
title: 'Hipermídias as Avessas'
tags:
  - HTML5
  - mobile
---

Tive o prazer de palestrar no primeiro [Mobile Brazil Conference](http://mobilebrazilconference.com.br) junto com o [Marcelo Oliveira](https://twitter.com/askoth). Quando do convite, logo soube que o assunto deveria ser desenvolvimento web mobile e com base na definição de [Hipermídia](http://pt.wikipedia.org/wiki/Hiperm%C3%ADdia) logo chegamos no título: **Hipermídia as avessas** são os desafios, meios e técnicas de se entregar uma única mídia para diferentes suportes computacionais.

Existem vários dispositivos que podem ser alcançados por uma hipermídia: desktops, laptops, impressoras, TVs, smartphones e tablets só para citar alguns. Além disto, não são apenas os browsers o meio, aplicativos como Apple Store, Netflix e o Steam são escritos em HTML5. Mas a maior revolução da nossa era, sem ter como negar, é o mobile: dispositivos pequenos e de fácil locomoção. Eles é que serão foco principal do nosso estudo.

## Advento do mobile

O aparelho que foi o marco da web mobile (mesmo tendo muitos outros aparelhos e experimentos anteriores) foi o iPhone da Apple. Muito daquilo que temos hoje foi definido pela própria Apple antes mesmo de o telefone ser lançado. É claro que existia todo um suspense em torno do lançamento e por isso as documentações e especificações foram deixadas de lado. O resultado é que, no início, desenvolvedores utilizavam soluções em seus sites sem ter certeza alguma de seu funcionamento.

Uma característica bastante interessante é que o iPhone foi desenvolvido para desfrutar da mesma experiência de navegação de um desktop ou laptop. A intenção nunca foi a de utilizar o protocolo [WAP](http://en.wikipedia.org/wiki/Wireless_Application_Protocol), por exemplo. E isto é ótimo: "A web é de todos e para todos".

### Viewport

Na época do seu lançamento, o aparelho tinha resolução de [320x480](http://www.iphoneresolution.com) e a maioria dos websites tinha seu layout definido com base numa resolução de 1024x768.

A solução foi definir a resolução da viewport diferente do tamanho do display para que o usuário tivesse uma visão completa do website a primeira vista. Então, com base na maioria dos websites da época, a viewport do aparelho possui configuração inicial com largura de 980px. Para os websites que não ficam adequados, é possível redefinir a medida através da meta tag de viewport.

```html
<meta name=”viewport” content=”width=1024”>
```
