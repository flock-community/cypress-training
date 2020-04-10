describe("The Home Page", () => {
  it("successfully loads", () => {
    // TODO: implement me!
    cy.visit("example.cypress.io");
    cy.get("html");
    cy.get(".container");
    cy.get("h1").contains("Kitchen Sink");
  });
});
