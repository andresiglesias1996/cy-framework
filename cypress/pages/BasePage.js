export class BasePage {
  visit(path = '') {
    cy.visit(path);
  }

  getTitle() {
    return cy.title();
  }

  getByDataCy(selector) {
    return cy.get(`[data-cy="${selector}"]`);
  }

  getByRole(role, options = {}) {
    return cy.get(`[role="${role}"]`, options);
  }
}
