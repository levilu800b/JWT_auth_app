describe('The username Page', () => {
	it('successfully loads', () => {
		cy.visit('/');
	});
	it('navigates to the registration page after clicking Register Now', () => {
		cy.visit('/');
		cy.contains('Not a Member').within(() => {
			cy.contains('Register Now').click();
		});
		cy.url().should('include', '/register');
	});
	it('it should complete the registration form and submit to login', () => {
		cy.visit('/');
		cy.contains('Not a Member').within(() => {
			cy.contains('Register Now').click();
			});
			cy.get('[name="email"]').type()
});
});
	// it('should register a user', () => {
		
	// 	cy.get('input[name="email"]').type('testmail@example.com');
	// 	cy.get('input[name="username"]').type('testuser');
	// 	// password should contain special characters
	// 	cy.get('input[name="password"]').type('test@password');
	// 	cy.get('button[type="submit"]').click();
	// 	cy.url().should('include', '/');
	// 	cy.get('input[name="username"]').type('testuser');
	// 	cy.get('button[type="submit"]').click();
	// 	cy.url().should('include', '/password');
	// 	cy.get('input[name="password"]').type('test@password');
	// 	cy.get('button[type="submit"]').click();

	// });
