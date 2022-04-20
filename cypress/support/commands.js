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

// Cypress.Commands.add('AssertCorrectEventResponseReturned', (pathToFile,) => {
//     cy.readFile('../fixtures/footballLiveEndPointBody.json').then((body) => {
//         body.events.map(event => {
//             expect(event.className).to.eq('Football')
//             expect(event.typeName).to.eq('Football Live')
//         })
//     })
// })
