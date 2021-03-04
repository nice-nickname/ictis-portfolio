import { Op } from "sequelize";
import { Mentors } from "../../models/models";

export default class MentorService {

    async getAllMentors() {
        return Mentors.findAll({
            attributes: {
                exclude: ['id_mentor']
            }
        })
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

    async createMentor(mentor: {mentor_fullName: string, mentor_info: string}) {
        let ment = await Mentors.create(mentor)
        return ment.get('id_mentor')
    }

    async deleteMentor(id: number) {
        Mentors.destroy({
            where: {
                id_mentor: id
            }
        })
    }
}