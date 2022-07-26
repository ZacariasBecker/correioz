# Correioz  :package:

Interface web para o monitoramento de encomendas dos correios.

## Objetivo

Essa aplicação não tem como objetivo ser um produto final, ele foi desenvolvido com o intuito de praticar novas tecnologias que estou atualmente estudando como o TypeScrip e Redux dentro do React.

## API

Essa aplicação utiliza uma api externa para realizar a requisição dos dados das encomendas. E devido ao mecanismo de segurança, é provável que você receba um alerta informando que você está realizando muitas requisições ao tentar cadastrar uma nova encomenda, se isso acontecer basta tentar adicionar novamente a encomenda.
Para saber mais sobre a api [clique aqui][LinkeTrack].

## Persistência dos dados

Essa aplicação não possui nenhum tipo de persistência de dados implementado, fazendo com que o reload da página resete todas as encomendas já cadastradas.

## Futuras possíveis atualizações
Sem data definida, pretendo futuramente implementar algumas funcionalidades, como:
- Botão de Reload, para recarregar os dados de encomenda.
- Interruptor para modo escuro.
- Persistência resistente a recarregamento de página.
- Criação de um backend para servir dados para essa interface.
- Persistência de dados em Local Storage.

## Executar aplicação

Para executar a aplicação basta clonar este repositório, e executar os seguintes comandos:

**Com yarn:**
`yarn`
e depois:
`yarn start`

**Com npm:**
`npm i`
e depois:
`npm start`

## Sobre
### Autor:
Zacarias Becker
### License:
MIT

[LinkeTrack]: https://github.com/chipytux/correiosApi "clique aqui"
