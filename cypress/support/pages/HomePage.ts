import BasePage from "./BasePage";

export default class HomePage extends BasePage {

    public getSearchField(): Cypress.Chainable {
        return cy.get(this.selectors.SEARCH_FIELD);
    }

    public getSearchButton(): Cypress.Chainable {
        return cy.get(this.selectors.SEARCH_BUTTON);
    }

    public searchFor(text: string): void {
        this.getSearchField().type(text);
        this.getSearchButton().click();
    }
}
