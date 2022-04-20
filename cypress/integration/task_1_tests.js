import {baseUrl, footballLiveEndPoint} from '../fixtures/urls.js'

describe(`Hitting the ${footballLiveEndPoint} endpoint should return all events as football events`, () => {
    it('Given the base url is up', () => {
        cy.request(baseUrl).then((response) => {
            expect(response.status).to.eq(200);
        })
    }),

    it(`When I hit the ${footballLiveEndPoint} endpoint`, () => {
        cy.request(`${baseUrl}${footballLiveEndPoint}`).then((response) => {
            expect(response.status).to.eq(200);
        })
    }),

    it('Then all events returned are football events', () => {
        cy.request(`${baseUrl}${footballLiveEndPoint}`).then((response) => {
            const body = response.body
            body.events.map(event => {
                expect(event.className).to.eq('Football')
                expect(event.typeName).to.eq('Football Live')
            })
        })
    })
})

describe.only(`Hitting the ${footballLiveEndPoint} endpoint should return a home and away competitor for each event`, () => {
    it('Given the base url is up', () => {
        cy.request(baseUrl).then((response) => {
            expect(response.status).to.eq(200);
        })
    }),

    it(`When I hit the ${footballLiveEndPoint} endpoint`, () => {
        cy.request(`${baseUrl}${footballLiveEndPoint}`).then((response) => {
            expect(response.status).to.eq(200);
        })
    }),

    it('Then each event should have a home & away competitor', () => {
        cy.request(`${baseUrl}${footballLiveEndPoint}`).then((response) => {
            const body = response.body
            body.events.map(event => {
                expect(event.competitors[0].position).to.eq('home')
                expect(event.competitors[1].position).to.eq('away')
            })
        })
    })
})