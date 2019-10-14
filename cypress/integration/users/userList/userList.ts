import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { userList, userListUsername } from '../../common/testLocators';

When('I Navigate to the users list page', () => {
  // do nothing - we're on it, but we could navigated the user to the app here
});

Then('I can see a list of the users in alphabetical order', () => {
  cy.wait('@fetchUsersCheck')
    .get(`[data-e2e=${userList}]`)
    .should('have.length', 100)
    .first()
    .then(el$ =>
      cy
        .wrap(el$)
        .find(`[data-e2e=${userListUsername}]`)
        .should('contain.text', 'Aida.Senger')
    );
});
