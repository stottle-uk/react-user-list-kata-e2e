
Feature: User List

  Scenario: Fetch and display user list
    Given I am an unauthenticated user
    When Navigate to the users list page
    Then I can see a list of the users in alphabetical order


