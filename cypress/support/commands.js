/////////// HELPER FUNCTIONS /////////// 

Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

// dynamic stubbing

Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
  cy.intercept(`${url}`, {
    fixture: `${fixturePage}_test_data.json`,
  })
})

// stubbing endpoints

Cypress.Commands.add('loadProfile', (g) => {
  cy.loadApp()
    .interceptAPI('profile', 'http://localhost:4500/graphql')
})



