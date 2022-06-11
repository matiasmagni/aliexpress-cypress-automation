/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Register', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
  
    it('Inicio de sesión con datos válidos', () => {
      cy.fixture("Selectors/form").then((selectores) => {
        cy.fixture("Data/datos").then((data) => {
          // Verifico que este en la pagina de registro
         cy.Verificar_labels(selectores.labelloginpanel, selectores.labellogintext)
         // Verifco que exista el campo username y escribo el usuario y lo verifico
         cy.Inputtext(selectores.campousername, data.username, data.username)
         // Verifico que exista el campo password y escribo la password y la verifico
         cy.Inputtext(selectores.campopassword, data.password, data.password)
         // Verifico la existencia del boton y hago click
         cy.Click(selectores.botonlogin, selectores.botonlogintext)
         // Verificar inicio de sesion y cambio de pantalla
         cy.Verificar_labels(selectores.labelwelcome, selectores.labelwelcometext)
        })
    })
})
})