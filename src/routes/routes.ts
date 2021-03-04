import { Router } from "express";
const router = Router()

import loginRoute   from "./login/login";
import studentRoute from "./users/studentRoute"
import mentorRoute  from "./users/mentorRoute"
import projectRoute from "./projects/projectRoute"

// =======
// URL/api
// =======

router
    .use('/auth', loginRoute)
    .use('/students', studentRoute)
    .use('/mentors', mentorRoute)
    .use('/projects', projectRoute)
    
export default router