describe('Login', () => {

  beforeEach(() => {
    cy.loadApp()
  })

  it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render 3 input fields', () => {
    cy.get('input')
      .should('be.visible')
    cy.get('input')
      .should('have.length', 3)
  })

  it('should allow typing in inputs', () => {
    cy.get('input[class="login-input login-username"]')
      .type('a')
        .should('have.value', 'a') 
    .get('input[class="login-input password-1"]')
      .type('b')
        .should('have.value', 'b') 
    .get('input[class="login-input password-2"]')
      .type('c')
        .should('have.value', 'c') 
  });  

  it('should render create account button', () => {
    cy.get('button[type="submit"]')
      .should('be.visible')
  })

  it('should render sign in button', () => {
    cy.get('button[class="create-btn"]')
      .should('be.visible')
  })
})