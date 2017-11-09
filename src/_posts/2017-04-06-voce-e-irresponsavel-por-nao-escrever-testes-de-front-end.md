---
layout: post
title: "Você é irresponsável por não escrever testes de Front-end?"
lang: pt
tags:
  - Front-end
  - Teste
excerpt: <p>Quais as implicações da temática de teste de código no Front-end.</p>
---

Nesta semana tivemos o 1º Meetup do Facebook Developer Circle — React em Porto Alegre. O evento atraiu uma audiência bem diversa e graças a seu formato, trouxe uma discussão muito interessante: **qual a importância de testes no desenvolvimento de código**.

Apesar de o assunto não ser novidade para mim, já ouço falar sobre testes há quase uma década, toda vez que acompanho uma discussão a respeito, aprendo um pouco mais. Com certeza não sou um especialista no assunto, estou bem longe disto, mas gostaria de sumarizar neste texto aquilo que já aprendi.

Em primeira análise, é importante destacar que existem diferentes tipos de testes que garantem o correto funcionamento e adequação de diferentes aspectos de um projeto. Aqui, irei me deter muito mais aos **testes unitários**, que são aqueles que se propõe a garantir o correto funcionamento das menores porções de uma aplicação.

> It’s absolutely irresponsible not to write automated [unit] tests as part of software development and you should avoid jobs at companies that don’t do it.

O trecho acima, extraído de uma [discussão sobre empresas em que programadores não escrevem testes unitários](https://www.quora.com/Would-you-work-for-a-company-who-doesnt-write-tests/answer/Tim-Moore-2?srid=OBCN), poderia facilmente encerrar qualquer debate sobre a necessidade ou não de se manter testes de código. Porém, Desenvolvimento Web nem sempre é sobre Desenvolvimento de Software e saber como e o que testar nem sempre é algo simples.

## Tipos de projetos

A primeira metade da minha carreira dediquei ao desenvolvimento de páginas Web estáticas e bem simples. Passei mais de meia década criando diversos Websites institucionais e não tenho vergonha alguma de dizer que, naquela época, não sabia ao menos como escrever uma única linha de testes.

> Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications, electronic businesses, and social network services. — Wikipedia

Até mesmo hoje, ainda mantenho alguns projetos sem nenhum teste. Indo um pouco além, acredito que projetos que são **simples** e que serão desenvolvidos em **poucas semanas**, não necessitam da escrita de testes. Mesmo porque, é inegável que existe um custo atrelado a esta prática.

Por outro lado, 1) projetos que tomarão meses para serem escritos, 2) projetos que terão alguns ciclos de desenvolvimento ou 3) possuem [lógicas até mesmo pouco complexas](https://github.com/jcemer/minimalistic-shop), são Aplicações Web ou Projetos de Software e **devem ser acompanhados por testes**. Nestes casos, o custo de escrita de testes torna-se rapidamente um investimento.

## Aplicações Web sem testes

Como apontado em [Refactoring Without Good Tests](http://blog.codeclimate.com/blog/2013/12/05/refactoring-without-good-tests/), em códigos sem testes não é possível identificar se mudanças irão quebrar outras partes da aplicação. **Não existe refactoring em código sem testes**. Além disto, testes unitários reforçam boas práticas, podem antecipar a identificação de falhas no código e servem como documentação de funcionalidades.

Este círculo vicioso explica facilmente a falácia de desenvolvedores muito ocupados para escrever testes: 1) estes perdem muito tempo experimentando o impacto de novas funcionalidades, 2) corrigindo bugs que já estão em produção ou 3) tentando entender decisões de design de código infelizes as quais tem **medo de alterar**.

Alguns dos argumentos contra a escrita de testes apontam que a suíte para determinado projeto seria impraticável e lenta e que um roll-out faseado (deploy para uma pequena porção de clientes) permite melhor identificar bugs através de usuários reais. O que foi apontado até aqui e ainda mais pagar o preço da frustração de alguns usuários tornam argumentos como estes inválidos. Ainda, estes argumentos evidenciam decisões ruins de design e arquitetura de um projeto.

> Aplicações Web mantidas sem nenhum tipo de teste e com uma equipe de desenvolvimento sem planos para reverter esta situação indicam uma cultura de desenvolvimento envenenada. — eu mesmo é que acho isto!

## Aprendendo a testar

Apesar de existirem diversas teorias que você já deve conhecer, **enxergar valor na escrita de testes** vai muito além do bê-a-bá do [Test-driven Development](https://martinfowler.com/articles/is-tdd-dead/) (TDD). A falta de prática e experiência é um dos principais motivos de vermos tantos projetos com testes pouco úteis ou ausentes.

O que melhor funcionou nos projetos em que já trabalhei foi enxergar as [porções de código que não são declarativas](http://muness.blogspot.com.br/2008/04/testing-declarative-code.html) e garantir que estas sejam testadas. **Código Front-end sempre terá muitas porções declarativas** e não costumo escrever testes unitários para estas porções. Nunca tive pretenção de seguir TDD a risca.

Em outras palavras, acredito apenas que código que possui diferentes fluxos deva ser testado. Simples assim. Seguindo esta prática, o código abaixo não teria testes:

~~~ javascript
const CartItem = ({ _id, image, quantity }) => {
  return (
    <div className="ui item">
      <div className="ui tiny image">
        <img src={image} alt={`Product ${_id}`} />
      </div>
      <div className="middle aligned content">
        <div className="ui tiny header">Product {_id}</div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  )
}
~~~

Por outra lado, o código abaixo, apesar de parecer mais simples, possui a lógica relacionada a capacidade de um produto ser adicionado ao carrinho de compras. Este código deve ser testado.

~~~ javascript
const AddToCartButton = ({ _id, stock, addToCart }) => {
  const disabled = stock.remaining <= 0

  return (
    <button disabled={disabled} onClick={() => !disabled && addToCart(_id)}>
      Add to cart
    </button>
  )
}
~~~

Existem diversas ferramentas para testar código Front-end. Por este exemplo se tratar de código React, uma das melhores alternativas da atualidade para escrita de testes unitários é o framework Jest com a biblioteca Enzyme. O Jest é o framework padrão do projeto [Create React App](https://github.com/facebookincubator/create-react-app).

~~~ javascript
describe('<AddToCartButton />', () => {
  describe('with remaning stock', () => {
    const addToCart = jest.fn()
    const wrapper = shallow(<AddToCartButton _id='123' stock={{ remaining: 1 }} addToCart={addToCart} />)

    it('should render a enable button', () => {
      expect(wrapper.prop('disabled')).toBe(false)
    })

    it('should call add to cart on click', () => {
      wrapper.simulate('click')

      expect(addToCart).toHaveBeenCalledWith('123')
    })
  })

  describe('with no remaning stock', () => {
    const addToCart = jest.fn()
    const wrapper = shallow(<AddToCartButton _id='123' stock={{ remaining: 0 }} addToCart={addToCart} />)

    it('should render a disabled button with', () => {
      expect(wrapper.prop('disabled')).toBe(true)
    })

    it('should call add to cart on click', () => {
      wrapper.simulate('click')

      expect(addToCart).not.toHaveBeenCalled()
    })
  })
})
~~~

Note que o exemplo acima explora muito bem os dois possíveis fluxos de execução do nosso componente: 1) quando há items em estoque e 2) quando não há items em estoque. A partir destes fluxos, o botão pode estar habilitado ou inabilitado e a função `addToCart` é chamada ou não a partir do clique do usuário.

## Criando uma cultura de testes

Escrever testes não deve ser difícil ou doloroso. O primeiro passo para incorporar o hábito de testar código em um projeto é **escolher e configurar de maneira adequada as ferramentas que permitam sua escrita**. Todos os desenvolvedores devem prezar pela evolução e funcionamento do ecossistema de testes.

A partir deste ponto, é importante revisar o código dos pares e promover tech talks para aprimorar o conhecimento e experiência de escrita de testes na equipe. Os testes devem ser executados de maneira automatizada a cada mudança de código.

> So, if you are going to touch the code, for bug fixes or refactoring, then first write the unit tests. For bugs unit tests will help prove where the problem is, as you can duplicate it. — James Black on [Stack Overflow](http://stackoverflow.com/a/1541596)

Para projetos legados que não tenham testes, escrever **testes antes de alterar qualquer porção de código é uma ótima regra** que pode e deve ser incorporada na equipe. Isto aumenta aos poucos a cobertura de testes do projeto e permite praticar refactoring.

## Além dos testes unitários

[Testes automatizados de navegador](http://nightwatchjs.org/), conhecidos como Smoke Tests são uma ótima alternativa para garantir que as principais funcionalidades da Aplicação estejam operando adequadamente. Smoke Tests inclusive servem muito bem para introduzir algum tipo de teste em projetos legados.

Este artigo foca quase que apenas em testes unitários e funcionais. Porém, tratando-se de Desenvolvimento Front-end é importante destacar que existem também: 1) [Performance Tests](https://github.com/addyosmani/psi), 2) [Visual/CSS Regression Tests](https://github.com/Huddle/PhantomCSS) e 3) [Cross-Browser Testing](https://www.browserstack.com/).

---

A conclusão mais rasa é que você deve testar código se almeja trabalhar com sanidade e de maneira responsável em uma Aplicação Web. Além disto, aprender os conceitos e sobretudo praticar a escrita de testes unitários **expande a maneira que você pensa a respeito de código** e o torna um profissional melhor.

---

*Artigo orinalmente postado no [Medium](https://medium.com/tableless/voc%C3%AA-%C3%A9-irrespons%C3%A1vel-por-n%C3%A3o-escrever-testes-de-front-end-70c2858b62df).
