import { Categories, Mentors, Projects, Students, StudentsTeams, Teams } from "../../models/models";

export default class ProjectService {

    async getAllProjects() {
        return Projects.findAll({
            attributes: {
                exclude: ['id_project', 'id_team', 'id_category']
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
                    attributes: {
                        exclude: ['id_mentor']
                    }
                }, {
                    model: Students,
                    attributes: {
                        exclude: ['id_student']
                    },
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
                attributes: {
                    exclude: ['id_category']
                }
            }]
        })
    }

    // =====================
    // Getters by categories
    // =====================

    async getProjectsByCouse(course: number) {
        return Projects.findAll({
            attributes: {
                exclude: ['id_project', 'id_team', 'id_category'],
            },
            where: {
                id_course: course
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
                    attributes: {
                        exclude: ['id_mentor']
                    }
                }, {
                    model: Students,
                    attributes: {
                        exclude: ['id_student']
                    },
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
                attributes: {
                    exclude: ['id_category']
                }
            }],
        })
    }

    async getProjectById(id: number) {
        return Projects.findOne({
            attributes: {
                exclude: ['id_team', 'id_category']
            },
            where: {
                id_project: id
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
                    attributes: {
                        exclude: ['id_mentor']
                    }
                }, {
                    model: Students,
                    attributes: {
                        exclude: ['id_student']
                    },
                    through: {
                        attributes: {
                            exclude: ['id_student', 'id_team']
                        }
                    }
                }]
            }, {
                model: Categories,
                foreignKey: 'id_category',
                attributes: {
                    exclude: ['id_category']
                }
            }],
        })
    }

    async createProject(project: any) {
        
    }

    async deleteProject(id: number) {
        Projects.destroy({
            where: {
                id_project: id
            }
        })
    }

}