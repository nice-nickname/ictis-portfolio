import { Op } from "sequelize";
import { Mentors } from "../../models/models";

interface IMentor {
    mentor_fullName: string, 
    mentor_info: string, 
    mentor_email: string,
    mentor_picture: string
}

export default class MentorService {

    async getAllMentors() {
        return Mentors.findAll()
    }

    async getMentorById(id: number) {
        return Mentors.findOne({
            where: {
                id_mentor: id
            }
        })
    }

    async getMentorByName(name: string) {
        return Mentors.findAll({
            where: {
                mentor_fullName: {
                    [Op.substring]: name
                }
            }
        })
    }

    async createMentor(mentor: IMentor) {
        let ment = await Mentors.create(mentor)
        return Number(ment.get('id_mentor'))
    }

    async deleteMentor(id: number) {
        Mentors.destroy({
            where: {
                id_mentor: id
            }
        })
    }

    uploadPicture() {

    }
}