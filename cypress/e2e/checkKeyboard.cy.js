describe('checkKeyboard', () => {
  it('checkNumericValues', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[value="1"]').click();
    cy.get('input[value="2"]').click();
    cy.get('input[value="3"]').click();
    cy.get('input[value="4"]').click();
    cy.get('input[value="5"]').click();
    cy.get('input[value="6"]').click();
    cy.get('input[value="7"]').click();
    cy.get('input[value="8"]').click();
    cy.get('input[value="9"]').click();
    cy.get('input[value="0"]').click();
    cy.get('div[id="expression"]').should('have.text', '1234567890');
  }),
    it('checkDelExpression', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="1"]').click();
      cy.get('input[value="CE"]').click();
      cy.get('div[id="expression"]').should('have.text', '0');
    }),
    it('checkDots', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="1"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="."]').click();
      cy.get('div[id="expression"]').should('have.text', '1.');
    }),
    it('checkSignChange', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="1"]').click();
      cy.get('input[value="+/-"]').click();
      cy.get('div[id="expression"]').should('have.text', '-1');
    }),
    it('checkDel', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="1"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="1"]').click();
      cy.get('input[value="C"]').click();
      cy.get('div[id="expression"]').should('have.text', '0');
      cy.get('div[id="number"]').should('have.text', '0 ');
    }),
    it('checkNumericValues', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="1"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="3"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="5"]').click();
      cy.get('input[value="6"]').click();
      cy.get('input[value="7"]').click();
      cy.get('input[value="8"]').click();
      cy.get('input[value="9"]').click();
      cy.get('input[value="0"]').click();
      cy.get('div[id="expression"]').should('have.text', '1234567890');
    }),
    it('checkDelExpression', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="1"]').click();
      cy.get('input[value="CE"]').click();
      cy.get('div[id="expression"]').should('have.text', '0');
    }),
    it('checkDots', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="1"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="."]').click();
      cy.get('div[id="expression"]').should('have.text', '1.');
    }),
    it('checkSignChange', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="1"]').click();
      cy.get('input[value="+/-"]').click();
      cy.get('div[id="expression"]').should('have.text', '-1');
    }),
    it('checkDelExpression', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="1"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="1"]').click();
      cy.get('input[value="C"]').click();
      cy.get('div[id="expression"]').should('have.text', '0');
      cy.get('div[id="number"]').should('have.text', '0 ');
    });
});
