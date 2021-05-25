import { Router, Request, Response } from "express";
import { ViewsController as controller } from "../../controllers/controllers";

const router = Router()

router
    .get('/', controller.renderIndex)
    .get('/mentors', controller.renderMentors)
    .get('/projects', controller.renderProjects)
    .get('/project', controller.renderProjectPage)
    .get('/registration', )
    .get('/faq', controller.renderFaq)
    .get('/team')
    .get('/user', controller.renderUser)
    .get('/mentor', controller.renderMentorPage)

export default router