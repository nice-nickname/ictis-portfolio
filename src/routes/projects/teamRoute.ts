import { Router } from "express";
import { TeamController as controller } from "../../controllers/controllers";
import { Action } from "../../lib";

const router = Router()

// ================
// URL/api/projects
// ================

router
    .get('/', Action(controller.getAll))
    .get('/:id', Action(controller.getById))
    .get('/name/:name', Action(controller.getByName))
    .get('/mentor/:name', Action(controller.getByMentorName))
    .post('/', Action(controller.postTeam))
    .delete('/:id', Action(controller.deleteById))
    
export default router