describe("Open office", () => {
  it("has a search button", () => {
    cy.visit("https://www.openoffice.org/");
    cy.get("#selectlanguage").select("Deutsch (de)");
    cy.get(".topsrchbutton").should("contain", "suchen");
  });
});
