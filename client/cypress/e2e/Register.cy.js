// describe('template spec', () => {
// 	it('passes', () => {
// 		cy.visit('http://localhost:3000/register');
// 	});
// });

// cypress/integration/register.spec.js
/// <reference types="cypress" />

describe('Register Page', () => {
	it('should register a user', () => {
		cy.visit('http://localhost:3000/register');
		cy.get('input[name="email"]').type('testmail@example.com')
		cy.get('input[name="username"]').type('testuser')
		// password should contain special characters
		cy.get('input[name="password"]').type('test@password')
		cy.get('button[type="submit"]').click()
		cy.url().should('include', '/')
	});
});