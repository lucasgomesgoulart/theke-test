import payload from '../../support/pix/cobV/payload.json'

describe('Cobranca PIX com vencimento', () => {
    it('Deve criar uma cobrança com sucesso (201)', () => {
        cy.cobVPix(201, payload, 1)
    })

    it('Deve retornar erro de payload inválido (400)', () => {
        const invalidPayload = { ...payload }
        invalidPayload.calendario.validadeAposVencimento = -5
        cy.cobVPix(400, invalidPayload, 1)
    })

    it('Deve retornar erro de autenticação (403)', () => {
        cy.cobVPix(403, payload, 1)
    })
})
