/// <reference types="cypress" />


describe('Register', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  })

  it.only('Registro con email válido', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que el label de email se muestre correctamente
        cy.get(selectores.labelEmail)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        // Verifico que el input Email se muestre correctamente y este habilitado
        cy.get(selectores.inputEmail)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.emailvalido)
          .should("have.value", data.emailvalido)
          .blur()  //Quitamos el foco del input para que aparezca el tilde y el campo en en otro color
          .should("have.css", "color", "rgb(53, 179, 63)")
          .and("have.css", "background-color", "rgb(221, 249, 225)")
          .and("have.css", "background-image", 'url("http://automationpractice.com/themes/default-bootstrap/img/icon/form-ok.png")')
        // Verificar que el boton crear cuenta, exista, este visible y hacer click
        cy.get(selectores.createaccount)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        //Verificar el cambio de pagina a la siguiente de informacion personal
        ///cy.get(selectores.personalinformation)
        cy.get(selectores.yourinformation)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Your personal information")
      })
    })
  })
  it('Registro con email ya existente', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que el label de email se muestre correctamente
        cy.get(selectores.labelEmail)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        // Verifico que el input Email se muestre correctamente y este habilitado
        cy.get(selectores.inputEmail)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.emailinvalido)
          .blur()
        // Verificar que el boton crear cuenta, exista, este visible y hacer click
        cy.get(selectores.createaccount)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        cy.get(selectores.mensajeerror)
          .should("exist")
          .and("be.visible")
          .and("have.text", "An account using this email address has already been registered. Please enter a valid password or request a new one. ")

      })
    })
  })

 it('Registro con formato de email inválido', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que el label de email se muestre correctamente
        cy.get(selectores.labelEmail)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        // Verifico que el input Email se muestre correctamente y este habilitado
        cy.get(selectores.inputEmail)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.formemailinv)
          .should("have.value", data.formemailinv)
          .blur()  //Quitamos el foco del input para que aparezca el tilde y el campo en en otro color
        // Verificar que el boton crear cuenta, exista, este visible y hacer click
        cy.get(selectores.createaccount)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        // Verificar mensaje de error
        cy.get(selectores.mensginvemail)
        .should("exist")
        .and("be.visible")
        .and("have.text", "Invalid email address.")
        
      })
    })
  })

})


