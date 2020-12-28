/**
 * BasePage class. All page objects must inherite from this class.
 */
export default abstract class BasePage {

    protected url: string = "";
    protected selectors: any = null;

    constructor() {
        this.selectors = require(`../../fixtures/selectors/${this.constructor.name}.json`);
        this.url = this.selectors.URL;
    }

    public getUrl(): string {
        return this.url;
    }

    /**
     * Navigates to this page object's URL.
     * 
     * @param timeout in seconds.
     */
    public navigateToThisPage(timeout: number = 10) {
        cy.visit(this.getUrl(), { timeout: timeout * 1000 });
    }

    protected scrollSlowlyToBottom() {
        cy.scrollTo('bottom', { duration: Cypress.env('timeouts').scroll });
    }

    protected scrollSlowlyToTop() {
        cy.scrollTo('top', { duration: Cypress.env('timeouts').scroll });
    }
}
