import { NextFunction, Request, Response } from "express";

function enableCors(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || req.headers.host)
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token, authorization, Authorization')
    res.header('Access-Control-Expose-Headers', 'X-Total-Count')
    next()
}

export default enableCors