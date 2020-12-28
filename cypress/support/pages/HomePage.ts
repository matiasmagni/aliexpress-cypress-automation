import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    /**
     * Navigates to this page object's URL.
     * 
     * @param timeout in seconds.
     */
    public navigateToThisPage(timeout: number = 10) {
        // Workaround for command timeout on first load.
        cy.visit(this.getUrl(), {
            timeout: timeout * 1000,
            onBeforeLoad: win => {
                win.sessionStorage.clear();
            }
        });
    }

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
