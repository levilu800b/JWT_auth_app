describe('Username Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('displays error message for non-existing username', () => {
		cy.get('input[type="text"]').type('nonexistinguser');
		cy.get('button[type="submit"]').click();
		cy.contains('User does not exist').should('be.visible');
	});

	it('navigates to the registration page after clicking Register Now', () => {
		cy.contains('Not a Member').within(() => {
			cy.contains('Register Now').click();
		});
		cy.url().should('include', '/register');
	});
});
