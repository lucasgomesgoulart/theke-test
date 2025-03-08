import expectedResponses from './expectedResponses'

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
      expect(response.body).to.deep.eq(expectedResponses[expectedStatus])
    });
  }
  
  if (expectedStatus === 400) {

    cy.request({
      method: 'PUT',
      headers:{
        'x-API-key': Cypress.env('X-API-KEY')
      },
      url: `http://localhost:8080/cobv/${txid}`,
      body: payload,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(expectedStatus)
      expect(response.body).to.deep.eq(expectedResponses[expectedStatus])
    });
  }

  if (expectedStatus === 403) {
    cy.request({
      method: 'PUT',
      url: `http://localhost:8080/cobv/${txid}`,
      body: payload,
      failOnStatusCode: false

    }).then((response) => {
      expect(response.status).to.eq(expectedStatus)
      expect(response.body).to.deep.eq(expectedResponses[expectedStatus])
    });
  }
  
});


