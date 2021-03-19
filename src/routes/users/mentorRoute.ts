import { Router } from "express";
import controller from "../../controllers/userControllers/MentorController";
import { Action } from "../../lib";
const router = Router()

// ================
// URL/api/students
// ================

router
    .get('/', Action(controller.getAll))
    .get('/:id', Action(controller.getById))
    .get('/name/:name', Action(controller.getByName))
    .post('/', Action(controller.postMentor))
    .delete('/:id', Action(controller.deleteMentor))
    
export default router