import { Mentors, Projects, Students, StudentsTeams, Teams } from "../../models/models";

interface IStudent {
    student_fullName: string,
    student_email: string,
    student_year: string
}

export {
    IStudent
}

export default class StudentService {

    async getAllStudents() {
        return Students.findAll()
    }

    async getStudentById(id: number) {
        return Students.findOne({
            where: {
                id_student: id
            }
        })
    }

    async getProjectsByStudentEmail(email: string) {
        return Students.findOne({
            where: {
                student_email: email
            },
            include: [{
                model: Teams,
                include: [{
                    model: Projects
                }, {
                    model: Mentors
                }]
            }]
        })
    }

    async createStudent(student: IStudent) {
        let stud = await Students.create(student)
        return Number(stud.get('id_student'))
    }

    async deleteStudent(id: number) {
        Students.destroy({
            where: {
                id_student: id
            }
        })
    }
}