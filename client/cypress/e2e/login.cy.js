describe('Username Page', () => {
	it('check for input box', () => {
		cy.visit('http://localhost:3000/');
		cy.get('input[type="text"]').should('be.visible');
	});
	it('check for submit button', () => {
		cy.visit('http://localhost:3000/');
		cy.get('button[type="submit"]').should('be.visible');
	});
	it('check for register button', () => {
		cy.visit('http://localhost:3000/');
		cy.get('button[type="submit"]').should('be.visible');
	});
	it('displays error message for non-existing username', () => {
		cy.visit('http://localhost:3000/');
		cy.get('input[type="text"]').type('nonexistinguser');
		cy.get('button[type="submit"]').click();
		cy.contains('User does not exist').should('be.visible');
	});
	it('navigates to the registration page after clicking Register Now', () => {
		cy.visit('http://localhost:3000/');
		cy.contains('Not a Member').within(() => {
			cy.contains('Register Now').click();
		});
		cy.url().should('include', '/register');
	})
});





// describe('use the register credential to login', () => {
// 		beforeEach(() => {
// 			cy.visit('http://localhost:3000/');
// 		});
// 		it('should login with the registered credential', () => {
// 			cy.get('input[type="text"]').type('testuser');
// 			cy.get('button[type="submit"]').click();
// 			cy.url().should('include', '/password');
// 			cy.get('input[name="password"]').type('test@password');
// 			cy.get('button[type="submit"]').click();
// 			cy.url().should('include', '/password'); // Update the assertion URL to '/password'
// 		});
// 	});
