describe('checkArithmetical', () => {
  it('basicTestWithDivision', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[value="3"]').click();
    cy.get('input[value="/"]').click();
    cy.get('input[value="2"]').click();
    cy.get('input[value="="]').click();
    cy.get('div[id="expression"]').should('have.text', '1.5');
  }),
    it('testDivisionWithDecimals', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '0.12');
    }),
    it('basicMultiplicationTest', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="3"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '6');
    }),
    it('testMultiplicationWithDecimals', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '0.48');
    }),
    it('basicTestAddition', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="3"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '5');
    }),
    it('testAdditionWithDecimals', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '2.24');
    }),
    it('basicSubTest', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="3"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '1');
    }),
    it('testSubWithDecimals', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '-1.76');
    }),
    it('testBasicExpression', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '8');
    }),
    it('testTwoExpressions', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '16');
    }),
    it('testWithSecondValueAsExpression', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[value="2"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '8');
    }),
    it('basicTestWithDivision', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '1.5');
    }),
    it('testDivisionWithDecimals', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '0.12');
    }),
    it('basicMultiplicationTest', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="3"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '6');
    }),
    it('testMultiplicationWithDecimals', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '0.48');
    }),
    it('basicTestAddition', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="3"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '5');
    }),
    it('testAdditionWithDecimals', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '2.24');
    }),
    it('basicSubTest', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="3"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '1');
    }),
    it('testSubWithDecimals', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '-1.76');
    }),
    it('testBasicExpression', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '8');
    }),
    it('testTwoExpressions', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '16');
    }),
    it('testWithSecondValueAsExpression', () => {
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="2"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should('have.text', '8');
    });
});
