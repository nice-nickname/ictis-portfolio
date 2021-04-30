import { NextFunction, Request, Response } from "express";
import { TeamService } from "../../services/services";

const service = new TeamService()

class TeamController {
    
    async getAll(req: Request, res: Response, next: NextFunction) {
        let qres = await service.getAllTeams()
        res.json(qres.map(i => i.toJSON()))
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        let id = Number(req.params.id)
        if (!isNaN(id)) {
            let qres = await service.getTeamById(id)
            res.json(qres?.toJSON())
        }
        else {
            next(new Error('id is NaN'))
        }
    }

    async getByName(req: Request, res: Response, next: NextFunction) {
        let name = req.params.name
        let qres = await service.getTeamByName(name)
        res.json(qres.map(i => i.toJSON()))
    }

    async getByMentorName(req: Request, res: Response, next: NextFunction) {
        let name = req.params.name
        let qres = await service.getTeamByMentorName(name)
        res.json(qres.map(i => i.toJSON()))
    }

    async postTeam(req: Request, res: Response, next: NextFunction) {
        let team = JSON.parse(req.body.team)

        let picname = "";
        if (req.file) {
            picname = req.file.filename
        }

        service.createTeam({
            team_name: team.team_name,
            team_picture: picname,
            id_mentor: team.id_mentor,
            ids_students: team.ids_students,
            students_roles: team.students_roles
        })
        res.send(req.file.filename)
    }

    async deleteById(req: Request, res: Response, next: NextFunction) {
        let id = Number(req.params.id)
        service.deleteTeam(id)
        res.sendStatus(200)
    }
}

export default new TeamController()