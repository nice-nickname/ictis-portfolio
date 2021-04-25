import { Router } from "express";
import { TeamController as controller } from "../../controllers/controllers";
import { Action, middlewares } from "../../lib";

const router = Router()

// ================
// URL/api/projects
// ================

router
    .get('/', Action(controller.getAll))
    .get('/:id', Action(controller.getById))
    .get('/name/:name', Action(controller.getByName))
    .get('/mentor/:name', Action(controller.getByMentorName))
    .post('/', middlewares.fileUpload.single('image'), Action(controller.postTeam))
    .delete('/:id', Action(controller.deleteById))
    
export default router