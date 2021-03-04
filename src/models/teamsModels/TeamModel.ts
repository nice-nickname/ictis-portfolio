import * as Sequelize from "sequelize"
import sequelize from "../../db/db"

export default class Teams extends Sequelize.Model {}

Teams.init({
    id_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_mentor: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Mentors',
            key: 'id_mentor'
        },
        onDelete: 'CASCADE'
    },
    team_name: {
        type: Sequelize.STRING(100)
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'Teams'
})