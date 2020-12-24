/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../pages/HomePage';
import ProductDetailsPage from "../pages/ProductDetailsPage";
import SearchResultsPage from "../pages/SearchResultsPage";

Given(`the customer has navigated to AliExpress home page`, () => {
  const page = new HomePage();
  page.navigateToThisPage();
});

When(`the customer searches for {string} on AliExpress searchbox`, (searchText: string) => {
  const page = new HomePage();
  page.getSearchField().should('be.visible');
  page.searchFor(searchText);
  localStorage.setItem('searchText', searchText);
});

Then(`AliExpress {int}° results page is correctly displayed`, (pageNumber: number) => {
  const page = new SearchResultsPage();
  page.getNavBreadCrumb()
    .should('contain', localStorage.getItem('searchText'))
    .should('contain', 'Results');
  page.getCurrentPaginatorPageNumberButton().should('have.text', pageNumber);
});

When(`the customer clicks on {string} button at AliExpress results page paginator`, (buttonText: string) => {
  const page = new SearchResultsPage();
  page.getPaginatorNextButton()
    .should('be.visible')
    .should('have.text', buttonText)
    .click();
});


Then(`a {int}° ad is displayed at AliExpress {int}° results page`, (adNumber: number, pageNumber: number) => {
  const page = new SearchResultsPage();
  page.getProductItem(adNumber).should('be.visible');
});


When(`the customer clicks on {int}° ad's details link`, (adNumber: number) => {
  const page = new SearchResultsPage();
  // page.getProductItem(adNumber).click();
  page.getProductItemLink(adNumber)
    .should('have.attr', 'href')
    .and('include', 'item')
    .then((url: string) => {
      cy.visit('https:' + url.split('?')[0]);
    });
});


Then(`the ad has at least {int} item to be bought`, (expectedItemsNum: number) => {
  const page = new ProductDetailsPage();
  page.getAvailableItemsNumber()
    .invoke('text')
    .then((text: string) => {
      let observedItemsNum = Number.parseInt(text.split(' ')[0]);
      expect(observedItemsNum).to.greaterThan(expectedItemsNum);
    });
});

