import { NextFunction, Request, Response } from "express";
import { MentorService } from "../../services/services";

const service = new MentorService()

class MentorController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        let qres = await service.getAllMentors()
        res.status(200).json(qres.map(i => i.toJSON()))
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        let id = parseInt(req.params.id)
        if (isNaN(id)) {
            next()
        }
        else {
            let qres = await service.getMentorById(id)
            res.status(200).json(qres?.toJSON())
        }
    }

    async getByName(req: Request, res: Response, next: NextFunction) {
        let qres = await service.getMentorByName(req.params.name)
        res.status(200).json(qres.map(i => i.toJSON()))
    }

    async postMentor(req: Request, res: Response, next: NextFunction) {
        service.createMentor(req.body.mentor)
        res.sendStatus(200)
    }

    async deleteMentor(req: Request, res: Response, next: NextFunction) {
        service.deleteMentor(parseInt(req.params.id))
        res.sendStatus(200)
    }
}

export default new MentorController()