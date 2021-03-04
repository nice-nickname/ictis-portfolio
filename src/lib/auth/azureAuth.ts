import passport from "passport"
import Strategy from "passport-azure-ad-oauth2"
import jwt from "jsonwebtoken"

function callback(accessToken: string, refreshToken: string, params: any, profile: any, done: Function) {
    let data = jwt.decode(params.id_token)
    console.log(data)
    done(null, data)
} 

passport.serializeUser((user: any, done) => {
    done(null, {
        id: user.upn,
        name: user.name
    })
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.REDIRECT_URL
}, callback))

export default passport