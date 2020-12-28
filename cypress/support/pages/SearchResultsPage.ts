import BasePage from "./BasePage";

export default class SearchResultsPage extends BasePage {

    public getCurrentPaginatorPageNumberButton(): Cypress.Chainable {
        this.scrollSlowlyToBottom();
        
        return cy.get(this.selectors.PAGINATOR_CURRENT_PAGE_BUTTON);
    }

    public getNavBreadCrumb(): Cypress.Chainable {
        return cy.get(this.selectors.NAV_BREADCRUMB);
    }

    public getPaginatorNextButton(): Cypress.Chainable {
        return cy.get(this.selectors.PAGINATOR_NEXT_BUTTON)
    }

    public getProductItem(index: number): Cypress.Chainable {
        return cy.get(this.selectors.PRODUCT_ITEM.replace('{}', index - 1)).scrollIntoView();
    }

    public getProductItemLink(index: number): Cypress.Chainable {
        return cy.get(this.selectors.PRODUCT_ITEM_LINK).scrollIntoView();
    }
}
