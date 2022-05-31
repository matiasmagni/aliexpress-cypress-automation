/// <reference types="cypress" />

describe('Registracion', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });

  it('El usuario se registra correctamente en el sitio ingresando datos validos.', () => {
    cy.fixture('selectors/registracion').then((selectores) => {
      cy.fixture('data/registracion').then((data) => {
        // Verifico que haya navegado a la pagina de Registracion
        cy.get(selectores.titulo)
          .should('exist')
          .and('be.visible')
          .and('have.text', 'Authentication');
        // Verifico que el label de Email se muestre correctamente
        cy.get(selectores.labelEmail)
          .should('exist')
          .and('be.visible')
          .and('have.text', 'Email address');
        // Verifico que el input de Email se muestre correctamente, que este habilitado, lleno el input
        // y verifico que cambie su CSS
        cy.get(selectores.inputEmail)
          .should('exist')
          .and('be.visible')
          .and('be.enabled')
          .type(data.emailValido)
          .should('have.value', data.emailValido)
          .blur() // Quitar el foco del input
          .should('have.css', 'color', 'rgb(53, 179, 63)')
          .and('have.css', 'background-color', 'rgb(221, 249, 225)')
          .and(
            'have.css',
            'background-image',
            'url("http://automationpractice.com/themes/default-bootstrap/img/icon/form-ok.png")'
          );
        // Verifico que el boton Create An Account se muestre correctamente, que este habilitado y le hago click
        cy.get(selectores.botonCreateAnAccount)
          .should('exist')
          .and('be.visible')
          .and('be.enabled')
          .click()
        // Verifico que haya cambiado el formulario y aparezca el nuevo que pide otros datos
        cy.log('formularioDatos', selectores.formularioDatos);
        cy.get(selectores.formularioDatos)
          .should('exist')
          .and('be.visible');
      });
    });
  });
});
