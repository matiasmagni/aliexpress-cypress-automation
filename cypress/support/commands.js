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

Cypress.Commands.add("Verificar_labels", (selector, texto) => {
    cy.get(selector)
        .should("exist")
        .and("be.visible")
        .and("have.text", texto)
})

Cypress.Commands.add("Inputtext", (selector, inputtext, textovalue) => {
    cy.get(selector)
        .should("exist")
        .and("be.visible")
        .and("be.enabled")
        .type(inputtext)
        .and("have.value", textovalue)
})

Cypress.Commands.add("Clickvalue", (selector,textovalue) => {
    cy.get(selector)
        .should("exist")
        .and("be.visible")
        .and("be.enabled")
        .and("have.value", textovalue)
        .click()
})

Cypress.Commands.add("Click", (selector) => {
    cy.get(selector)
        .should("exist")
        .and("be.visible")
        .and("be.enabled")
        .click()
})



