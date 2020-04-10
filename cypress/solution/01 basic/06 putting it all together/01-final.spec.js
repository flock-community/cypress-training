describe("The Home Page", () => {
    it("successfully loads", () => {
        cy.visit("https://www.ecosia.org")
        cy.get('input').type("flock community")
        cy.get('.button-submit').click()
        // alternative
        // cy.get('form').submit()
        cy.contains('.result-url', 'www.flock.community')
    });
});
