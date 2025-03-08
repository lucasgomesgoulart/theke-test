# Projeto de Automação de Testes de API - Cobrança PIX com Vencimento

Este repositório contém a automação de testes para a API de Cobrança PIX com vencimento, conforme definido no Swagger. O projeto utiliza Cypress para execução dos testes e WireMock rodando em um container Docker para simular a API.

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

### Instalar Dependências
- Abra o terminal na raiz do projeto.

- Execute o comando: `npm install`

Isso instalará todas as dependências necessárias para o projeto.


### Configurar as Variáveis de Ambiente

- Crie um arquivo `cypress.env.json` na raiz do projeto baseado no exemplo `cypress.env.json.example`.
- Defina a variável necessária, por exemplo: 
```
{ 
  "X-API-KEY": "f47ac10b-58cc-4372-a567-0e02b2c3d479" 
}
```
### Iniciar o Mock Server com Docker

O projeto utiliza WireMock para simular a API. Para iniciar o WireMock via Docker:

- Abra o terminal na raiz do projeto.
- Execute o comando: `docker compose up`
- Esse comando iniciará o container do WireMock e montará a pasta `./mappings` no container para carregar os stubs configurados.

- Verifique se o container está rodando e ouvindo na porta configurada (por padrão, 8080).

### Executar os Testes com Cypress

Você tem duas opções para executar os testes:

#### a) Modo Headless (Cypress Run)

No terminal, digite: `npx cypress run`
- Isso irá rodar todos os testes em modo headless.

#### b) Modo Interativo (Cypress Open)

No terminal, digite: `npx cypress open`
- Depois de abrir o Test Runner, selecione o(s) arquivo(s) de teste que deseja executar.
