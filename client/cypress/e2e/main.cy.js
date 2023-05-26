describe('Username and Register Pages', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	describe('Username Page', () => {
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
});

describe('login with username and password', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('should login with username and password', () => {
		cy.get('input[type="text"]').type('testuser');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/password');
		cy.get('input[type="password"]').type('test@password');
		cy.get('button[type="submit"]').click();
		cy.url().should('include', '/profile');
	});
});
