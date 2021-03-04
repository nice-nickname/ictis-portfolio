import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"

const app = express()
dotenv.config()

import routes from "./src/routes/routes";
import { middlewares, passport } from "./src/lib/index"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(fileUpload())
app.use(cookieParser())
app.use(middlewares.session)
app.use(middlewares.enableCors)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(__dirname + '/public'))
app.use('/api', routes)


app.listen(process.env.PORT, () => {
    console.log('Server started...')
})
