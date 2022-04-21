export function assertEvents(body, numberOfAssertions, ...keyValueArr) {
    for(let i = 1; i <= numberOfAssertions; i++){
        let eventIsArray = false
        body.events.map(event => {
            if(Array.isArray(event[keyValueArr[0]]) === false){
                expect(event[keyValueArr[0]]).to.eq(keyValueArr[1])
            }
            else{
                expect(event[keyValueArr[0]][i - 1][keyValueArr[1]]).to.eq(keyValueArr[2])
                eventIsArray = true
            }
        })
        eventIsArray === false ? keyValueArr.splice(0,2) : keyValueArr.splice(0,3)        
    }
}  