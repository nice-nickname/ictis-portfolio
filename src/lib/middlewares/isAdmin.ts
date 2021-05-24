import { NextFunction, Request, Response } from "express";
import { SessionUser } from "..";

function isAdmin(req: Request, res: Response, next: NextFunction) {
    let user = req.user as SessionUser
    if (req.isAuthenticated() && user.email == "smakarov@sfedu.ru") {
        next()
    }
    else {
        res.sendStatus(401)
    }
}

export default isAdmin