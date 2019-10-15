# React User List Kata e2e Tests

clone repo and run `yarn` to install node modules.

Run `yarn cypress` to run the tests

## Some notes about testing

The API could return a 500 status response at random and cypress will only wait for the first response (not a valid response).
This means tests will occasionally fail as we have inconsistent behavior from the API and inconsistencies are not good when esting. Using cypress requires a predictable API so tests can be added for successful and failed response.
We could also mock the API response with cypress, but then it is not a true e2e test
