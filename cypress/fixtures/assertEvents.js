export function assertEvents(body, numberOfAssertions, ...keyValueArr) {
    for(let i = 1; i <= numberOfAssertions; i++){
        body.events.map(event => {
            expect(event[keyValueArr[0]]).to.eq(keyValueArr[1])
        }) 
        keyValueArr.splice(0,2)
    }
}  