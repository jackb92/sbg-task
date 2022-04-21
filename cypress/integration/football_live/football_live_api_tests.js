import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import {baseUrl, footballLiveEndPoint} from '../../fixtures/urls.js'
import {assertEvents} from '../../fixtures/assertEvents.js'

Before(() => {
    cy.WriteResponseBodyFileToFixtures(`${baseUrl}${footballLiveEndPoint}`, '../fixtures/footballLiveEndPointBody.json')
});

Given('The base url is up', () => {
    cy.assertStatusCode(baseUrl, 200)
})

When('I hit the {string} endpoint', () => {
    cy.assertStatusCode(`${baseUrl}${footballLiveEndPoint}`, 200)
})

Then('All events returned are football events', () => {
    cy.readFile('../fixtures/footballLiveEndPointBody.json').then((footballLiveEndPointBody) => {
        assertEvents(footballLiveEndPointBody, [['className', 'Football']])
    })
})

And('Each event should have a home & away competitor', () => {  
    cy.readFile('../fixtures/footballLiveEndPointBody.json').then((footballLiveEndPointBody) => {
        assertEvents(footballLiveEndPointBody, [['competitors[0].position','home'],['competitors[1].position','away']])
    })
})