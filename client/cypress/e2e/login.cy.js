describe('Username Page', () => {
	it('check for input box', () => {
		cy.visit('/');
		cy.get('input[type="text"]').should('be.visible');
	});
	it('check for submit button', () => {
		cy.visit('/');
		cy.get('button[type="submit"]').should('be.visible');
	});
	it('check for register button', () => {
		cy.visit('/');
		cy.get('button[type="submit"]').should('be.visible');
	});
	it('displays error message for non-existing username', () => {
		cy.visit('/');
		cy.get('input[type="text"]').type('nonexistinguser');
		cy.get('button[type="submit"]').click();
		cy.contains('User does not exist').should('be.visible');
	});
	it('navigates to the registration page after clicking Register Now', () => {
		cy.visit('/');
		cy.contains('Not a Member').within(() => {
			cy.contains('Register Now').click();
		});
		cy.url().should('include', '/register');
	});
	it('navigate to the password page if the username exists', () => {
		cy.visit('/');
		cy.get('input[type="text"]').type('testuser');
		cy.get('input[type="text"]').should('have.value', 'testuser');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/password');
	});
	it('should enter the right password', () => {
		cy.visit('/');
		cy.get('input[type="text"]').type('testuser');
		cy.get('input[type="text"]').should('have.value', 'testuser');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/password');
		cy.get('input[type="password"]').type('1413@T');
		cy.get('input[type="password"]').should('have.value', '1413@T');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/password');
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
