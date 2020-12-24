/**
 * BasePage class. All page objects must inherite from this class.
 */
export default abstract class BasePage {

    protected url: string = "";
    protected selectors: any = null;

    constructor() {
        this.selectors = require(`../../fixtures/selectors/${this.constructor.name}.json`);
        this.url = `${Cypress.env('baseUrl')}/${this.selectors.URL}`;
    }

    public getUrl(): string {
        return this.url;
    }

    public navigateToThisPage() {
        cy.visit(this.getUrl());
    }

    protected scrollSlowlyToBottom() {
        cy.scrollTo('bottom', { duration: Cypress.env('timeouts').scroll });
    }

    protected scrollSlowlyToTop() {
        cy.scrollTo('top', { duration: Cypress.env('timeouts').scroll });
    }
}
