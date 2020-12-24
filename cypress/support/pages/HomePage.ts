import BasePage from "./BasePage";


const URL = 'https://www.aliexpress.com/';

export default class HomePage extends BasePage {
    
    private readonly SEARCH_FIELD = '#search-key';

    constructor() {
        super(URL);
    }

    public isSearchBoxVisible(): boolean {
        cy.get(this.SEARCH_FIELD).should('be.visible');

        return true;
    }

    public searchFor(text: string): void {
        cy.get(this.SEARCH_FIELD).type(text);
    }


}
