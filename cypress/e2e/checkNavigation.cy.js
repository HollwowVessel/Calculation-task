describe("checkKeyboard", () => {
  it("checkNumericValues", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/Class"]').click();
    cy.get('a[href="/"]').click();
    cy.get('a[href="/Settings"]').click();
    cy.get('a[href="/"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  }),
    it("checkNumericValues", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('a[href="/"]').click();
      cy.get('a[href="/Settings"]').click();
      cy.get('a[href="/Class"]').click();
      cy.get('a[href="/"]').click();
      cy.get('a[href="/"]').click();
      cy.get('a[href="/Class"]').click();
      cy.url().should("eq", "http://localhost:3000/Class");
    });
});
