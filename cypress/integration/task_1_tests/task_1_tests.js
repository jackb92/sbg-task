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
        assertEvents(footballLiveEndPointBody, 2, 'className', 'Football','typeName', 'Football Live')
    })
})

And('Each event should have a home & away competitor', () => {  
    cy.readFile('../fixtures/footballLiveEndPointBody.json').then((footballLiveEndPointBody) => {
        assertEvents(footballLiveEndPointBody, 2, 'competitors', 'position','home','competitors', 'position','away')
    })
})