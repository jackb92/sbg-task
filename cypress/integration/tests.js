describe('Hitting the /football/live endpoint should return all events as football events', () => {
    it('Given the base url is up', () => {
        cy.request('http://localhost:8888/').then((response) => {
            expect(response.status).to.eq(200);
        });
    }),

    it('When I hit the /football/live endpoint', () => {
        cy.request('http://localhost:8888/football/live').then((response) => {
            expect(response.status).to.eq(200);
        });
    }),

    it('Then all events returned are football events', () => {
        cy.request('http://localhost:8888/football/live').then((response) => {
            const body = response.body
            body.events.map(event => {
                expect(event.className).to.eq('Football')
            })
        });
    })
})

describe('Hitting the /football/live endpoint should return a home and away competitor for each event', () => {
    it('Given the base url is up', () => {

    }),

    it('When I hit the /football/live endpoint', () => {

    }),

    it('Then each event should have a home & away competitor', () => {

    })
})