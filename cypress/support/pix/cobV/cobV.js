Cypress.Commands.add('cobVPix', (expectedStatus, payload, txid) => {
  if (expectedStatus === 201) {
    cy.request({
      method: 'PUT',
      url: `http://localhost:8080/cobv/${txid}`,
      headers: {
        'X-API-KEY': Cypress.env('X-API-KEY')
      },
      body: payload,
      failOnStatusCode: false
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(expectedStatus);

      expect(response.body.calendario.criacao).to.eq("2020-09-09T20:15:00.358Z");
      expect(response.body.calendario.dataDeVencimento).to.eq("2020-12-31");
      expect(response.body.calendario.validadeAposVencimento).to.eq(30);
      expect(response.body.txid).to.eq("7978c0c97ea847e78e8849634473c1f1");
      expect(response.body.revisao).to.eq(0);
      expect(response.body.loc.id).to.eq(789);
      expect(response.body.loc.location).to.eq("pix.example.com/qr/c2/cobv/9d36b84fc70b478fb95c12729b90ca25");
      expect(response.body.loc.tipoCob).to.eq("cobv");
      expect(response.body.status).to.eq("ATIVA");
      expect(response.body.devedor.logradouro).to.eq("Alameda Souza, Numero 80, Bairro Braz");
      expect(response.body.devedor.cidade).to.eq("Recife");
      expect(response.body.devedor.uf).to.eq("PE");
      expect(response.body.devedor.cep).to.eq("70011750");
      expect(response.body.devedor.cpf).to.eq("12345678909");
      expect(response.body.devedor.nome).to.eq("Francisco da Silva");
      expect(response.body.recebedor.logradouro).to.eq("Rua 15 Numero 1200, Bairro São Luiz");
      expect(response.body.recebedor.cidade).to.eq("São Paulo");
      expect(response.body.recebedor.uf).to.eq("SP");
      expect(response.body.recebedor.cep).to.eq("70800100");
      expect(response.body.recebedor.cnpj).to.eq("56989000019533");
      expect(response.body.recebedor.nome).to.eq("Empresa de Logística SA");
      expect(response.body.valor.original).to.eq("123.45");
      expect(response.body.valor.multa.modalidade).to.eq(2);
      expect(response.body.valor.multa.valorPerc).to.eq("15.00");
      expect(response.body.valor.juros.modalidade).to.eq(2);
      expect(response.body.valor.juros.valorPerc).to.eq("2.00");
      expect(response.body.chave).to.eq("5f84a4c5-c5cb-4599-9f13-7eb4d419dacc");
      expect(response.body.solicitacaoPagador).to.eq("Cobrança dos serviços prestados.");

    });
  }
});
