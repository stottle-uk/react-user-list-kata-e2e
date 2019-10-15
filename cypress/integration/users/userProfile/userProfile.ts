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
    const body = xhr.request.body as any;
    expect(body).to.deep.eq({
      ...body,
      firstName: 'new name'
    });
  });
});

And('I cannot see the user profile form', () => {
  cy.get(`[data-e2e=${userProfileForm}]`).should('not.be.visible');
});
