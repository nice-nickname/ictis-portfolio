import { Router } from "express";
import { ProjectController as controller } from "../../controllers/controllers";
import { Action } from "../../lib";

const router = Router()

// ================
// URL/api/projects
// ================

router
    .get('/', Action(controller.getAll))
    
export default router