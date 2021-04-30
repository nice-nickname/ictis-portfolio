import { Router } from "express";
import { MentorController as controller } from "../../controllers/controllers";
import { Action, middlewares } from "../../lib";

const router = Router()

// ================
// URL/api/students
// ================

router
    .get('/', Action(controller.getAll))
    .get('/:id', Action(controller.getById))
    .get('/name/:name', Action(controller.getByName))
    .post('/',middlewares.fileUpload.single('image') ,Action(controller.postMentor))
    .delete('/:id', Action(controller.deleteMentor))
    
export default router