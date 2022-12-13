describe('checkKeyboard', () => {
  it('checkNumericValues', () => {
    cy.visit('http://localhost:3000');
    cy.visit('http://localhost:3000/Settings');
    cy.visit('http://localhost:3000/Class');
    cy.visit('http://localhost:3000');
    cy.url().should('eq', 'http://localhost:3000/');
  }),
    it('checkNumericValues', () => {
      cy.visit('http://localhost:3000/Class');
      cy.visit('http://localhost:3000/Settings');
      cy.visit('http://localhost:3000/');
      cy.visit('http://localhost:3000/Class');
      cy.url().should('eq', 'http://localhost:3000/Class');
    });
});
