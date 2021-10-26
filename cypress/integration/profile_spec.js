describe('Profile', () => {

  beforeEach(() => {
    cy.loadProfilePage()
  })

  // these won't work until we can actually stub & create new accounts each test

  // it('should render header', () => {
  //   cy.get('h1')
  //     .contains('Ennealink')
  // })

  // it('should render navbar', () => {
  //   cy.get('button[class="nav-btn friends-btn"]')
  //     .should('be.visible')
  //   .get('button[class="nav-btn logout-btn"]')
  //     .should('be.visible')
  // })

  // it('should render username', () => {
  //   cy.get('h2')
  //     .contains('a')
  // })

  // it('should render mbti info', () => {
  //   cy.get('h3')
  //     .contains('ENFP')
  // })

  // it('should render enneagram info', () => {
  //   cy.get('h3')
  //     .contains('1')
  // })

  // it('should render 2 links', () => {
  //   cy.get('a')
  //     .should('be.visible')
  //   .get('input')
  //     .should('have.length', 2)
  // })

  // it('should logout', () => {
  //   cy.get('button[class="nav-btn logout-btn"]')
  //     .click()
  //   .get('button[class="create-btn"]')
  //     .should('be.visible')
  // })
})