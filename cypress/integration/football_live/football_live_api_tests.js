import {Given, When, Then, And, Before} from 'cypress-cucumber-preprocessor/steps'
import {baseUrl, footballLiveEndPoint} from '../../fixtures/urls.js'
import {assertEvents} from '../../fixtures/assertEvents.js'

let footballLiveEndPointBody

Before(() => {
    cy.WriteResponseBodyFileToFixtures(footballLiveEndPoint, '../fixtures/footballLiveEndPointBody.json')
    cy.readFile('../fixtures/footballLiveEndPointBody.json').then((body) => {
        footballLiveEndPointBody = body
    })
})

Given('The base url is up', () => {
    cy.assertStatusCode(baseUrl, 200)
    console.log(footballLiveEndPointBody)
})

When('I hit the {string} endpoint', () => {
    cy.assertStatusCode(footballLiveEndPoint, 200)
})

Then('All events returned are football events', () => {
    assertEvents(footballLiveEndPointBody, [['className', 'Football']])
})

And('Each event should have a home & away competitor', () => {  
    assertEvents(footballLiveEndPointBody, [['competitors[0].position','home'],['competitors[1].position','away']])
})