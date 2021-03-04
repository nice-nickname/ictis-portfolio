import Students from "./usersModels/StudentModel"
import Mentors from "./usersModels/MentorModel"
import Teams from "./teamsModels/TeamModel"
import StudentsTeams from "./teamsModels/StudentsTeamsModel"
import Projects from "./projects/ProjectModel"
import Categories from "./projects/CategoriesModel"

Teams.belongsTo(Mentors, {foreignKey: 'id_mentor'})
Mentors.hasMany(Teams, {foreignKey: 'id_mentor'})

Categories.hasMany(Projects, {foreignKey: 'id_category'})
Projects.belongsTo(Categories, {foreignKey: 'id_category'})

Projects.belongsTo(Teams, {foreignKey: 'id_team'})
Teams.hasOne(Projects, {foreignKey: 'id_team'})

Students.belongsToMany(Teams, {through: StudentsTeams, foreignKey: 'id_student'})
Teams.belongsToMany(Students, {through: StudentsTeams, foreignKey: 'id_team'})

export {
    StudentsTeams,
    Students,
    Mentors,
    Teams,
    Categories,
    Projects
}