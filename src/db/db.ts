import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    quoteIdentifiers: false
})

sequelize.sync({logging: false})
.then(() => {
    console.log('Database synchronized...')
})
.catch(err => {
    throw err;
})

export default sequelize