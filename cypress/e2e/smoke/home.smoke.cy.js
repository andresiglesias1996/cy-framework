import { HomePage } from '../../pages/HomePage';

describe('Home Page - Smoke @smoke', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('@smoke loads the homepage', () => {
    homePage.goto();
    homePage.assertPageLoaded();
  });

  it('@smoke page title is correct', () => {
    homePage.goto();
    cy.assertPageTitle('Cypress');
  });
});