---
layout: post
title: 'Conheça WebSockets: Entrevista'
tags:
  - HTML5
  - websockets
excerpt: "<p>Entrevista que aborda a especificação de WebSockets e em como esta pode ser usada para desenvolver jogos e outros aplicações. Originalmente publicada no blog da Conferência Web.br da W3C.</p>"
---

Esta entrevista foi originalmente publicada no blog do evento [Conferência Web.br](http://conferenciaweb.w3c.br) de 2013. Neste evento apresentei a palestra: [Protocolos de Comunicação e o desenvolvimento front-end](https://speakerdeck.com/jcemer/protocolos-de-comunicacao).

-----------

## Quais são as principais vantagens ao se fazer uso da especificação WebSockets na comunicação bidirecional entre navegadores e servidores?

O protocolo HTTP é o que guia atualmente a comunicação entre navegadores e servidores nas principais aplicações de internet. A questão é que o protocolo HTTP exige que uma requisição seja disparada da parte do navegador para que então se possa ter uma mensagem de resposta do servidor. Desta maneira, assim que o servidor envia uma resposta, uma nova mensagem só pode ser enviada após uma nova requisição por parte do navegador.

Este modelo funciona muito bem para a maioria dos websites que conhecemos e estamos acostumados a acessar. Requisitamos por conteúdos como textos e imagens e os recebemos assim que possível levando-se em conta o tempo de latência da conexão e a velocidade de download. O funcionamento é relativamente simples.

O cenário começa a mudar a partir do momento em que o servidor não tem disponível toda a informação que possa nos interessar em um dado instante. Diversas técnicas tentam mitigar este problema. A mais simples consiste em o navegador disparar uma série de requisições com o intuito de verificar se o servidor possui uma nova informação disponível.

Fazendo o uso da tecnologia de Websockets, que é uma extensão do protocolo HTTP, um canal de comunicação é estabelecido entre navegador e servidor. Assim, a troca de mensagens não fica condicionada a uma requisição da parte do navegador. Em outra palavras, durante o período de conexão, o servidor pode enviar quaisquer mensagens diretamente para o navegador e vice-e-versa.

## Como o Websockets pode ajudar na criação de jogos conectados (com multijogadores ou conectado a um servidor)?

Jogos multiplayer exigem uma quantidade enorme de troca de mensagens entre servidor e navegador para coordenar ações. Com o Websockets, esta troca de mensagens pode fluir de maneira livre e sem a necessidade do estabelecimento de diversas conexões.

No universo dos jogos em HTML5, Websockets são bastante significativos e necessários. Como exemplo, o Adobe Flash já possui uma implementação de Sockets – com a mesma utilidade dos Websockets – desde o Flash Player 9. Você já deve ter jogado em seu navegador com tecnologia de Sockets e nem ficou sabendo disso.

## Quais são as principais dificuldades enfrentadas para o uso pleno do protocolo WebSockets pelos desenvolvedores web?

Aplicações que utilizam Websockets são mais complexas para se desenvolver exigindo um melhor entendimento e planejamento. Ainda, apesar de o protocolo ser suportado na maioria dos navegadores modernos, o Internet Explorer só o faz a partir da versão 10.

## Que bibliotecas e ferramentas relevantes você recomenda para quem está implementando esta tecnologia?

Uma bliblioteca bastante conhecida é a [Socket.io](http://socket.io), que é normalmente utilizada em conjunto com [Node.js](http://nodejs.org). Seu funcionamento é baseado em entregar a melhor solução de conexão bidirecional possível respeitando as diferentes implementações de funcionalidades de cada navegador. Nestes casos, a primeira solução experimentada é a Websockets passando por técnicas de polling e até mesmo, caso seja configurada, fazendo uso de Flash Sockets.

Apesar de algumas linguagens que executam em servidor serem mais adequadas para aplicações que utilizam Websockets (Node.js, Elixir, entre outras) é possível encontrar ferramentas e bibliotecas para as mais diversas linguagens e necessidades.

## Você pode citar alguns usos interessantes que podem ser ou já são feitos utilizando-se a API de WebSockets?

Sempre que penso em Websockets o exemplo que me vêm a mente é o de uma aplicação lance a lance de uma partida de futebol. Outro exemplo interessante são os websites que fazem cobertura ao vivo do lançamento de novos gadgets. Também o painel de “real-time” do Google Analytics, que mostra quais os usuários que acessam meu site naquele instante. Ferramentas de edição colaborativa, como Google Docs, além dos jogos, claro.
