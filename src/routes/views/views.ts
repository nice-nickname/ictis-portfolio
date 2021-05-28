import { Router, Request, Response } from "express";
import { ViewsController as controller } from "../../controllers/controllers";
import { middlewares } from "../../lib";

const router = Router()

router
    .get('/', controller.renderIndex)
    .get('/mentors', controller.renderMentors)
    .get('/projects', controller.renderProjects)
    .get('/project', controller.renderProjectPage)
    .get('/registration', middlewares.isAdmin ,controller.renderRegistration)
    .get('/registrationn', middlewares.isAdmin ,controller.renderRegistrationn)
    .get('/registration/:id', middlewares.isAdmin , (req, res) => {res.redirect('/registrationn')})
    .get('/faq', controller.renderFaq)
    .get('/team')
    .get('/user', controller.renderUser)
    .get('/mentor', controller.renderMentorPage)

export default router