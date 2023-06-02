import 'cypress-file-upload';

describe('Register Page', () => {
	beforeEach(() => {
		cy.visit('/register');
	});

	it('displays the register page correctly', () => {
		cy.get('.title h4').should('have.text', 'Register');
		cy.get('.title span').should('have.text', 'Happy to join you!!');
		cy.get('input[type="text"]').should('have.length', 2);
		cy.get('input[type="password"]').should('have.length', 1);
		cy.get('input[type="file"]').should('exist');
		cy.get('button[type="submit"]').should('have.text', 'Register');
		cy.contains('Already Registered?').should('exist');
		cy.contains('Login Now').should('have.attr', 'href', '/');
	});
	it('displays the register page with error messages', () => {
		cy.get('input[type="file"]').attachFile('profile.png');
		cy.get('input[type="text"]').eq(0).type('testuser@example.com');
		cy.get('input[type="text"]').eq(1).type('testuser');
		cy.get('input[type="password"]').eq(2).type('1413@T');
		cy.get('button[type="submit"]').click();
		cy.get('.error-message').should(
			'have.file',
			'Please enter a valid profile picture.',
		);
		cy.get('.error-message').should(
			'have.text',
			'Please enter a valid email address.',
		);
		cy.get('.error-message').should(
			'have.text',
			'Please enter a valid username.',
		);
		cy.get('.error-message').should(
			'have.password',
			'Please enter a valid password.',
		);
	});
});
