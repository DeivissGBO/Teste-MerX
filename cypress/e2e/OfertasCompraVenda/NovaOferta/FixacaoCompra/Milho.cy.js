describe('Fixacao Compora Milho',()=>{

    beforeEach(() => {
        cy.visit(Cypress.env('base_url'))
    });

    it('MILHO', () => {
        cy.login(Cypress.env('user'), Cypress.env('pass'));
        cy.wait(1000)

        cy.fluxo('[data-value="FIXACAO_VENDA"]', "-1", false, false);
        
    });

})