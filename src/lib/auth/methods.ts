import { NextFunction, Request, Response } from "express";
import { passport } from "../../lib/index";
import fetch from "node-fetch"

function login() {
    return passport.authenticate('azure_ad_oauth2', {
        session: true,
        successRedirect: '/',
        failureRedirect: '/err'
    })
}

function logout(req: Request, res: Response, next: NextFunction) {
    req.session.destroy(err => {
        if (err) return next(err)
        res.redirect('/')
    })
}

function getUserData(req: Request, res: Response, next: NextFunction) {
    res.status(200).json(req.user)
}

async function fetchUserDataFromDB(email: string) {
    let token = 'cHJvamVjdG9mZmljZTpxOTBoNWp1NA=='
    let res = await fetch(`http://api.sync.ictis.sfedu.ru/find/student/email?email=${email}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + token
        }
    })

    return await res.json()
}


export {
    login,
    logout,
    getUserData,
    fetchUserDataFromDB
}