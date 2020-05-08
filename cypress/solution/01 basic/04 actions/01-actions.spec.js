describe("Coupon code", () => {
  it("accepts a coupon code", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get("#couponCode1").type("some code");
    cy.get('button[type="submit"]').click();
  });
});
