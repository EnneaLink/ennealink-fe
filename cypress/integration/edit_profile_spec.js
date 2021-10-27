describe('Edit Profile', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    cy.loadEditProfilePage()
    .wait(2500)
  })

  // these won't work until we can actually stub & create new accounts each test

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render 2 dropdowns', () => {
    cy.get('select')
      .should('be.visible')
    .get('select')
      .should('have.length', 2)
  })

  it('should allow selecting mbti type', () => {
    cy.get('select[class="type-list"]')
      .select('ENFP')
      .should('have.value', 'ENFP')
  });

  it('should allow selecting enneagram type', () => {
    cy.get('select[class="num-list"]')
      .select('1')
      .should('have.value', '1')
  });

  it('should render save button', () => {
    cy.get('.save-btn')
      .should('be.visible')
  })

  it('should save profile', () => {
    cy.get('select[class="type-list"]')
      .select('ENFP')
    .get('select[class="num-list"]')
      .select('1')
    .get('.save-btn')
      .click()
    .interceptUserStats()
      .wait(1000)
      .url().should('eq', 'http://localhost:3000/profile/4')
      
  })

  it('should render 2 links', () => {
    cy.get('[href="https://www.idrlabs.com/cognitive-function/test.php"]')
      .should('be.visible')
    cy.get('[href="https://similarminds.com/cgi-bin/sminds2/similarminds3.pl"]')
      .should('be.visible')
  })
})
