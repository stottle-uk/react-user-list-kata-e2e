
Feature: User Profile

  Scenario: Show user profile, update first name and save
    Given I am an unauthenticated user
    And I Navigate to the users list page
    When I select the first user in the list
    And I update the first name to a new valid value and save
    Then Network request to update user is made
    And I cannot see the user profile form


