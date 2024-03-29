import { Router } from "express";
import { StudentController as controller } from "../../controllers/controllers";
import { Action } from "../../lib";

const router = Router()

// ================
// URL/api/students
// ================

router
    .get('/', Action(controller.getAll))
    .get('/:id', Action(controller.getById))
    .post('/', Action(controller.postStudent))
    .delete('/:id', Action(controller.deleteStudent))

export default router