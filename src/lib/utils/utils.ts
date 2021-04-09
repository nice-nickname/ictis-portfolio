import { randomBytes, randomFill, randomFillSync, randomInt } from "crypto"

const chars = "abcdefghjklmnopqrstuvwxyz1234567890"

function getRandomPictureName() {
    return Array
            .from({length: 10}, () => {
                let index = Math.floor(Math.random() *  chars.length)
                return chars[index]
            })
            .join('')
}

export {
    getRandomPictureName
}