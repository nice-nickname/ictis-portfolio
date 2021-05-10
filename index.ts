import fs from "fs"
import path from "path"
import https from "https"
import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

import routes from "./src/routes/routes";
import { middlewares, passport } from "./src/lib/index"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cookieParser())
app.use(middlewares.session)
app.use(middlewares.enableCors)

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')
app.set('views', path.join(process.env.HOME_DIR as string, '/public/views'))

// app.use(express.static(String(process.env.HOME_DIR) + '/public/images'))
// app.use(express.static(String(process.env.HOME_DIR) + '/public/repo'))
// app.use(express.static(String(process.env.HOME_DIR) + '/public/debug'))

app.use(express.static(process.env.HOME_DIR as string + '/public/images'))
app.use(express.static(process.env.HOME_DIR as string + '/public/repo'))
app.use(express.static(process.env.HOME_DIR as string + '/public/debug'))
app.use(express.static(process.env.HOME_DIR as string + '/public/styles'))


app.use('/api', routes)

const httpsOptions = {
    cert: fs.readFileSync(path.join(String(process.env.HTTPS_DIR), 'server.crt')),
    key: fs.readFileSync(path.join(String(process.env.HTTPS_DIR), 'server.key')),
}

https.createServer(httpsOptions, app)
.listen(process.env.PORT, () => {
    console.log('Server started...')
})
