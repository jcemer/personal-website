---
layout: post
title: 'Criando bons construtores em JavaScript'
tags:
  - JavaScript
---

Este texto não se trata de uma introdução a Orientação a Objetos, para isto, [este artigo da MDN serve melhor](https://developer.mozilla.org/pt-PT/docs/Javascript_orientado_a_objetos).

Tive o prazer de [palestrar sobre os paradigmas do JavaScript](https://speakerdeck.com/jcemer/o-fantastico-mundo-do-javascript) no [BrazilJS](http://braziljs.com.br) deste ano, este texto é um complemento com alguns *insights* sobre Orientação a Objetos e em especial: construtores.

## Inspiração

Costumo sempre ficar de olhos abertos para sugar ao máximo o que diferentes linguagens e suas comunidades tem a oferecer. Este é meu maior conselho, absorva ao máximo.

Aprendi Ruby há alguns anos atrás. Na época, o que mais me chamou atenção, era que quase tudo pode se comportar como um objeto, assim como no JavaScript. Mas fique tranquilo, minha intenção aqui não é fazer com que você aprenda Ruby, só usarei ela por alguns parágrafos para defender um ponto.

Nossa inspiração será uma versão exageradamente simplificada da principal classe responsável pelos *models* no [Ruby on Rails](http://rubyonrails.org).

~~~ ruby
class ActiveRecord::Base
  def initialize(attributes)
    assign_attributes(attributes)
  end
end
~~~

Considerando um *model* `User`, posso executar `User.new(name: 'Jean')` para instanciar um objeto. Neste caso, o método `initialize` acima é chamado e `name` é armazenado no objeto que acabei de criar.

**O ponto chave: nenhum efeito colateral é ou deve ser desencadeado com a simples instanciação de um objeto**. Esta execução, por exemplo, não salva este usuário no banco de dados ou o persiste de qualquer outra maneira que não seja como atributo do objeto recem criado.

------------

Adicionalmente, nossa classe possui o método `create`. Este método pode ser chamado ao invés do `new`, que é o construtor padrão.

~~~ ruby
class ActiveRecord::Base
  def self.create(attributes)
    object = new(attributes)
    object.save
    object
  end
end
~~~

Como você deve suspeitar, `User.create(name: 'Jean')` instancia um objeto e o salva no banco de dados. Sim, agora temos efeito colateral, mas isto é claro pois tenho um método específico que possui este comportamento documentado.

## Construtores ideais

O construtor ideal é aquele que não adiciona *listeners* de eventos ou elementos no DOM e muito menos dispara um `alert`. E é óbvio que isto não é tão simples e a maioria dos códigos não seguem esta regra.

### Modelo

Vamos portar nossa [inspiração](#Inspiração) para JavaScript na forma de uma das aplicações mais comuns (e detestadas) de vermos em websites: um carrossel.

~~~ javascript
function Carousel(container) {
  this.container = $(container);
}

Carousel.create = function (container) {
  var instance = new this(container);
  instance.init();
  return instance;
};

Carousel.prototype.init = function () {
  this.addEventListeners();
  this.startAutomaticTransition();
};
~~~

Note, a única função do construtor é armazenar o *container* utilizado como base para o carrosel. O método de instância `init` é que irá disparar o comportamento. Um exemplo de uso.

~~~ javascript
var productsCarousel = new Carousel('[data-carousel="products"]');
productsCarousel.init();
~~~

Temos outra forma de uso com o mesmo resultado. Repare que desta vez não usamos o operador `new`.

~~~ javascript
Carousel.create('[data-carousel="products"]');
~~~

Adicionalmente, lembre-se sempre de tirar o máximo proveito da linguagem e definir seus métodos no `prototype`. Desta maneira, uma única função será criada e compartilhada por todas as instâncias do seu construtor.

### Vantagens

A principal vantagem é poder **instanciar um objeto sem precisar se preocupar com efeitos colaterais**, este é o ganho.

Sem dúvidas, herança em navegadores modernos deve ser apoiada em [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Classical_inheritance_with_Object.create). Mas para uma técnica compatível com todos os navegadores, o construtor a ser herdado deve ser instanciado no *prototype* do sub construtor. A maneira mais comum de se fazer isto é [criando um construtor temporário para que o construtor herdado não seja executado](https://github.com/jashkenas/backbone/blob/f6fa0cb87e26bb3d1b7f47144fd720d1ab48e88f/backbone.js#L1552-L1556). Com construtores sem efeito colateral, esta etapa não é necessária.

~~~ javascript
function CarouselWithLasers(container) {
  Carousel.call(this, container);
}
CarouselWithLasers.prototype = new Carousel();
CarouselWithLasers.prototype.constructor = CarouselWithLasers;
~~~

Viabilizar os testes é outra grande vantagem em não ter comportamento definido no construtor. Desta forma, fica possível aplicar [stubs](http://sinonjs.org/docs/#stubs) no método `init` para poder testar e ser feliz.

-------------

Na biblioteca [Backbone](http://backbonejs.org), que é um dos *cases* mais fantásticos de herança em JavaScript que conheço, todos os construtores quando não extendidos podem ser instanciados sem efeitos colaterais. Isto vale para `new Backbone.Model()`, `new Backbone.View()`, `new Backbone.History()`. Pode experimentar, faça estas chamadas no *console* do seu navegador quando estiver acessando o endereço http://backbonejs.org

Um último detalhe é que, para as views do Backbone, a documentação incentiva o uso da propriedade `events`, que associa *listeners* na instanciação do objeto. Tem também o método `this.listenTo` geralmente usado no `initialize`, outro que é chamado na instanciação. Não digo que não devam ser utilizados, apenas aconselho que fique atento.

-------------

**Edição 1:** Chamar de `create` o método do construtor evita confusões e deixa mais clara qual a sua real função.

**Edição 2:** Incentivo ao uso do `prototype` como essência da definição de um bom construtor.
