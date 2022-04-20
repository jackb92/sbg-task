import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {baseUrl, footballLiveEndPoint} from '../../fixtures/urls.js'

let footballLiveEndPointBody

Given('The base url is up', () => {
    cy.request(baseUrl).then((response) => {
        expect(response.status).to.eq(200)
    })
})

When('I hit the {string} endpoint', () => {
    cy.request(`${baseUrl}${footballLiveEndPoint}`).then((response) => {
        expect(response.status).to.eq(200)
        footballLiveEndPointBody = response.body
    })
})

Then('All events returned are football events', () => {
    footballLiveEndPointBody.events.map(event => {
        expect(event.className).to.eq('Football')
        expect(event.typeName).to.eq('Football Live')
    })
})

And('Each event should have a home & away competitor', () => {
    footballLiveEndPointBody.events.map(event => {
        expect(event.competitors[0].position).to.eq('home')
        expect(event.competitors[1].position).to.eq('away')
    })
})