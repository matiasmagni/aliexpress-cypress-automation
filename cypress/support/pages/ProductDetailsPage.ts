import BasePage from "./BasePage";

export default class ProductDetailsPage extends BasePage {

    public getAvailableItemsNumber(): Cypress.Chainable {
        this.scrollSlowlyToBottom();
        this.scrollSlowlyToTop();
        
        return cy.get(this.selectors.AVAILABLE_ITEMS);
    }
}
