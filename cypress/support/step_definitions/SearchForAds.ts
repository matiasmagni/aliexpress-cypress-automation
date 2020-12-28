/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../pages/HomePage';
import ProductDetailsPage from "../pages/ProductDetailsPage";
import SearchResultsPage from "../pages/SearchResultsPage";


Given(`the customer has navigated to AliExpress home page`, () => {
  const page = new HomePage();
  page.navigateToThisPage(60);
});

When(`the customer searches for {string} on AliExpress searchbox`, (searchText: string) => {
  const page = new HomePage();
  // Assert that search field is visible, empty and enabled to accept an input.
  page.getSearchField()
    .should('be.visible')
    .and('be.empty')
    .and('be.enabled');
  page.searchFor(searchText);
  // Save searched text to be used on next steps.
  localStorage.setItem('searchText', searchText);
});

Then(`AliExpress {int}° results page is correctly displayed`, (pageNumber: number) => {
  const page = new SearchResultsPage();
  // Assert that navigation breadcrumb contains the searched text and the word 'Results'.
  page.getNavBreadCrumb()
    .should('contain', localStorage.getItem('searchText'))
    .and('contain', 'Results');
  // Assert that the selected paginator's page number corresponds to the correct page number.
  page.getCurrentPaginatorPageNumberButton().should('have.text', pageNumber);
});

When(`the customer clicks on {string} button at AliExpress results page paginator`, (buttonText: string) => {
  const page = new SearchResultsPage();
  // Assert that paginator's next button is visible and has the correct text value and then click it.
  page.getPaginatorNextButton()
    .should('be.visible')
    .and('be.enabled')
    .and('have.text', buttonText)
    .click({ force: true });
});


Then(`a {int}° ad is correctly displayed at AliExpress {int}° results page`, (adNumber: number, pageNumber: number) => {
  const page = new SearchResultsPage();
  // Assert that the product item is visible on the search results.
  page.getProductItem(adNumber).should('be.visible');
  // Case insensitive pattern.
  const expectedSearchTextPattern = new RegExp(`${localStorage.getItem('searchText')}`, 'i');
  // Assert that the product item's title link contains the previously searched text. 
  page.getProductItemLink(adNumber).invoke('text').then((actualText) => {
    expect(actualText).to.match(expectedSearchTextPattern)
  });
});


When(`the customer clicks on {int}° ad's details link`, (adNumber: number) => {
  const page = new SearchResultsPage();
  // Assert that the product item's link is visible and have a valid URL to be clicked.
  page.getProductItemLink(adNumber)
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', new ProductDetailsPage().getUrl())
    .then((url: string) => {
      // Workaround for 'target="_blank"' links. More info on: https://docs.cypress.io/guides/references/trade-offs.html#Multiple-tabs
      // Mimic a click on product item's link by navigating to its URL.
      cy.visit('https:' + url.split('?')[0]);
    });
});


Then(`the ad has at least {int} item to be bought`, (expectedItemsNum: number) => {
  const page = new ProductDetailsPage();
  page.getAvailableItemsNumber()
    .invoke('text')
    .then((text: string) => {
      let actualItemsNum = Number.parseInt(text.split(' ')[0]);
      expect(actualItemsNum).to.greaterThan(expectedItemsNum);
    });
});
