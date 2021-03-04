import * as Sequelize from "sequelize"
import sequelize from "../../db/db"

export default class StudentsTeams extends Sequelize.Model {}

StudentsTeams.init({
    id_student: {
        type: Sequelize.INTEGER,
        references: {
            model: 'students',
            key: 'id_student'
        },
        onDelete: 'CASCADE'
    },
    id_team: {
        type: Sequelize.INTEGER,
        references: {
            model: 'teams',
            key: 'id_team'
        },
        onDelete: 'CASCADE'
    },
    student_role: {
        type: Sequelize.STRING(100)
    }
}, {
    sequelize,
    tableName: 'students_teams',
    timestamps: false,
})
StudentsTeams.removeAttribute('id')