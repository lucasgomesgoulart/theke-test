// cypress/fixtures/expectedResponses.js

const expectedResponses = {
  "201": {
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "dataDeVencimento": "2020-12-31",
      "validadeAposVencimento": 30
    },
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "loc": {
      "id": 789,
      "location": "pix.example.com/qr/c2/cobv/9d36b84fc70b478fb95c12729b90ca25",
      "tipoCob": "cobv"
    },
    "status": "ATIVA",
    "devedor": {
      "email": "lucasgoulart@teste.com",
      "logradouro": "Rua teste",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "recebedor": {
      "logradouro": "Rua 15 Numero 1200, Bairro São Luiz",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "70800100",
      "cnpj": "56989000019533",
      "nome": "Empresa de Logística SA"
    },
    "valor": {
      "original": "123.45",
      "multa": {
        "modalidade": 2,
        "valorPerc": "15.00"
      },
      "juros": {
        "modalidade": 2,
        "valorPerc": "2.00"
      },
      "abatimento": {
        "modalidade": 1,
        "valorPerc": "0.00"
      },
      "desconto": {
        "modalidade": 1,
        "descontoDataFixa": [
          {
            "data": "2020-11-30",
            "valorPerc": "30.00"
          }
        ]
      }
    },
    "pixCopiaECola": "BR CODE EXEMPLO",
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "infoAdicionais": [
      {
        "nome": "Observação",
        "valor": "Pagamento via Pix com vencimento"
      }
    ]
  },
  "403": {
    "type": "https://pix.bcb.gov.br/api/v2/error/AcessoNegado",
    "title": "Acesso Negado",
    "status": 403,
    "detail": "Requisição de participante autenticado que viola alguma regra de autorização."
  },
  "400": {
    "type": "https://pix.bcb.gov.br/api/v2/error/CobVOperacaoInvalida",
    "title": "Cobrança inválida.",
    "status": 400,
    "detail": "A requisição que busca alterar ou criar uma cobrança com vencimento não respeita o _schema_ ou está semanticamente errada.",
    "violacoes": [
      {
        "razao": "O objeto cobv.devedor não respeita o _schema_.",
        "propriedade": "cobv.devedor"
      }
    ]
  }
};

export default expectedResponses;
