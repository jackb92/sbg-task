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

// Cypress.Commands.add('AssertCorrectEventResponseReturned', (pathToFile, keyArr, valueArr) => {
//     cy.readFile(pathToFile).then((body) => {
//         body.events.map(event => {
//             for(var i = 0; i < keyArr.length; i++)
//                 expect(event.keyArr[i]).to.eq(valueArr[i])
//             })
//     })
// })

// Cypress.Commands.add('test', (...arr) => {
//     console.log(...arr)
// })
