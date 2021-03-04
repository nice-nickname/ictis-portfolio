import { NextFunction, Request, Response } from "express";


function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
        next()
    }
    else {
        res.sendStatus(401)
    }
}

export default isAuthenticated