describe("The Home Page", () => {
    it("successfully loads", () => {
        cy.visit('https://www.openoffice.org/')
        cy.get('#selectlanguage').select('Deutsch (de)')
        cy.get('.topsrchbutton').should('contain', 'suchen')
    });
});
