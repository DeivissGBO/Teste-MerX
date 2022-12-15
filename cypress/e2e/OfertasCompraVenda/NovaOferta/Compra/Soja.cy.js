

describe('Compra de soja ', ()=>{
  
 
    
    beforeEach(() => {
        cy.visit(Cypress.env('base_url'))
    });

      it('Oferta Confirmada - CIF', () => {
        //realiza login
        cy.login(Cypress.env('user'), Cypress.env('pass'));

        //Acessa menu
       cy.acessaMenu('.sc-fzoyTs', '.MuiList-root > :nth-child(2)');

       //Nova Oferta
       cy.get('.MuiButton-contained').click();

       //selecionaTipo
       cy.selecionaOpcao('#mui-component-select-type', '[data-value="COMPRA"]');

       //selecionaProduto Soja
       cy.selecionaOpcao('#mui-component-select-product_id','.MuiList-root > [tabindex="0"]');

       //selecionaModalidade balcao
       cy.selecionaOpcao('#mui-component-select-modality_id', '[data-value="0e3f84c8-7f87-478c-be6b-638d14f60fae"]');

       //preenche Preço
       cy.get(':nth-child(3) > :nth-child(1) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
       .type(500);
       
       //seleciona moeda real
       cy.selecionaOpcao('#mui-component-select-currency_id', '.MuiList-root > [tabindex="0"]');

       //seleciona opcao Por
       cy.selecionaOpcao('#mui-component-select-unit_of_measurement_id','.MuiList-root > [tabindex="0"]');

       //seleciona valor min
       cy.typeText(':nth-child(4) > :nth-child(1) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input', '500')
      
       //seleciona valor max
       cy.typeText(':nth-child(2) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input', '500');

       //seleciona safra
       cy.selecionaOpcao('#mui-component-select-harvest_id', '[data-value="fc04585c-f23c-451c-8a22-c7b36aab886f"]');

       //seleciona periodo inicial de entrega
      cy.selecionaDataInicial();

      //seleciona periodo final de entrega
      cy.selecionaDataFinal();

      //seleciona data pagamento
      cy.selecionaDataPagamento();

      //Tipo pagamento
      cy.selecionaOpcao('#mui-component-select-payment_type', '[data-value="TROCA"]' )

      //seleciona modalidade frete
      cy.selecionaOpcao('#mui-component-select-shipping', '.MuiList-root > :nth-child(2)');

      //seleciona unidade
      cy.selecionaOpcao('#mui-component-select-delivery_place', '.MuiList-root > [tabindex="-1"]')

      //data expira
      cy.selecionaDataExpiracao();

      //seleciona hora
      cy.selecionaHora();

      //Descricao
      cy.typeText(':nth-child(10) > .MuiGrid-root > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root', 'Essa é a descrição')

      //criar
      cy.contains('Criar').click();

      //check msg
      cy.checkmsg('Oferta criada com sucesso!');

      //selecina carteira
      cy.selecionaOpcao('#mui-component-select-state', '[data-value="160c1fdd-f13b-4f37-b45d-de8a61631435"]')
      cy.wait(500)
      cy.get('.MuiList-root > :nth-child(2)').click();

      //enviar
      cy.get('[title="Enviar"]').click();
      cy.get('.MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click();

      //oferta confirmada
      cy.get('[flexdirection="column"] > :nth-child(2) > .MuiButtonBase-root').click();

      //check msg
      cy.checkmsg('Oferta enviada com sucesso!');
        
      });


    
});

