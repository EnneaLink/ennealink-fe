describe('Profile', () => {

  beforeEach(() => {
    cy.loadProfilePage()
  })

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render navbar', () => {
    cy.get('button[class="nav-btn friends-btn"]')
      .should('be.visible')
    .get('button[class="nav-btn logout-btn"]')
      .should('be.visible')
  })

  it('should render username', () => {
    cy.get('h2')
      .contains('cypress test')
  })

  it('should render mbti info', () => {
    cy.get('h3')
      .contains('ISFP')
  })

  it('should render enneagram info', () => {
    cy.get('h3')
      .contains('1')
  })

  it('should render 2 links', () => {
    cy.get('a[class="type-link"]')
      .should('have.length', 2)
  })

  it('should logout', () => {
    cy.get('button[class="nav-btn logout-btn"]')
      .click()
      .url().should('eq', 'http://localhost:3000/')
  })
})
