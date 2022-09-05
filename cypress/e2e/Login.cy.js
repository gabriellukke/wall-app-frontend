/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.clearLocalStorage();
  });

  it('Should not be able to submit login with invalid empty fields', () => {
    cy.get('[data-testid="login-submit"]').click();
    cy.contains('Fields cannot be blank');
  });
  
  it('Should not be able to submit login with invalid email pattern', () => {
    cy.get('[data-testid="login-email"]').type('gabs');
    cy.get('[data-testid="login-password"]').type('12345678');
    cy.get('[data-testid="login-submit"]').click();
    cy.contains('Email is not valid');
  });
  
  it('Should not be able to submit login with password below the minimun length', () => {
    cy.get('[data-testid="login-email"]').type('gabs@test.com');
    cy.get('[data-testid="login-password"]').type('123');
    cy.get('[data-testid="login-submit"]').click();
    cy.contains('Password must be at least 8 characters');
  });
  
  it('Should not be able to login with a non-existent user', () => {
    cy.get('[data-testid=login-email]').type('xablau@test.com');
    cy.get('[data-testid=login-password]').type('xablau1234');
    cy.get('[data-testid=login-submit]').click();
    cy.contains('Unauthorized, incorrect or unregistered email');
  });

  it('Should not be able to login with wrong user password', () => {
    cy.get('[data-testid=login-email]').type('gabs@test.com');
    cy.get('[data-testid=login-password]').type('xablau1234');
    cy.get('[data-testid=login-submit]').click();
    cy.contains('Unauthorized, incorrect password');
  });

  it('Should be able to login', () => {
    cy.get('[data-testid=login-email]').type('gabs@test.com');
    cy.get('[data-testid=login-password]').type('12345678');
    cy.get('[data-testid=login-submit]').click();
    cy.location('pathname').should('eq', '/wall');
  });

  it('should be able to access register page', () => {
    cy.get('[data-testid=register-link]').click();
    cy.location('pathname').should('eq', '/register');
  });

  it('should be able to access the wall page as a guest', () => {
    cy.get('[data-testid=wall-link]').click();
    cy.location('pathname').should('eq', '/wall');
  });
});
