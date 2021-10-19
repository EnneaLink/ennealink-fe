describe('Test', () => {

  beforeEach(() => {
    cy.loadApp()
  })

  it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });
})