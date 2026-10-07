import { HomePage } from '../../pages/HomePage';
import { allure } from 'allure-cypress';

describe('Home Page - Smoke @smoke', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
    allure.suite('Smoke Tests');
    allure.feature('Homepage');
  });

  it('@smoke loads the homepage', () => {
    allure.story('Page load');
    allure.description('Verifies that the homepage loads correctly');

    homePage.goto();
    homePage.assertPageLoaded();
  });

  it('@smoke page title is correct', () => {
    allure.story('Page title');

    homePage.goto();
    cy.assertPageTitle('Cypress');
  });
});
