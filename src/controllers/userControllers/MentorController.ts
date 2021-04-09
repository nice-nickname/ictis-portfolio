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
            next(new Error('id equals NaN'))
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
        let mentor = req.body.mentor
        
        let name = mentor.mentor_fullName
        let info = mentor.mentor_info
        let pic = ""
        let email = mentor.mentor_email

        /* Enter file uploading here */

        service.createMentor({
            mentor_fullName: name,
            mentor_email: email,
            mentor_info: info,
            mentor_picture: pic
        })
        res.sendStatus(200)
    }

    async deleteMentor(req: Request, res: Response, next: NextFunction) {
        service.deleteMentor(parseInt(req.params.id))
        res.sendStatus(200)
    }
}

export default new MentorController()