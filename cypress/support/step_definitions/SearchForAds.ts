/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../pages/HomePage';

Given(`the customer has navigated to AliExpress home page`, () => {
  const page = new HomePage();
  page.navigateToThisPage();
});

When(`the customer searches for {string} on AliExpress searchbox`, (searchText: string) => {
  const page = new HomePage();
  page.isSearchBoxVisible();
  page.searchFor(searchText);
});

Then(`AliExpress {int}° results page is displayed`, (pageNumber: Number) => {
  const page = new HomePage();
  page.isSearchBoxVisible();
});

When(`the customer clicks on {string} button at AliExpress results page paginator`, (buttonText) => {
	console.log(buttonText);
	return true;
});
