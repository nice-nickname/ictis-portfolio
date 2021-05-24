import passport from "./auth/azureAuth";
import Action from "./action/Action"
import * as authMethods from "./auth/methods";
import { SessionUser } from "./auth/azureAuth"

import enableCors from "./middlewares/cors";
import session from "./middlewares/session";
import fileUpload from "./middlewares/fileUpload";
import isAuthenticated from "./middlewares/authenticated";
import isAdmin from "./middlewares/isAdmin";

const middlewares = {
    enableCors,
    session,
    isAuthenticated,
    isAdmin,
    fileUpload
}

export {
    middlewares,
    authMethods,
    passport,
    Action,
    SessionUser,
}