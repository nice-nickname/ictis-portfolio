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
        type: Sequelize.STRING(100)
    },
    mentor_info: {
        type: Sequelize.STRING(100)
    },
    mentor_email: {
        type: Sequelize.STRING(100),
        validate: {
            isEmail: true
        }
    },
    mentor_picture: {
        type: Sequelize.STRING(50),
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Mentors'
})