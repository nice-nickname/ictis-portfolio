import { NextFunction, Request, Response } from "express";

export default function(actor: (req: Request, res: Response, next: NextFunction) => any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await actor(req, res, next)
        }
        catch(er) {
            next(er)
        }
    }
}