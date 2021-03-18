import { NextFunction, Request, Response } from "express";
import { ProjectService } from "../../services/services";

const service = new ProjectService()

class ProjectController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        let qres = await service.getAllProjects()
        res.status(200).json(qres.map(i => i.toJSON()))
    }

    async getByCourse(req: Request, res: Response, next: NextFunction) {
        let course = Number(req.params.course)
        let qres = await service.getProjectsByCouse(course)
        res.status(200).json(qres.map(i => i.toJSON()))
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        let id = Number(req.params.id)
        let qres = await service.getProjectById(id)
        res.status(200).json()
    }

    async getByProjectName(req: Request, res: Response, next: NextFunction) {
        let name = req.params.name

    }

    async getByCategory(req: Request, res: Response, next: NextFunction) {

    }

    async getByMentor(req: Request, res: Response, next: NextFunction) {

    }

    async getByTeamName(req: Request, res: Response, next: NextFunction) {

    }

    async createProject(req: Request, res: Response, next: NextFunction) {

    }

    async deleteById(req: Request, res: Response, next: NextFunction) {

    }
}

export default new ProjectController()