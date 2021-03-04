import passport from "./auth/azureAuth";
import Action from "./action/Action"
import * as authMethods from "./auth/methods";

import enableCors from "./middlewares/cors";
import session from "./middlewares/session";
import isAuthenticated from "./middlewares/authenticated";

const middlewares = {
    enableCors,
    session,
    isAuthenticated
}

export {
    middlewares,
    authMethods,
    passport,
    Action,
}