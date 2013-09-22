---
layout: post
title: 'Hipermídia as Avessas: Responsive Design'
tags:
  - HTML5
  - mobile
---

[Responsive Design](http://alistapart.com/article/responsive-web-design) é a entrega de uma experiência ótima de leitura e navegação independente de dispositivo.

----------

Antes de mais nada, saiba que este texto é a continuação [deste outro](hipermidia-as-avessas.html). Lá são apresentados alguns desafios que, a partir daqui, aprenderemos a enfrentar.

----------

## Tamanho de fonte

O tamanho da fonte (`font-size`) é determinante para se garantir uma boa legibilidade. Seu  tamanho básico, utilizado caso você não defina, geralmente é **16px**.

Apesar deste *quase-padrão-de-16px* ser bastante disseminado, não existe especificação: cada navegador pode definir o mais adequado e permitir que o usuário altere isto através de configuração. Explore isto em seu projeto utilizando as medidas: `xx-small`, `x-small`, `small`, ` medium`, ` large`, `x-large` e `xx-large`.

```css
p {
  font-size: large;
}
```

### Tamanho relativo

Uma maneira de flexibilizar ainda mais o seu projeto (xxxxx) é utilizando medidas que são baseadas em elementos anscestrais ou outras propriedades.

A medida **em** é relativa ao tamanho da fonte definido ou herdado no elemento pai.

```html
<body>
  Foo
  <div style="font-size: 0.5em">
    bar <span style="font-size: 2em">fizz</span>
  </div>
</body>
```

Supondo um tamanho básico de 16px, a palavra *bar* será renderizada com tamanho de 8px. O *fizz*, por sua vez, terá o dobro do tamanho de *bar*: 16px.

A medida **em**, apesar de bastante útil, dificulta (a série de cálculos pode ser penosa) e até mesmo inviabiliza a modularização do seu projeto. A evolução natural é a medida **rem** que é definida diretamente com base no `<body>`.

```html
<body>
  Foo
  <div style="font-size: 0.5rem">
    bar <span style="font-size: 2rem">fizz</span>
  </div>
</body>
```

Novamente supondo um tamanho básico de 16px, a palavra *bar* será renderizada com tamanho de 8px e *fizz* com tamanho de 32px. Veja, a definição de *fizz* não afetou o *bar*. A única restrição para não se abandonar completamente **em** é que o suporte de **rem** é restrito ao IE9+.

Defina também a altura de linha (`line-height`) utilizando uma medida relativa para garantir flexibilidade.

```css
p {
  line-height: 1.5em;
}
```

## Conteúdo fluído


