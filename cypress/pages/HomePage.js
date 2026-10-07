import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor() {
    super();
    this.url = '/';
  }

  goto() {
    this.visit(this.url);
  }

  getQueryInput() {
    return cy.get('.action-email');
  }

  getSubmitButton() {
    return cy.get('[type="submit"]');
  }

  assertPageLoaded() {
    cy.url().should('include', 'cypress.io');
    cy.get('h1').should('be.visible');
  }
}
