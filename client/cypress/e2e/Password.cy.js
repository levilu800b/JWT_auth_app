describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/password')
  })

  describe('incorrect', () => {
		it('fail if password is incorrect', () => {
			cy.visit('http://localhost:3000/password');
			cy.get('input[name="password"]').type('wrong@password');
			cy.get('button[type="submit"]').click();
			cy.contains('Incorrect password').should('be.visible');
		});
	});

  it('fail if password is empty', () => {
    cy.visit('http://localhost:3000/password')
    cy.get('button[type="submit"]').click()
    cy.contains('Incorrect password').should('be.visible')
  })

  it('fail if password does not include a special character', () => {
    cy.visit('http://localhost:3000/password')
    cy.get('input[name="password"]').type('testpassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Incorrect password').should('be.visible')
  })

  it('Pass if password is more than 6', () => {
    cy.visit('http://localhost:3000/password')
    cy.get('input[name="password"]').type('test@password')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/profile')
  })
})