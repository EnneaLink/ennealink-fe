describe('Test', () => {

  beforeEach(() => {
    cy.loadProfile()
  })

  it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should render header', () => {
    cy.get('h1')
      .contains('EnneaLink')
  })

  it('should render username', () => {
    cy.get('h2')
      .contains('cypress test')
  })

  it('should render mbti info', () => {
    cy.get('h3')
      .contains('ISFP')
    .get('h4')
      .contains('The Adventurer')
    .get('p')
      .contains('open minds')      
    .get('a')
      .contains('Learn More')    
  })

  it('should render enneagram info', () => {
    cy.get('h3')
      .contains('1')
    .get('h4')
      .contains('The Reformer')
    .get('p')
      .contains('right and wrong')      
    .get('a')
      .contains('Learn More')    
  })
})