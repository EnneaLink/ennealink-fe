describe('Profile', () => {

  beforeEach(() => {
    cy.loadProfilePage()
    cy.intercept(
      'POST',
      'https://ennealink-be.herokuapp.com/graphql',
      req => {
        if (req.body.operationName === 'getUserStats') {
          req.reply({
            body: {
              data: {
                getUserStats: {
                  "id": "4",
                  "email": "dev@2105.com",
                  "username": "cypress test",
                  "enneagram": {
                      "id": "46",
                      "number": 1,
                      "name": "The Reformer",
                      "description": "Ones are conscientious and ethical, with a strong sense of right and wrong… Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic.",
                      "link": "https://www.enneagraminstitute.com/type-1"
                  },
                  "myersBrigg": {
                      "id": "54",
                      "typeOf": "ISFP",
                      "name": "The Adventurer",
                      "description": "They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.",
                      "link": "https://www.16personalities.com/isfp-personality"
                  },
                  "friends": []
                }
              }
            }
          })
        }
      }
    )
  })

  // these won't work until we can actually stub & create new accounts each test

  it('should render header', () => {
    cy.get('h1')
      .contains('Ennealink')
  })

  it('should render navbar', () => {
    cy.get('button[class="nav-btn friends-btn"]')
      .should('be.visible')
    .get('button[class="nav-btn logout-btn"]')
      .should('be.visible')
  })

  it('should render username', () => {
    cy.get('h2')
      .contains('a')
  })

  it('should render mbti info', () => {
    cy.get('h3')
      .contains('ENFP')
  })

  it('should render enneagram info', () => {
    cy.get('h3')
      .contains('1')
  })

  it('should render 2 links', () => {
    cy.get('a')
      .should('be.visible')
    .get('input')
      .should('have.length', 2)
  })

  it('should logout', () => {
    cy.get('button[class="nav-btn logout-btn"]')
      .click()
    .get('button[class="create-btn"]')
      .should('be.visible')
  })
})
