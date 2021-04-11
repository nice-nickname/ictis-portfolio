import path from "path"
import multer from "multer"

import { getRandomPictureName } from "../utils/utils"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(String(process.env.HOME_DIR), String(process.env.IMG_REL_DIR)))
    },
    filename: (req, file, cb) => {
        let type = file.mimetype.split('/').pop()
        console.log(type)
        let name = getRandomPictureName() + '.' + type
        cb(null, name)
    }
})

export default multer({storage: storage})