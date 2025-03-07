import payload from '../../support/pix/cobV/payload.json'

describe('Criação cobranca PIX com vencimento', () => {

    it('Deve criar uma cobrança com sucesso', () => {
        //expectedStatus, payload, txid
        cy.cobVPix(201, payload, 1)
    })
})