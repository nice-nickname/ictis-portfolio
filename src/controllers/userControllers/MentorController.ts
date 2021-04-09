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
        // Using JSON.parse because body-parser doesn't work with multer fileupload
        // So req.body.mentor is needed to be string in DataForm, who needs to be sended from site
        // Говно, на котороя я потратил сутки
        let mentor = JSON.parse(req.body.mentor)
        
        let name = mentor.mentor_fullName
        let info = mentor.mentor_info
        let email = mentor.mentor_email
        let pic = ""

        if (req.file) {
            pic = req.file.filename
        }

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