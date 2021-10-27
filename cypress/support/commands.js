Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('loadExistingUserPage', () => {
  cy.loadApp()
    .get('button[class="create-btn"]')
      .click()
})

Cypress.Commands.add('loadEditProfilePage', () => {
  cy.loadApp()
    .get('input[class="login-input login-username"]')
      .type('1')
    .get('input[class="login-input password-1"]')
      .type('b')
    .get('input[class="login-input password-2"]')
      .type('b')
    .get('button[class="submit-btn next"]')
      .click()
    .interceptCreateUser()
    // .interceptPartialUserStats()
})

Cypress.Commands.add('loadProfilePage', () => {
  cy.loadExistingUserPage()
    .get('input[class="login-input login-username"]')
      .type('bunnydog')
    .get('input[class="login-input password"]')
      .type('11111111')
    .get('button[class="submit-btn"]')
      .click()
      .interceptUserStats()
})

Cypress.Commands.add('loadMarksProfilePage', () => {
  cy.loadExistingUserPage()
    .get('input[class="login-input login-username"]')
      .type('MarkTC')
    .get('input[class="login-input password"]')
      .type('1')
    .get('button[class="submit-btn"]')
      .click()
})

Cypress.Commands.add('loadUserDisplayPage', () => {
  cy.loadMarksProfilePage()
    .get('button[class="nav-btn friends-btn"]')
      .click()
      // .interceptUserStats()
      // .wait(1000)
      // .interceptGetAllUsers()
})

Cypress.Commands.add('interceptCreateUser', () => {
  cy.intercept(
    'POST',
    'https://ennealink-be.herokuapp.com/graphql',
    req => {
      if (req.body.operationName === 'createUser') {
        req.reply({
          body: {
            data: {
              createUser: {
                "id": "4",
                "username": "cypress test",
              }
            }
          }
        })
      }
    }
  )
})

Cypress.Commands.add('interceptUserStats', () => {
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

Cypress.Commands.add('interceptPartialUserStats', () => {
  cy.intercept(
    'POST',
    'https://ennealink-be.herokuapp.com/graphql',
    req => {
      if (req.body.operationName === 'getUserStats') {
        req.reply({
          body: {
            data: {
              enneagram: null,
              "email": "dev@2105.com",
              friends: [],
              id: "4",
              myersBrigg: null,
              username: "Cypress Test"
            }
          }
        })
      }
    }
  )
})

Cypress.Commands.add('interceptGetAllUsers', () => {
  cy.intercept(
    'POST',
    'https://ennealink-be.herokuapp.com/graphql',
    req => {
      if (req.body.operationName === 'getAllUsers') {
        req.reply({
          body: {
            data: {
              getAllUsers: [
                {
                  "id": "2",
                  "email": "dev@2105.com",
                  "username": "cypress test 2",
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
                  }
                },
                {
                  "id": "3",
                  "email": "dev@2105.com",
                  "username": "cypress test 3",
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
                  }
                }
              ]
            }
          }
        })
      }
    }
  )
})
