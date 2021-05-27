import { Request, Response, NextFunction } from "express";
import { authMethods, SessionUser } from "../../lib";
import { ICategory } from "../../services/projectServices/CategoriesService";
import { IProject } from "../../services/projectServices/ProjectService";
import { CategoriesService, MentorService, ProjectService, StudentService } from "../../services/services";
import { IMentor } from "../../services/userServices/MentorService";

let mentorsService = new MentorService()
let projectsService = new ProjectService()
let categoiesService = new CategoriesService()
let studentsService = new StudentService()

class ViewsController {

    async renderIndex(req: Request, res: Response) {
        res.render('index/index', {
            user: req.user
        })
    }

    async renderMentors(req: Request, res: Response) {
        
        let mentors: IMentor[]

        if (req.query.query) {
            let qres = await mentorsService.getMentorByName(req.query.query as string)
            mentors = qres.map(i => i.toJSON()) as IMentor[]
        }
        else {
            let qres = await mentorsService.getAllMentors()
            mentors = qres.map(i => i.toJSON()) as IMentor[]
        }

        res.render('mentors/mentors', {
            user: req.user,
            mentors: mentors
        })
    }

    async renderProjects(req: Request, res: Response) {
        
        let rawMentors = await mentorsService.getAllMentors()
        let mentors = rawMentors.map(i => i.toJSON()) as IMentor[]

        let rawCategories =  await categoiesService.getAllCategoies()
        let categories = rawCategories.map(i => i.toJSON()) as ICategory[]

        let name = req.query.q
        let course = req.query.course
        let mentorId = req.query.mentor
        let categoryId = req.query.category
        
        let rawProjects = await projectsService.getAllProjects()

        let projects = rawProjects.map(i => i.toJSON()).filter((v, i, arr) => {
            let p = v as IProject

            let nme = String(p.project_name)
            let crs = String(p.project_course)
            let ctg = String(p.id_category)
            let mnt = (v as any).Team.Mentor.id_mentor

            if (course && crs != course) {
                return false
            }

            if (categoryId && categoryId != ctg) {
                return false
            }

            if (mentorId && mentorId != mnt) {
                return false
            }

            if (name && !nme.includes(name as string)) {
                return false
            }
            
            return true
        })

        res.render('projects/projects', {
            user: req.user,
            projects: projects,
            mentors: mentors,
            categories: categories
        })
    }

    async renderFaq(req: Request, res: Response) {
        res.render('faq/faq', {
            user: req.user
        })
    }

    async renderMentorPage(req: Request, res: Response) {
        let id = Number(req.query.id)
        let qres = await mentorsService.getMentorById(id)
        let mentor = qres?.toJSON() as IMentor
        
        let qqres = await projectsService.getProjectByMentorName(mentor.mentor_fullName)
        let projects = qqres.map(i => i.toJSON()) as IProject[]

        res.render('mentorPage/mentorPage', {
            user: req.user,
            mentor: mentor,
            projects: projects
        })
    }

    async renderUser(req: Request, res: Response) {
        let user = req.user as SessionUser
        let info = await authMethods.fetchUserDataFromDB(user.email)
        
        let rawProjects = await studentsService.getProjectsByStudentEmail(user.email)
        let projects = rawProjects?.toJSON()
        res.render('users/user', {
            user: req.user,
            userInfo: info.student,
            teams: (projects as any).Teams
        })
    }

    async renderProjectPage(req: Request, res: Response) {
        
        let id = Number(req.query.id)

        let qres = await projectsService.getProjectById(id)
        let p = qres?.toJSON()

        res.render('teams/team', {
            user: req.user,
            project: p
        })
    }
}

export default new ViewsController()