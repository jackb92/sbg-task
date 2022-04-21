import {get} from "lodash"

export function assertEvents(body, keyValueArr) {
    keyValueArr.forEach(keyValuePair => {
        body.events.map(event => {
            expect(get(event,keyValuePair[0])).to.eq(keyValuePair[1])
        })
    })
}