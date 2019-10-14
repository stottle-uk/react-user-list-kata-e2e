import { Given } from 'cypress-cucumber-preprocessor/steps';

// Given

Given('I am an unauthenticated user', () => {
  cy.init();
});
