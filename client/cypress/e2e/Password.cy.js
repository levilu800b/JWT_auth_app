// password login page

describe('username page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('enter a valid username', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('[name=password]').type('test@password');
    cy.get('button[type="submit"]').click();
  })
  it('display error message if password not a match', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('[name=password]').type('test@password');
    cy.get('button[type="submit"]').click();
    cy.contains('Password does not match').should('be.visible');
  })
  it('display error message if password is empty', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('button[type="submit"]').click()
    cy.contains('Password does not match').should('be.visible');
  })
  it('display error message if password does not include a special character', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('[name=password]').type('testpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Password does not match').should('be.visible');
  })
  it('display error message if password does not include a number', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('[name=password]').type('test@password');
    cy.get('button[type="submit"]').click();
    cy.contains('Password does not match').should('be.visible');
  })
  it('display error message if password is less than 6 characters', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('[name=password]').type('test@');
    cy.get('button[type="submit"]').click();
    cy.contains('Password does not match').should('be.visible');
  })
  it('navigate to profile page if password is a match', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="text"]').type('testuser')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/password')
    cy.get('[name=password]').type('test@password');
    cy.get('button[type="submit"]').click();
  })
})



//   describe('incorrect', () => {
// 		it('fail if password is incorrect', () => {
// 			cy.visit('http://localhost:3000/password');
// 			cy.get('input[name="password"]').type('wrong@password');
// 			cy.get('button[type="submit"]').click();
// 			cy.contains('Incorrect password').should('be.visible');
// 		});
// 	});

//   it('fail if password is empty', () => {
//     cy.visit('http://localhost:3000/password')
//     cy.get('button[type="submit"]').click()
//     cy.contains('Incorrect password').should('be.visible')
//   })

//   it('fail if password does not include a special character', () => {
//     cy.visit('http://localhost:3000/password')
//     cy.get('input[name="password"]').type('testpassword')
//     cy.get('button[type="submit"]').click()
//     cy.contains('Incorrect password').should('be.visible')
//   })

//   it('Pass if password is more than 6', () => {
//     cy.visit('http://localhost:3000/password')
//     cy.get('input[name="password"]').type('test@password')
//     cy.get('button[type="submit"]').click()
//     cy.url().should('include', '/profile')
//   })
// })