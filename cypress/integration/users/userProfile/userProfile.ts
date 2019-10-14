import { And, When } from 'cypress-cucumber-preprocessor/steps';
import {
  formInputFirstName,
  userList,
  userListUsername,
  userProfileForm,
  userProfileSubmit
} from '../../common/testLocators';

And('I Navigate to the users list page', () => {
  // do nothing - we're on it, but we could navigate the user to the page here
});

When('I select the first user in the list', () => {
  cy.wait('@fetchUsersCheck')
    .get(`[data-e2e=${userList}]`)
    .first()
    .then(el$ =>
      cy
        .wrap(el$)
        .find(`[data-e2e=${userListUsername}]`)
        .click()
    );
});

And('I update the first name to a new valid value and save', () => {
  cy.get(`[data-e2e=${formInputFirstName}]`)
    .clear()
    .type('new name')
    .get(`[data-e2e=${userProfileSubmit}]`)
    .click();
});

And('Network request to update user is made', () => {
  cy.wait('@updateUserCheck').then(xhr => {
    expect(xhr.request.body).to.deep.eq({
      address: '6101 Morris Way',
      country: 'Germany',
      county: 'Borders',
      email: 'Guiseppe_OConner@gmail.com',
      firstName: 'new name',
      id: '4992ec65-cc4d-40ed-84fe-10fd21349d4b',
      lastName: 'Bergstrom',
      postcode: '12188',
      username: 'Aida.Senger'
    });
  });
});

And('I cannot see the user profile form', () => {
  cy.get(`[data-e2e=${userProfileForm}]`).should('not.be.visible');
});
