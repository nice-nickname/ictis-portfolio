import { Categories, Mentors, Projects, Students, StudentsTeams, Teams } from "../../models/models";

interface ICategory {
    id_category: number,
    category_name: string
}

export {
    ICategory
}

export default class CategoriesService {

    async getAllCategoies() {
        return Categories.findAll()
    }

}