describe('Test', () => {

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

  it('should render input fields', () => {
    cy.get('input')
      .should('be.visible')
  })

  it('should render create acount button', () => {
    cy.get('button[type="submit"]')
      .should('be.visible')
  })

  it('should render sign in button', () => {
    cy.get('button[class="create-btn"]')
      .should('be.visible')
  })

  // move to profiles

  // it('should render username', () => {
  //   cy.get('h2')
  //     .contains('cypress test')
  // })

  // it('should render mbti info', () => {
  //   cy.get('h3')
  //     .contains('ISFP')
  //   .get('h4')
  //     .contains('The Adventurer')
  //   .get('p')
  //     .contains('open minds')      
  //   .get('a')
  //     .contains('Learn More')    
  // })

  // it('should render enneagram info', () => {
  //   cy.get('h3')
  //     .contains('1')
  //   .get('h4')
  //     .contains('The Reformer')
  //   .get('p')
  //     .contains('right and wrong')      
  //   .get('a')
  //     .contains('Learn More')    
  // })
})