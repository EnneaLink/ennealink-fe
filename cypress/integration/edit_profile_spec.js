describe('Edit Profile', () => {

  beforeEach(() => {
    cy.loadEditProfilePage()
  })

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render 2 dropdowns', () => {
    cy.get('select')
      .should('be.visible')
    cy.get('select')
      .should('have.length', 2)
  })

  // it('should render save button', () => {
  //   cy.get('button[type="save-btn"]')
  //     .should('be.visible')
  // })

  // it('should allow selecting mbti type', () => {
  //   cy.get('select[class="type-list"]')
  //     .select('ENFP')
  //     .should('have.value', 'ENFP')      
  // });

  // it('should allow selecting enneagram type', () => {
  //   cy.get('select[class="num-list"]')
  //     .select('1')
  //     .should('have.value', '1')      
  // });  
})