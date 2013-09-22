---
layout: post
title: 'Hipermídia as Avessas'
tags:
  - HTML5
  - mobile
---

Tive o prazer de palestrar no primeiro [Mobile Brazil Conference](http://mobilebrazilconference.com.br) junto com o [Marcelo Oliveira](https://twitter.com/askoth). Quando do convite, logo soube que o assunto deveria ser desenvolvimento web mobile e com base na definição de [Hipermídia](http://pt.wikipedia.org/wiki/Hiperm%C3%ADdia) logo chegamos no título. **Hipermídia as avessas** são os desafios, meios e técnicas de se entregar uma única mídia para diferentes suportes computacionais.

Existem vários dispositivos que podem ser alcançados por uma hipermídia: desktops, laptops, impressoras, TVs, smartphones e tablets só para citar alguns. Além disto, não são apenas os browsers o meio: aplicativos como Apple Store, Netflix e o Steam são escritos em HTML5. Mas a maior revolução da nossa era, sem ter como negar, é o mobile: dispositivos pequenos e de fácil locomoção. Eles é que serão foco principal do nosso estudo.

Os slides da palestra você encontra [aqui](https://speakerdeck.com/jcemer/hipermidia-as-avessas) e o vídeo [aqui](https://www.eventials.com/pt-br/mobilebrazilconference/hipermidia-as-avessas-seu-conteudo-na-web-por-diferentes-formas).

## Mobile

O aparelho que foi o marco da web mobile (mesmo tendo muitos outros aparelhos e experimentos anteriores) foi o iPhone da Apple. Muito daquilo que temos hoje foi definido pela própria Apple antes mesmo de o telefone ser lançado. É claro que existia todo um suspense em torno do lançamento e por isso as documentações e especificações foram deixadas de lado. O resultado é que, no início, desenvolvedores utilizavam soluções em seus sites sem ter certeza alguma de seu funcionamento.

Uma característica bastante interessante é que o iPhone foi desenvolvido para desfrutar da mesma experiência de navegação de um desktop ou laptop. A intenção nunca foi a de utilizar o protocolo [WAP](http://en.wikipedia.org/wiki/Wireless_Application_Protocol), por exemplo. E isto é ótimo: "A web é de todos e para todos".

### Mobile Viewport

Na época do seu lançamento, o aparelho tinha resolução de [320x480](http://www.iphoneresolution.com) e a maioria dos websites tinha seu layout definido com base numa resolução de 1024x768.

A solução para que o usuário tivesse uma visão completa do website à primeira vista foi definir uma resolução de viewport diferente do tamanho do display. Então, com base na maioria dos websites da época, a viewport do aparelho possui configuração inicial com largura de 980px. Os websites que não ficam adequados podem indicar uma diferente largura através da meta tag viewport a seguir.

```html
<meta name=”viewport” content=”width=1024”>
```

### Pinch Zoom

O pinch zoom (ou pinch to zoom) é a principal ferramenta do usuário para driblar os pequenos displays aproximando a visualização para porções da página. A ferramenta, ativada por gesto, já vem habilitada por padrão e desabilitá-la não é uma boa prática pois os usuários já estão bastante acostumando e esperam poder utilizá-la.

Apenas desabilite o pinch zoom em jogos ou webapps que permitem interações com dois ou mais dedos através da meta tag a seguir.

```html
<meta name=”viewport” content=”user-scalable=no”>
```

--------

## Desafios da web plural

A tarefa de disponibilizar para uma gama de dispositivos o mesmo conteúdo traz consigo alguns desafios:

- **Garantir boa legibilidade** em diferentes tamanhos e resoluções de tela. Além disto, diferentes dispositivos são geralmente utilizados a diferentes distâncias em relação a nossos olhos (pense na distância em que você assiste TV e utiliza seu smartphone).

- Mostrar sempre o conteúdo mais importante para o usuário à primeira vista considerando diferentes **aspect ratios**. Lembre-se: gráficos de calor e outras medidas provam que o usuário nem sempre utiliza a rolagem da página, não esconda conteúdo.

- Permitir que o usuário **consiga interagir** com a página indiferente de dispositivo e considerando as limitações de cada um.

A técnica para enfrentar estes e mais desafios você conhece em [Hipermídia as avessas: Responsive Design](hipermidia-as-avessas-responsive-design.html).

