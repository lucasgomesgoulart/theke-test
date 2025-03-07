import responseExpected from '../cobV/responseExpected.json'

Cypress.Commands.add('cobVPix', (expectedStatus, payload, txid) => {
  if (expectedStatus === 201) {
    cy.request({
      method: 'PUT',
      url: `http://localhost:8080/cobv/${txid}`,
      headers: {
        'X-API-KEY': Cypress.env('X-API-KEY')
      },
      body: payload,
    }).then((response) => {
      expect(response.status).to.eq(expectedStatus)
      expect(response.body).to.deep.eq(responseExpected)
    });
  }

  if (expectedStatus === 403) {

    const payloadWithNoToken = 
    cy.request({
      method: 'PUT',
      url: `http://localhost:8080/cobv/${txid}`,
      headers: {
        'X-API-KEY': Cypress.env('X-API-KEY')
      },
      body: payload,
    }).then((response) => {
      expect(response.status).to.eq(expectedStatus)
      expect(response.body).to.deep.eq(responseExpected)
    });
  }
});
