/// <reference types="cypress" />
require('cypress-plugin-tab');
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://react-select.com/home')
  })

  it('Probando select react', () => {
    cy.get('#react-select-3-input').click({force:true})
    cy.contains("Yellow").click({force:true})
    cy.get("#react-select-5-input").click({force:true})
    cy.contains("Green").click({force:true})
    cy.get('#react-select-3-input').click({force:true}).type("Red{enter}")
    cy.get("#react-select-5-input").click({force:true}).type("Yellow{enter}")
    cy.get("#root > div > div.css-4fijr3 > div.css-1y3sizo > div > div > div:nth-child(31) > div.css-b62m3t-container").click()
    cy.get("#react-select-10-option-4").click()


    
   
    

  })
})