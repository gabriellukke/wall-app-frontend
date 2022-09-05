/// <reference types="cypress" />

import {
  REGISTER_FIRST_NAME_TEST_ID,
  REGISTER_LAST_NAME_TEST_ID,
  REGISTER_EMAIL_TEST_ID,
  REGISTER_PASSWORD_TEST_ID,
  REGISTER_CONFIRM_PASSWORD_TEST_ID,
  REGISTER_SUBMIT_TEST_ID,
  REGISTER_URL,
  REGISTER_ENDPOINT,
} from '../utils/constants';

describe('Register', () => {
  beforeEach(() => {
    cy.visit(REGISTER_URL);
  });

  it('should register a new user', () => {
    cy.intercept('POST', REGISTER_ENDPOINT, { statusCode: 200, fixture: 'register.json' }).as('register');

    cy.get(REGISTER_FIRST_NAME_TEST_ID).type('Pedro');
    cy.get(REGISTER_LAST_NAME_TEST_ID).type('Xablau');
    cy.get(REGISTER_EMAIL_TEST_ID).type('pedro@test.com');
    cy.get(REGISTER_PASSWORD_TEST_ID).type('12345678');
    cy.get(REGISTER_CONFIRM_PASSWORD_TEST_ID).type('12345678');
    cy.get(REGISTER_SUBMIT_TEST_ID).click();
    cy.wait('@register');

    cy.contains('User registered successfully').should('be.visible');
  });
});
