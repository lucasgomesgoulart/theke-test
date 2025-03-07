import payload from '../../support/pix/cobV/payload.json'

describe('Cobranca PIX com vencimento', () => {
    it('Deve criar uma cobrança com sucesso', () => {
        //expectedStatus, payload, txid
        cy.cobVPix(201, payload, 1)
        // cy.cobVPix(403, payload, 1)
    })

    it('Deve retornar erro de autneticação', () => {
        
    })
})
