import { NextFunction, Request, Response } from "express";
import { passport } from "../../lib/index";

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

export {
    login,
    logout,
    getUserData
}