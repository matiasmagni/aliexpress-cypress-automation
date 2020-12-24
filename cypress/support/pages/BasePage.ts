
export default abstract class BasePage {
    
    constructor(private url: string) {
        this.url = url;
    }

    public getUrl(): string {
        return this.url;
    }

    public navigateToThisPage() {
        cy.visit(this.getUrl());
    }
}
