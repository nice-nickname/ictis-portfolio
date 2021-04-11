import fs from "fs"
import path from "path"

const chars = "abcdefghjklmnopqrstuvwxyz1234567890"
const maxNameLength = 10
const pictureDir = path.join(String(process.env.HOME_DIR), String(process.env.IMG_REL_DIR))

function getRandomPictureName() {
    return Array
            .from({length: maxNameLength}, () => {
                let index = Math.floor(Math.random() *  chars.length)
                return chars[index]
            })
            .join('')
}

function deleteMentorPictureByName(name: string) {
    if (name === "") {
        return;    
    }

    const p = path.join(pictureDir, name)
    fs.unlink(p, (err) => {
        if (err) {
            console.error(err)
        }
    })
}

export {
    getRandomPictureName,
    deleteMentorPictureByName
}