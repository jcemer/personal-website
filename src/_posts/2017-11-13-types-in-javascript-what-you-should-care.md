---
layout: post
title: "Types in JavaScript: why you should care"
lang: en
tags:
  - Front-end
  - JavaScript
excerpt: <p>The problems and some advices to address types in JavaScript.</p>
---

In simple terms, a type helps group similar values on which common operations can be performed. Based on our Mathematical knowledge, it is easy to identify that it is possible to sum the values in the sequence `11`, `3`, `67`, and `89`. At the same time, we know that we can't multiply the values in the following sequence `JS`, `is`, and `cool`, but we can naturally merge them. Numbers and strings are the most popular types.

In a programming language, the types are what determine the amount of memory allocated to save a value. The type of a value also determine the operations and methods allowed to be performed on it.

JavaScript has six primitives types: `string`, `number`, `undefined`, `null`, `boolean`, and `symbol`. There is also a compound type or `object`. Interestingly, the primitive types are **immutable and don't have properties**. For example, because of the `String` object you can retrieve the length of a string. The code `"a".length` is evaluated as `new String("a").length` by the interpreter like magic. There are also the objects `Number`, `Boolean`, and `Symbol` which also add properties to its own primitives.

The types in JavaScript look simple and useless but knowing how they work is important. They help give a better understanding of the language and its behavior.

# Dynamic type checking

Types are one of the main foundations of a programming language. Many execution errors in JavaScript are type errors. For example, when we try to multiply a `number` by a `string` we get a silent error in the form of `Not a Number` returned. Have you ever called a function and received the error `undefined is not a function`? This happens when we try to access a property that is not defined. Since Javascript cannot locate the property it returns its default fallback value: `undefined`.

Another common type-related mistake is when we try to change or access a property from a value that is `null` or `undefined`. Keep in mind that there aren't constructors like `Undefined` or `Null` to save us here. We end up with an error. Not to mention all the times that we mistake the value type of `this` and try forbidden things on it.

A good type system helps us avoid these common mistakes. By definition JavaScript is an interpreted and dynamic language and it requires that the type system works during the code execution. The language also tries to help by silently converting value types. It works in your favor when you multiply `2` by `'3'` and not so much when you are trying to sum a number with a `string` that contains a number. :sweat_smile:

Type changing or coercion is the reason many developers switch over to strictly using `===` for checking the equality of values, but there is a lot more to it than that as [Fixing Coercion, Not The Symptoms](https://davidwalsh.name/fixing-coercion) explains.

In essence, **types in JavaScript are a moving target, it is difficult to hit them**. Besides it isn't possible to predict or assure the variable type since the language is weakly typed and that type may change.

# Static type checking

Static type checking ensures that the program is correct, at least statically prior to execution. There are alternative ways to annotate the value types in JavaScript. It avoids you to bug the user trying to operate different types in a crazy way.

The code below calculates the price of a `Product`. From lines 4 to 6, we define the type of the `Product` properties with the [Flow](https://flow.org/) annotation. The rest of the code is plain JavaScript but notice there is a value incompatibility at the line 19. This is the kind of code that gifts you with a `NaN` value. Fortunately, the Flow analyzer warns you know about that potential error while writing the code.

~~~js
/* @flow */

class Product {
  name: string
  cost: number
  tax: number

  constructor (name, cost, tax) {
    this.name = name
    this.cost = cost
    this.tax = tax
  }

  price() {
    return this.cost * (1 + this.tax)
  }
}

const item = new Product("Banana", 2, "%30")
~~~

The Flow annotation allows you to define all the different [primitives](https://flow.org/en/docs/types/primitives/),
[objects](https://flow.org/en/docs/types/objects/), [constructors/classes](https://flow.org/en/docs/types/classes/) (`Date`, `Array`, ...) and even [literals](https://flow.org/en/docs/types/literals/). There are some advanced types like [*any*](https://flow.org/en/docs/types/any/) which accepts all types; [*nullable* or *maybe*](https://flow.org/en/docs/types/maybe/), to indicate a type or `null`; and also  [unions](https://flow.org/en/docs/types/unions/) and [intersections](https://flow.org/en/docs/types/intersections/) of types and interfaces (more about that below).

IMHO, the most powerful annotations are the [new types or *aliases*](https://flow.org/en/docs/types/aliases/), that allow you to give a name to a group of types for exclusive properties; [interfaces](https://flow.org/en/docs/types/interfaces/) which define a non-exclusive group of important properties or methods that a context is concerned about; and [*generics*](https://flow.org/en/docs/types/generics/). This last one, allows you to define the type of an array's values or the type of the result of a `Promise` for example.

According to [Kris Jenkins](https://www.youtube.com/watch?v=6mUAvd6i4OU), through type definition, it is possible to predict design problems. A function that returns many different types could mean a fault in planning. The creation of new types helps the programmer define the problem's entities. In any case, type annotation is a good resource to write safer and more understandable code.

> A Type System is, first and foremost a communication mechanism - Sarah Mei

Besides Flow, there is also [TypeScript](https://www.typescriptlang.org/) language which is statically typed with a syntax close to JavaScript. But bear in mind that Flow or TypeScript code needs conversion to JavaScript before running on the client machine. Type annotation requires effort not without meaningful outcome. The paper [To Type or Not to Type: Quantifying Detectable Bugs in JavaScript](http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf) concludes that a type analyzer could catch around 15% of production *bugs* in a reviewed and test covered codebase. It is quite impressive.

## IO Data

Programs in general and special interface code get a lot of external values to work with which means static analyzers require a contract declaring the types of the external data. The TypeScript code below indicates that the API response is a list of strings:

~~~javascript
interface ItemsResponse {
  results: string[]
}

http.get<ItemsResponse>('/api/items')
  .subscribe(data => {
    this.results = data.results
  })
~~~

From this annotation, the rest of of the code is analyzed to ensure that all references match. **The static analyzer, however, works if this contract is respected**. If the production API returns something other than `strings`, the risk of a runtime execution error is high.

The `any` is the type of [all JavaScript](https://github.com/facebook/flow/blob/0d385002cef6601cf741ffe917e7410a996bb265/lib/bom.js#L557) [APIs that return](https://github.com/facebook/flow/blob/4eb62a5597d59174531d44e532c65daa25d8331b/lib/streams.js#L54) data from abroad. And by definition, the `any` could be converted to a more specific type. Quoting the Flow documentation: using any is completely unsafe, and should be avoided whenever possible. But talking about external data it looks like anything could be done. It looks...

### Elm

There is a language catching a lot of attention that ensures there are no runtime execution errors at all. [Elm](http://elm-lang.org/) is a statically typed language for the web with a syntax and paradigm different than JavaScript.

Let's go back to our `Product` with price calculation. In the code below you'll see that the way to solve the problem isn't close to the Object Oriented JavaScript World™. Lines 1 to 5, 7, 11, and 14 are strictly responsible for type annotation. Lines 8 and 9 define the global price calculation and line 12 defines a sample product. Finally, the price calculation is performed on line 15.

~~~
type alias Product =
  { name : String
  , cost : Float
  , tax : Float
  }

price : Product -> Float
price {cost,tax} =
  cost * (tax + 1)

item : Product
item = { name = "Banana", cost = 2, tax = 0.3 }

itemPrice : Float
itemPrice = price item
-- 2.6 : Float
~~~

All of this is pretty impressive for the purpose of this post, the most important takeaway is the decoders. Elm requires you to define and test all the types of the IO data. A decoder can return `Err` with a message (like on the line 6 below) or an `Ok` with the decoded data (line 10).

~~~
import Json.Decode exposing (..)

resultsDecoder = field "results" (list string)

decodeString resultsDecoder "bla"
Err "Given an invalid JSON: Unexpected token b in JSON…"
    : Result.Result String (List String)

decodeString resultsDecoder "{ \"results\": [\"1\", \"2\"] }"
Ok ["1","2"] : Result.Result String (List String)
~~~

The code must thread the two possible cases in runtime execution: the `Ok` and the `Err`. This is one of the secrets for how maintain a language without runtime exceptions.

### JavaScript counter-attacks

The JavaScript ecosystem already has libraries which check value types at runtime. The code below throws an exception if the API we already know returns something other than `strings`:

~~~JavaScript
var t = require("tcomb")

const Results = t.interface({
  results: t.list(t.String)
}, "Results")

Results({
  results: ["1", "2"]
})

Results({
  results: [2]
})
// TypeError: [tcomb] Invalid value 2 supplied to Results/results: Array<String>/0: String
~~~

Libraries like [tcomb](https://github.com/gcanti/tcomb) and [typify](https://github.com/phadej/typify) check types on the client machine. As a proof of concept, I drafted a simple [example using the Elm Result (`Ok` and `Err`) concept with typify in JavaScript](https://gist.github.com/jcemer/f4bef63864f73307df44d3ddc2383214).

Now that you're aware of all of the problems and outcomes, **remember that you just need to cover all of the possible cases of your code scope (using any language or library) to avoid runtime execution errors**. Type annotation and runtime type checking are great allies that help with that task.

---

Thanks to [Ira Santiago](http://www.irasantiago.com/).
