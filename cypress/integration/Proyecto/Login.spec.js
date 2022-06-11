/// <reference types="cypress" />


describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  })

  it('Inicio de sesión con datos válidos', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        //Verifico que exista el input del email, que este visible y habilitado
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.emailvalido)
          .and("have.value", "coquito@gmail.com")
        //Verifico que exista el label Password
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password")
        //Verifico que el input password exista, este habilitado y visible
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.passwordvalido)
          .and("have.value", "12345678")
        //Hacer click en el boton Sign in
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        // Verificar que estoy en mi cuenta
        cy.title().should("eq", selectores.titulomyaccount)
        cy.get(selectores.labelmyaccount)
          .should("exist")
          .and("be.visible")
          .and("have.text", "My account")
      })
    })
  })

  it('Inicio de sesión con formato de email inválido', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        //Verifico que exista el input del email, que este visible y habilitado - Ingreso email invalido
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.formemailinv)
          .blur()
          .and("have.value", "coco.com")
        //Hacer click en el boton Sign in
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
          //Mensaje de error email invalido
          cy.get(selectores.cartelemailinv)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Invalid email address.")

      })
    })
  })

  it('Inicio de sesion con email válido y campo password vacio', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        //Verifico que exista el input del email, que este visible y habilitado
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.emailvalido)
        //Verifico que exista el label Password
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password")
        //Verifico que el input password exista, este habilitado y visible
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
        // Hago click en el boton Sign in y verifico el mensaje de error
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        cy.get(selectores.cartelfaltapassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password is required.")
      })
    })
  })

  it('Inicio de sesion con password válido y campo email vacío', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        //Verifico que exista el input del email, que este visible y habilitado
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
        //Verifico que exista el label Password
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password")
        //Verifico que el input password exista, este habilitado y visible
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.passwordvalido)
        // Hago click en el boton Sign in y verifico el mensaje de error
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        cy.get(selectores.cartelfaltapassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "An email address required.")
      })
    })
  })

  it('Inicio de sesión con campo email y campo password vacíos', () => {
    cy.fixture("Selectors/registracion").then((selectores) => {
      cy.fixture("Data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.log("Verifico que este en la pagina de registro")
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication")
        // Verifico que exista el label Email address
        cy.log("Verifico que exista el label Email address")
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address")
        //Verifico que exista el input del email, que este visible y habilitado
        cy.log("Verifico que exista el input del email, que este visible y habilitado")
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
        //Verifico que exista el label Password
        cy.log("Verifico que exista el label Password")
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password")
        //Verifico que el input password exista, este habilitado y visible
        cy.log("Verifico que el input password exista, este habilitado y visible")
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
        // Hago click en el boton Sign in y verifico el mensaje de error
        cy.log("Hago click en el boton Sign in y verifico el mensaje de error")
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click()
        cy.get(selectores.cartelfaltapassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "An email address required.")
      })
    })
  })



})
