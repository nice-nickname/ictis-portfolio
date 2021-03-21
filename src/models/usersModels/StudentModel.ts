import * as Sequelize from "sequelize"
import sequelize from "../../db/db"

export default class Students extends Sequelize.Model {}

Students.init({
    id_student: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_fullName: {
        type: Sequelize.STRING(100)
    },
    student_email: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    student_year: {
        type: Sequelize.STRING(10)
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Students'  
})