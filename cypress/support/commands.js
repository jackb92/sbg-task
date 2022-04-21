Cypress.Commands.add('assertStatusCode', (url, statusCode) => {
    cy.request(url).then((response) => {
        expect(response.status).to.eq(statusCode)
    })
})

Cypress.Commands.add('WriteResponseBodyFileToFixtures', (url, pathToFixtures) => {
    cy.request(url).then((response) => {
        const body = response.body
        cy.writeFile(pathToFixtures, body)
    })
})
