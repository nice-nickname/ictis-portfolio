import { Router } from "express";
import controller from "../../controllers/projectControllers/ProjectController";
import { Action } from "../../lib";

const router = Router()

// ================
// URL/api/projects
// ================

router
    .get('/', Action(controller.getAll))
    
export default router