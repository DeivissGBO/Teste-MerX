// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, pass)=>{
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type(user);

    cy.get('.sc-psfJB > .MuiButtonBase-root').click();

    cy.get(':nth-child(3) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type(pass);

    cy.contains('Entrar').click();
});


Cypress.Commands.add('acessaMenu', (menu, submenu)=>{
    cy.get(menu).click();
    cy.get(submenu).click();
});

Cypress.Commands.add('selecionaOpcao', (input, opcao)=>{
    cy.get(input).click();
    cy.get(opcao).click();
});

Cypress.Commands.add('typeText', (input, text)=>{
    cy.get(input)
    .type(text)
});

Cypress.Commands.add('selecionaDataInicial',()=>{
    cy.get(':nth-child(2) > [style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .click();

      cy.get('.MuiPickersCalendarHeader-switchHeader > [tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root')
      .click();

      cy.get(':nth-child(3) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').last().click();

      cy.get('.MuiDialogActions-root > :nth-child(2)').click();
});


Cypress.Commands.add('selecionaDataFinal',()=>{
    cy.get(':nth-child(3) > [style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .click();

      cy.get('.MuiPickersCalendarHeader-switchHeader > [tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root')
      .dblclick();

      cy.get(':nth-child(3) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').last().click();

      cy.get('.MuiDialogActions-root > :nth-child(2)').click();

});

Cypress.Commands.add('selecionaDataPagamento', ()=>{
    cy.get('[style="margin-top: 10px; margin-bottom: 8px; width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .click();
    
    cy.get('.MuiPickersCalendarHeader-switchHeader > [tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root')
    .click();

    cy.get(':nth-child(3) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').last().click();

    cy.get('.MuiDialogActions-root > :nth-child(2)').click();
});

Cypress.Commands.add('selecionaDataExpiracao', ()=>{
    cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .click();

      cy.get('.MuiPickersCalendarHeader-switchHeader > [tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root')
      .dblclick();

      cy.get(':nth-child(3) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').last().click();

      cy.get('.MuiDialogActions-root > :nth-child(2)').click();
});

Cypress.Commands.add('selecionaHora', ()=>{
    cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .click();
    cy.get('.MuiDialogActions-root > :nth-child(2)').click();
});

Cypress.Commands.add('checkmsg', (msg)=>{
    cy.get('#notistack-snackbar').contains(msg);
});

Cypress.Commands.add('fluxo', (tipo, produto, temFrete, temdataIniFim)=>{
 //Acessa menu
 cy.acessaMenu('.sc-fzoyTs', '.MuiList-root > :nth-child(2)');

 //Nova Oferta
 cy.get('.MuiButton-contained').click();

 //selecionaTipo
 cy.selecionaOpcao('#mui-component-select-type', tipo);

 //selecionaProduto Soja
 cy.selecionaOpcao('#mui-component-select-product_id','.MuiList-root > [tabindex='+produto+']');

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

 if(temdataIniFim){//seleciona periodo inicial de entrega
    cy.selecionaDataInicial();
    
    //seleciona periodo final de entrega
    cy.selecionaDataFinal();
}else
 

//seleciona data pagamento
cy.selecionaDataPagamento();

//Tipo pagamento
cy.selecionaOpcao('#mui-component-select-payment_type', '[data-value="TROCA"]' )

//seleciona modalidade frete
if(temFrete){
    cy.selecionaOpcao('#mui-component-select-shipping', '.MuiList-root > :nth-child(2)');
}else

//seleciona unidade
cy.selecionaOpcao('#mui-component-select-delivery_place', '.MuiList-root > [tabindex="-1"]')

//data expira
cy.selecionaDataExpiracao();

//seleciona hora
cy.selecionaHora();

//Descricao
cy.get('[name="description"]')
.last()
.type('Essa é a descrição')

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
cy.wait(500)
//check msg
cy.checkmsg('Oferta enviada com sucesso!');
  


})