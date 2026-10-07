import { HomePage } from '../../pages/HomePage';
import { allure } from 'allure-cypress';

describe('Navigation - Regression @regression', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
    allure.suite('Regression Tests');
    allure.feature('Navigation');
  });

  it('@regression navigates to commands page', () => {
    allure.story('Commands page');
    allure.description('Verifies navigation to the Cypress commands page');

    homePage.goto();
    cy.contains('Commands').click();
    cy.url().should('include', '/commands');
  });

  it('@regression form submission works', () => {
    allure.story('Form interaction');

    cy.visit('/commands/actions');
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });
});
