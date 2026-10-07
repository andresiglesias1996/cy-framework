import { HomePage } from '../../pages/HomePage';

describe('Navigation - Regression @regression', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('@regression homepage has expected title', () => {
    homePage.goto();
    cy.title().should('contain', 'Cypress');
  });

  it('@regression form submission works', () => {
    cy.visit('/commands/actions');
    cy.get('.action-email').type('test@example.com');
    cy.get('.action-email').should('have.value', 'test@example.com');
  });
});