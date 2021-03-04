import { Students } from "../../models/models";

export default class StudentService {

    async getAllStudents() {
        return Students.findAll({
            attributes: {
                exclude: ['id_student']
            }
        })
    }

    async getStudentById(id: number) {
        return Students.findOne({
            where: {
                id_student: id
            }
        })
    }

    async createStudent(student: {student_fullName: string, student_direction: string}) {
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