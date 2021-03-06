describe('Existing Log In', () => {

  beforeEach(() => {
    cy.loadExistingUserPage()
  })

  it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render 2 input fields', () => {
    cy.get('input')
      .should('be.visible')
    cy.get('input')
      .should('have.length', 2)
  })

  it('should allow typing in inputs', () => {
    cy.get('input[class="login-input login-username"]')
      .type('a')
        .should('have.value', 'a')
    cy.get('input[class="login-input password"]')
      .type('b')
        .should('have.value', 'b')
  });

  it('should render create account button', () => {
    cy.get('button[type="submit"]')
      .should('be.visible')
  })

  it('should render sign up button', () => {
    cy.get('button[class="create-btn"]')
      .should('be.visible')
  })

})
