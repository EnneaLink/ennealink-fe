describe('User Display', () => {

  beforeEach(() => {
    cy.loadUserDisplayPage()
    
  })

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render navbar', () => {
    cy.get('button[class="nav-btn profile-btn"]')
      .should('be.visible')
    .get('button[class="nav-btn logout-btn"]')
      .should('be.visible')
  })

  it('should render search bar', () => {
    cy.get('input[class="search-bar"]')
      .should('be.visible')
  })

  it('should allow typing in search bar', () => {
    cy.get('input[class="search-bar"]')
      .type('a')
        .should('have.value', 'a')
  });

  it('should allow user to view another user profile', () => {
    cy.get('input[class="search-bar"]')
      .type('ieatfood')
      .get('[href="/profile/25"] > .card')
        .click()
  });

})
