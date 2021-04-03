import redis from "redis"
import session from "express-session"
import connectRedis from "connect-redis"

const RedisStore = connectRedis(session)
const redisClient = redis.createClient({
	host: process.env.REDIS_HOST
})

const ttl = Number(process.env.COOKIE_TTL_MINS) * 60 * 1000

export default session({
    store: new RedisStore({ client: redisClient }),
    secret: 'keyboard cat',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: ttl
    },
})
