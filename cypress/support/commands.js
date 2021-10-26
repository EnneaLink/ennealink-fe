Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('loadExistingUserPage', () => {
  cy.visit('http://localhost:3000')
    .get('button[class="create-btn"]')
      .click()
})

// dynamic stubbing

// Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
//   cy.intercept(`${url}`, {
//     fixture: `${fixturePage}_test_data.json`,
//   })
// })

// stubbing endpoints

// Cypress.Commands.add('loadProfile', (g) => {
//   cy.loadApp()
//     .interceptAPI('profile', 'http://localhost:4500/graphql')
// })

