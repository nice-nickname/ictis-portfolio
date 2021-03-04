import * as Sequelize from "sequelize"
import sequelize from "../../db/db"
import { Teams } from "../models"
import Categories from "./CategoriesModel"

export default class Projects extends Sequelize.Model {}

Projects.init({
    id_project: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_team: {
        type: Sequelize.INTEGER,
        references: {
            model: Teams,
            key: 'id_team'
        },
        onDelete: 'CASCADE'
    },
    project_name: {
        type: Sequelize.STRING(100)
    },
    project_info: {
        type: Sequelize.STRING(255)
    },
    project_course: {
        type: Sequelize.INTEGER,
        validate: {
            isNumeric: true,
            max: 2,
            min: 1
        }
    },
    id_category: {
        type: Sequelize.INTEGER,
        references: {
            model: Categories,
            key: 'id_category'
        },
        onDelete: 'SET NULL'
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Projects'
})