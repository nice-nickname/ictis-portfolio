import { Op } from "sequelize";
import { deleteMentorPictureByName } from "../../lib/utils/utils";
import { Mentors } from "../../models/models";

interface IMentor {
    mentor_fullName: string, 
    mentor_info: string, 
    mentor_email: string,
    mentor_picture: string,
    mentor_link: string,
    mentor_phone: string
}

export {
    IMentor
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
        let mentor = await this.getMentorById(id)
        if (mentor) {
            deleteMentorPictureByName(mentor.get('mentor_picture') as string)
            Mentors.destroy({
                where: {
                    id_mentor: id
                }
            })
        }
    }
}