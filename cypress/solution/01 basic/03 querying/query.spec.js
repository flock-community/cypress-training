describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("example.cypress.io");
    cy.get("h2").contains("Commands");
  });
});
