import { Op } from "sequelize";
import { Teams, Mentors, Students, StudentsTeams } from "../../models/models";

interface ITeam {
    team_name: string,
    id_mentor: number,
    team_picture: string,
    ids_students: number[],
    students_roles: string[]
}

export default class TeamService {

    async getAllTeams() {
        return Teams.findAll({
            include: [{
                model: Mentors,
                attributes: {
                    exclude: ['id_mentor']
                }
            }, {
                model: Students,
                through: {
                    attributes: {
                        exclude: ['id_student', 'id_team']
                    }
                }
            }]
        })
    }

    async getTeamById(id: number) {
        return Teams.findOne({
            where: {
                id_team: id
            },
            include: [{
                model: Mentors,
                attributes: {
                    exclude: ['id_mentor']
                }
            }, {
                model: Students,
                through: {
                    attributes: {
                        exclude: ['id_student', 'id_team']
                    }
                }
            }]
        })
    }

    async getTeamByName(name: string) {
        return Teams.findAll({
            where: {
                team_name: {
                    [Op.substring]: name
                }
            },
            include: [{
                model: Mentors,
                attributes: {
                    exclude: ['id_mentor']
                }
            }, {
                model: Students,
                through: {
                    attributes: {
                        exclude: ['id_student', 'id_team']
                    }
                }
            }]
        })
    }

    async getTeamByMentorName(name: string) {
        return Teams.findAll({
            where: {
                "$Mentor.mentor_fullName$": {
                    [Op.substring]: name
                }
            },
            include: [{
                model: Mentors,
                attributes: {
                    exclude: ['id_mentor']
                }
            }, {
                model: Students,
                through: {
                    attributes: {
                        exclude: ['id_student', 'id_team']
                    }
                }
            }]
        })
    }

    async createTeam(team: ITeam) {
        let newTeam = await Teams.create({
            id_mentor: team.id_mentor,
            team_name: team.team_name,
            team_picture: team.team_picture
        })
        let teamId = newTeam.get('id_team')

        for (let i = 0; i < team.ids_students.length; i++) {
            let newStudId = team.ids_students[i]
            let newStudRole = team.students_roles[i]

            StudentsTeams.create({
                id_student: newStudId,
                id_team: teamId,
                student_role: newStudRole
            })            
        }
    }

    async deleteTeam(id: number) {
        Teams.destroy({
            where: {
                id_team: id
            }
        })
    }
}