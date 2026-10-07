import { HomePage } from '../../pages/HomePage';

describe('Navigation - Regression @regression', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('@regression navigates to commands page', () => {
    homePage.goto();
    cy.contains('Commands').click();
    cy.url().should('include', '/commands');
  });

  it('@regression form submission works', () => {
    cy.visit('/commands/actions');
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });
});