import { NextFunction, Request, Response } from "express";
import { StudentService } from "../../services/services";

const service = new StudentService()

class StudentController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        let qres = await service.getAllStudents()
        res.status(200).json(qres.map(i => i.toJSON()))
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        let qres = await service.getStudentById(parseInt(req.params.id))
        res.status(200).json(qres?.toJSON())
    }

    async postStudent(req: Request, res: Response, next: NextFunction) {
        service.createStudent(req.body.student)
        res.sendStatus(200)
    }

    async deleteStudent(req: Request, res: Response, next: NextFunction) {
        service.deleteStudent(parseInt(req.params.id))
        res.sendStatus(200)
    }
}

export default new StudentController()