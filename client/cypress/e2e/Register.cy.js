describe('Register Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/register');
	});

	it('should register a user', () => {
		cy.get('input[name="email"]').type('testmail@example.com');
		cy.get('input[name="username"]').type('testuser');
		// password should contain special characters
		cy.get('input[name="password"]').type('test@password');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/');
	});
});
