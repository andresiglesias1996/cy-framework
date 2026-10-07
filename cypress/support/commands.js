// Custom command: login
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=password]').type(password);
    cy.get('[data-cy=submit]').click();
  });
});

// Custom command: assertPageTitle
Cypress.Commands.add('assertPageTitle', (expectedTitle) => {
  cy.title().should('include', expectedTitle);
});

// Custom command: getByDataCy
Cypress.Commands.add('getByDataCy', (selector) => {
  return cy.get(`[data-cy="${selector}"]`);
});
