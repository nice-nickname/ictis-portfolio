import { Op } from "sequelize";
import { Categories, Mentors, Projects, Students, StudentsTeams, Teams } from "../../models/models";

interface IProject {
    id_team: number,
    id_category: number,
    project_info: string,
    project_name: string,
    project_course: number,
}

export default class ProjectService {

    async getAllProjects() {
        return Projects.findAll({
            attributes: {
                exclude: ['id_team']
            },
            include: [{
                model: Teams,
                foreignKey: 'id_team',
                attributes: {
                    exclude: ['id_team', 'id_mentor']
                },
                include: [{
                    model: Mentors,
                    foreignKey: 'id_mentor',
                }, {
                    model: Students,
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
            }]
        })
    }

    // =====================
    // Getters by categories
    // =====================

    async getProjectsByCouse(course: number) {
        return Projects.findAll({
            attributes: {
                exclude: ['id_project'],
            },
            where: {
                id_course: course
            },
            include: [{
                model: Teams,
                foreignKey: 'id_team',
                attributes: {
                    exclude: ['id_team']
                },
                include: [{
                    model: Mentors,
                    foreignKey: 'id_mentor',
                }, {
                    model: Students,
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
            }],
        })
    }

    async getProjectById(id: number) {
        return Projects.findOne({
            attributes: {
                exclude: ['id_team']
            },
            where: {
                id_project: id
            },
            include: [{
                model: Teams,
                foreignKey: 'id_team',
                attributes: {
                    exclude: ['id_team']
                },
                include: [{
                    model: Mentors,
                    foreignKey: 'id_mentor',
                }, {
                    model: Students,
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
            }],
        })
    }

    async getProjectByMentorName(name: string) {
        return Projects.findAll({
            attributes: {
                exclude: ['id_team']
            },
            where: {
                '$Team.Mentor.mentor_fullName$': {
                    [Op.substring]: name
                }
            },
            include: [{
                model: Teams,
                foreignKey: 'id_team',
                attributes: {
                    exclude: ['id_team']
                },
                include: [{
                    model: Mentors,
                    foreignKey: 'id_mentor',
                }, {
                    model: Students,
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
            }],
        })
    }

    async getAllProjectsByCategory(category: string) {
        return Projects.findAll({
            attributes: {
                exclude: ['id_team']
            },
            where: {
                "$Category.category_name$": {
                    [Op.substring]: category
                }
            },
            include: [{
                model: Teams,
                foreignKey: 'id_team',
                attributes: {
                    exclude: ['id_team']
                },
                include: [{
                    model: Mentors,
                    foreignKey: 'id_mentor',
                }, {
                    model: Students,
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
            }],
        })
    }

    async createProject(project: IProject) {
        Projects.create(project)
    }

    async deleteProject(id: number) {
        Projects.destroy({
            where: {
                id_project: id
            }
        })
    }

}