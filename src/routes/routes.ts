import { Router } from "express";
const router = Router()

import loginRoute   from "./login/login";
import mentorRoute  from "./users/mentorRoute"
import studentRoute from "./users/studentRoute"
import teamRoute    from "./projects/teamRoute"
import projectRoute from "./projects/projectRoute"
import viewsRoute   from "./views/views"

// =======
// URL/api
// =======

router
    .use('/', viewsRoute)
    .use('/api/auth', loginRoute)
    .use('/api/students', studentRoute)
    .use('/api/mentors', mentorRoute)
    .use('/api/projects', projectRoute)
    .use('/api/teams', teamRoute)
    
export default router