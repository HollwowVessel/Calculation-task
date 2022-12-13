describe('checkHistory', () => {
  it('checkHistory', () => {
    cy.visit('http://localhost:3000/Settings');
    cy.get('button[id="history-clear"]').click();
    cy.visit('http://localhost:3000');
    cy.get('input[value="3"]').click();
    cy.get('input[value="/"]').click();
    cy.get('input[value="2"]').click();
    cy.get('input[value="="]').click();
    cy.get('div[id="expression"]');
    cy.get('button[id="show-history"]').click();

    cy.get('ul[id="history"]').should('have.text', '3 / 2 = 1.5');
  }),
    it('checkHistoryWithTwo', () => {
      cy.visit('http://localhost:3000/Settings');
      cy.get('button[id="history-clear"]').click();
      cy.visit('http://localhost:3000');
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();

      cy.get('input[value="C"]').click();

      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();

      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]');
      cy.get('button[id="show-history"]').click();

      cy.get('ul[id="history"]').should('have.text', '3 / 2 = 1.53 / 2 = 1.5');
    }),
    it('checkHistory', () => {
      cy.visit('http://localhost:3000/Settings');
      cy.get('button[id="history-clear"]').click();
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]');
      cy.get('button[id="show-history"]').click();

      cy.get('ul[id="history"]').should('have.text', '3 / 2 = 1.5');
    }),
    it('checkHistoryWithTwo', () => {
      cy.visit('http://localhost:3000/Settings');
      cy.get('button[id="history-clear"]').click();
      cy.visit('http://localhost:3000/Class');
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();

      cy.get('input[value="C"]').click();

      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();

      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]');
      cy.get('button[id="show-history"]').click();

      cy.get('ul[id="history"]').should('have.text', '3 / 2 = 1.53 / 2 = 1.5');
    });
});
