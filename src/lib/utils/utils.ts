import fs from "fs"
import path from "path"
import crypto from "crypto"

const chars = "abcdefghjklmnopqrstuvwxyz1234567890!@#$%^&*()_=-+"

const maxNameLength = 10
const pictureDir = path.join(String(process.env.HOME_DIR), String(process.env.IMG_REL_DIR))

function getRandomPictureName() {
    let dateStr = new Date().toLocaleString()
    let h = crypto.createHash('md5').update('picture' + dateStr).digest('hex')
    console.log(h)
    return h
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