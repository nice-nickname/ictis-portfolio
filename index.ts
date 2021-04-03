import https from "https"
import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"

const app = express()
dotenv.config()

import routes from "./src/routes/routes";
import { middlewares, passport } from "./src/lib/index"
import fs from "fs"
import path from "path"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(fileUpload())
app.use(cookieParser())
app.use(middlewares.session)
app.use(middlewares.enableCors)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(__dirname + '/public/test'))
app.use('/api', routes)


const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, '..', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, '..', 'server.key')),
}

https.createServer(httpsOptions, app)
.listen(process.env.PORT, () => {
    console.log('Server started...')
})
