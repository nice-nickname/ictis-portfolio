import * as Sequelize from "sequelize"
import sequelize from "../../db/db"

export default class Mentors extends Sequelize.Model {}

Mentors.init({
    id_mentor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mentor_fullName: {
        type: Sequelize.STRING(65)
    },
    mentor_info: {
        type: Sequelize.STRING(100)
    },
    mentor_email: {
        type: Sequelize.STRING(50),
        validate: {
            isEmail: true
        }
    },
    mentor_phone: {
        type: Sequelize.STRING(15),
        validate: {
            isNumeric: true
        }
    },
    mentor_link: {
        type: Sequelize.STRING(100)
    },
    mentor_picture: {
        type: Sequelize.STRING(50),
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Mentors'
})