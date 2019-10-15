import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { userList, userListUsername } from '../../common/testLocators';

const byUsername = (a: any, b: any) => {
  if (a.username < b.username) {
    return -1;
  }
  if (a.username > b.username) {
    return 1;
  }
  return 0;
};

When('I Navigate to the users list page', () => {
  // do nothing - we're on it, but we could navigated the user to the app here
});

Then('I can see a list of the users in alphabetical order', () => {
  cy.wait('@fetchUsersCheck').then(xhr => {
    const data = xhr.response.body as any[];
    const firstUserAlpha = data.sort(byUsername)[0];
    cy.get(`[data-e2e=${userList}]`)
      .should('have.length', data.length)
      .first()
      .then(el$ =>
        cy
          .wrap(el$)
          .find(`[data-e2e=${userListUsername}]`)
          .should('contain.text', firstUserAlpha.username)
      );
  });
});
