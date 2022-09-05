/// <reference types="cypress" />

import {
  LOGIN_EMAIL_TEST_ID,
  LOGIN_PASSWORD_TEST_ID,
  LOGIN_SUBMIT_TEST_ID,
  LOGIN_URL, REGISTER_LINK_TEST_ID,
  WALL_LINK_TEST_ID
} from '../utils/constants';

describe('Login page', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('Should not be able to submit login with invalid empty fields', () => {
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.contains('Fields cannot be blank');
  });
  
  it('Should not be able to submit login with invalid email pattern', () => {
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('12345678');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.contains('Email is not valid');
  });
  
  it('Should not be able to submit login with password below the minimun length', () => {
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('123');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.contains('Password must be at least 8 characters');
  });
  
  it('Should not be able to login with a non-existent user', () => {
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('xablau@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('xablau1234');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.contains('Unauthorized, incorrect or unregistered email');
  });

  it('Should not be able to login with wrong user password', () => {
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('xablau1234');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.contains('Unauthorized, incorrect password');
  });

  it('Should be able to login', () => {
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('12345678');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.location('pathname').should('eq', '/wall');
  });

  it('should be able to access register page', () => {
    cy.visit(LOGIN_URL);

    cy.get(REGISTER_LINK_TEST_ID).click();
    cy.location('pathname').should('eq', '/register');
  });

  it('should be able to access the wall page as a guest', () => {
    cy.visit(LOGIN_URL);

    cy.get(WALL_LINK_TEST_ID).click();
    cy.location('pathname').should('eq', '/wall');
  });
});
