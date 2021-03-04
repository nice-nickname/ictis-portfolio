import { Router } from "express";
import { authMethods, middlewares } from "../../lib";
const router = Router()


// ============
// URL/api/auth
// ============

router
    .get('/redirect', authMethods.login())
    .get('/logout', authMethods.logout)
    .get('/test', middlewares.isAuthenticated, authMethods.getUserData)

export default router