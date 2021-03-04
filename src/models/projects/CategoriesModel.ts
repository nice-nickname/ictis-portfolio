import * as Sequelize from "sequelize"
import sequelize from "../../db/db"

export default class Categories extends Sequelize.Model {}

Categories.init({
    id_category: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: Sequelize.STRING(100)
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Categories'
})