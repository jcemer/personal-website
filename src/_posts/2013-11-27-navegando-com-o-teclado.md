---
layout: post
title: Navegando com o teclado
lang: pt
tags:
  - JavaScript
  - Usabilidade
excerpt: <p>Sobre quais os benefícios de pensar a navegação da sua aplicação além dos cliques do mouse. Aprenda a definir atalhos de teclados e conheça alguns mapa de atalhos de aplicações populares.<p>
---

Se analisarmos um pouco, à mesma época dos primórdios daquilo que se tornou a web, foi patenteado o mouse. Talvez por isto, estejamos tão acostumados a navegar com os cliques. Mas, muito antes dos ponteiros, eram as teclas que imperavam. O teclado é um dos mais antigos dispositivos de entrada de dados em computadores e com ele conseguimos ser bastante ágeis, mais até do que imaginamos.

Há algumas semanas, uma troca de *tweets* entre eu, [Mauricio Wolff](https://twitter.com/bitbonsai) e [Daniel Filho](https://twitter.com/danielfilho), convergiu para **quais os atalhos de teclado mais comuns** que os desenvolvedores devem dar suporte em páginas de internet e este será o principal assunto deste texto.

## Atalhos padrões

É importante conhecer os atalhos implementados pelos navegadores para tirar melhor proveito das suas funcionalidades. Saiba que veremos apenas alguns deles com a intenção de justificar e servir como suporte à criação de outros atalhos.

### Deslocamento da página

Os mais naturais e agnósticos a sistema operacional e fabricante são: as setas para avançar e voltar uma linha, `espaço` para descer uma página, `end` (`Cmd + ↓`) para chegar ao fim da página e `home` (`Cmd + ↑`) para voltar ao seu início.

### Navegação por elementos que podem receber foco

Alguns elementos da página permitem ao usuário navegar através deles com auxílio da tecla `tab`. Os *links*, botões e campos de entrada de dados são elementos que, por padrão, podem receber foco e fazer parte deste modo de navegação. Além disto, o atributo `tabindex` pode ser utilizado para guiar a ordem da navegação e **dar a capacidade de ganhar foco a qualquer elemento**.

## Fluxos alternativos

É bastante importante introduzir um conceito empírico (leia-se, não tenho referências) de **fluxo alternativo** de uma página de internet. Um fluxo alternativo é criado quando abrimos um *login* flutuante, mostramos uma galeria de imagens em uma camada superior à página ou mostramos qualquer outro conteúdo de maneira semelhante.

Os fluxos alternativos devem ser compostos por <a href="#Navegação-por-elementos-que-podem-receber-foco">elementos que possam receber foco</a>, o que pode ser alcançado com o auxílio do atributo `tabindex`. Saiba que o valor igual a `-1` no atributo é usado para que este não participe da navegação por `tab`.

É imprescindível que quando o fluxo alternativo for ativado, o foco seja atribuído ao elemento, por exemplo:

~~~javascript
jQuery('.modal').focus();
~~~

Definir atalhos de teclado é principalmente uma medida de usabilidade que influencia na acessibilidade do documento. Em via de regra, os atalhos irão facilitar o uso por pessoas sem acesso a *mouse* ou *trackpad* e que possuam problemas motores. Acessibilidade é um campo vasto e você pode começar por [esta palestra do Horácio Soares](http://www.slideshare.net/horacio.soares/frontin-rio-junho2013).

### Sair de um fluxo

A tecla `esc` deve ser responsável por cancelar qualquer fluxo alternativo. É uma experiência bastante frustrante para o usuário ampliar uma imagem que toma toda a tela e não conseguir cancelar esta ação por meio da tecla `esc`.

O [Twitter Bootstrap](http://getbootstrap.com), por exemplo, possui uma preocupação digna com este comportamento, o código abaixo foi extraído do componente de modal.

~~~ javascript
this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
    e.which == 27 && this.hide()
}, this))
~~~

A implementação verifica se o código da tecla `esc`, identificado pelo número 27, foi pressionado por meio de um evento de `keyup`. Um exemplo mais desacoplado ainda utilizando jQuery:

~~~ javascript
var KEYBOARD = {
    esc: 27
}

$(document).on('keyup.modal', function (event) {
    if (event.which == KEYBOARD.esc) {
        // handle action
    }
})
~~~

### Navegar pelas setas

Galerias de fotos na forma de um fluxo alternativo são sempre acompanhadas de botões para avançar e retroceder a imagem. Nestes casos, é essencial que as setas do teclado também possam fazer este trabalho. Veja o código de exemplo com as teclas `left` e `right`:

~~~ javascript
var KEYBOARD = {
    left: 37
  , right: 39
}

$(document).on('keyup.modal', function (event) {
    if (event.which == KEYBOARD.left) {
       // handle action
    } else if (event.which == KEYBOARD.right) {
       // handle action
    }
})
~~~

Lembre-se que estes tratadores de eventos devem ser respectivamente definidos e desativados quando o fluxo ganha e perde foco. Em uma aplicação, pode ser útil a criação de eventos específicos, veja:

~~~ javascript
var $document = $(document)

$document.on('keyup.observe', function (event) {
    ;['esc', 'left', 'right'].forEach(function (key) {
        if (event.which == KEYBOARD[key]) {
        	$document.trigger(key + 'keyup')
        }
    })
})
~~~

O código dos fluxos se torna mais expressivo:

~~~ javascript
$document.on('esckeyup.modal', function (event) {
    // handle action
})
$document.on('leftkeyup.modal', function (event) {
    // handle action
})
~~~

## Formulários

> Every textarea should let you submit comments by pressing cmd-enter or ctrl-enter. For every site that doesn't support it, a kitten weeps. Here's to making less kittens weep.

Esta é a descrição do projeto [cmd-enter](https://github.com/dewski/cmd-enter). Diferente dos outros campos de um formulário, em que a tecla `Enter` tem a função de enviar os dados, quando em um textarea, sua função é a de quebrar a linha. Nada mais justo que exista uma maneira de enviar o formulário quando em um textarea, e esta é convencionalmente a combinação de `Ctrl+Enter` (`Cmd+Enter`).

~~~ javascript
var KEYBOARD = {
    enter: 13
}

$document.on('keydown', 'textarea', function (event) {
  if (event.which == KEYBOARD.enter && (event.metaKey || event.ctrlKey)) {
    $(this).parents('form').submit()
  }
})
~~~

[Experimente o funcionamento](http://jsfiddle.net/rPWhv/). Tenho certeza que se ainda não conhecia, passará a tentar a combinação em todos os próximos formulários que preencher, vicia.

## Crie seu ecosistema

Aplicações de uso massivo possuem uma gama de atalhos bastante rica. A convenção é que a tecla `?` mostre o mapa; tente pressionar no Gmail ou GitHub. É interessante notar que alguns dos atalhos do Gmail como o `J` e `K` são baseados no [VIM](http://www.vim.org).

----------

Confesso que ainda estou explorando a maneira de melhor tirar proveito dos atalhos de teclado no meu dia-a-dia (relaxa, [Konami Code](http://en.wikipedia.org/wiki/Konami_Code) eu conheço) e nos projetos que desenvolvo.

A mensagem final? Vale bastante a pena se ater a definição de atalhos para garantir um experiência ainda mais rica para os usuários.
