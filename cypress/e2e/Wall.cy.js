/// <reference types="cypress" />

import {
  LOGIN_EMAIL_TEST_ID,
  LOGIN_ENDPOINT,
  LOGIN_PASSWORD_TEST_ID,
  LOGIN_SUBMIT_TEST_ID,
  LOGIN_URL,
  LOGOUT_TEST_ID,
  POST_ENDPOINT, POST_MESSAGE_TEST_ID, POST_SUBMIT_TEST_ID, POST_TITLE_TEST_ID, REGISTER_URL, SIGN_IN_TEST_ID, SIGN_UP_TEST_ID, WALL_URL
} from '../utils/constants';

describe('Wall page', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('Should not be able to create a post if not logged in', () => {
    cy.intercept('GET', POST_ENDPOINT, { statusCode: 200, fixture: 'posts.json' }).as('posts');
    cy.visit(WALL_URL);

    cy.contains('Please sign in to post');    
  });

  it('Should be able to create a post if logged in', () => {
    cy.intercept('POST', LOGIN_ENDPOINT, { statusCode: 200, fixture: 'login.json' }).as('login');
    cy.intercept('GET', POST_ENDPOINT, { statusCode: 200, fixture: 'posts.json' }).as('posts');
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('12345678');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.wait(['@login', '@posts']);

    cy.get(POST_TITLE_TEST_ID).type('Test title');
    cy.get(POST_MESSAGE_TEST_ID).type('Test message');
    cy.get(POST_SUBMIT_TEST_ID).should('be.enabled');
  });

  it('Should be unable to send post if fields are blank', () => {
    cy.intercept('POST', LOGIN_ENDPOINT, { statusCode: 200, fixture: 'login.json' }).as('login');
    cy.intercept('GET', POST_ENDPOINT, { statusCode: 200, fixture: 'posts.json' }).as('posts');
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('12345678');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.wait(['@login', '@posts']);

    cy.get(POST_SUBMIT_TEST_ID).should('be.disabled');
  });

  it('Should be able to go to login page', () => {
    cy.intercept('GET', POST_ENDPOINT, { statusCode: 200, fixture: 'posts.json' }).as('posts');
    cy.visit(WALL_URL);
    cy.wait('@posts');

    cy.get(SIGN_IN_TEST_ID).click();
    cy.url().should('eq', LOGIN_URL);
  });

  it('Should be able to go to register page', () => {
    cy.intercept('GET', POST_ENDPOINT, { statusCode: 200, fixture: 'posts.json' }).as('posts');
    cy.visit(WALL_URL);
    cy.wait('@posts');

    cy.get(SIGN_UP_TEST_ID).click();
    cy.url().should('eq', REGISTER_URL);
  });

  it('Should be able to logout', () => {
    cy.intercept('POST', LOGIN_ENDPOINT, { statusCode: 200, fixture: 'login.json' }).as('login');
    cy.intercept('GET', POST_ENDPOINT, { statusCode: 200, fixture: 'posts.json' }).as('posts');
    cy.visit(LOGIN_URL);

    cy.get(LOGIN_EMAIL_TEST_ID).type('gabs@test.com');
    cy.get(LOGIN_PASSWORD_TEST_ID).type('12345678');
    cy.get(LOGIN_SUBMIT_TEST_ID).click();
    cy.wait(['@login', '@posts']);

    cy.get(LOGOUT_TEST_ID).click();
    cy.url().should('eq', LOGIN_URL);
  });
});
