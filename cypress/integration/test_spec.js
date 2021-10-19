describe('Test', () => {

  beforeEach(() => {
    cy.loadProfile()
  })

  it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });
})