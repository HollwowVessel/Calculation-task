describe('checkTheme', () => {
  it('testAllThemes', () => {
    cy.visit('http://localhost:3000/Settings');
    cy.get('select').select('light');
    cy.get('select').select('dark');
    cy.get('select').select('colored');
    cy.get('select').select('dark');
    cy.get('button').click();
  });
});
