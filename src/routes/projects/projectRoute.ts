import { Router } from "express";
import { ProjectController as controller } from "../../controllers/controllers";
import { Action } from "../../lib";

const router = Router()

// ================
// URL/api/projects
// ================

router
    .get('/', Action(controller.getAll))
    .get('/:id', Action(controller.getById))
    .get('/course/:course', Action(controller.getByCourse))
    .get('/category/:name', Action(controller.getByCategory))
    .get('/mentor/:name', Action(controller.getByMentorName))
    .post('/', Action(controller.createProject))    
    .delete('/:id', Action(controller.deleteById))

export default router