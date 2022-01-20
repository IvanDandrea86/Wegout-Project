import  { SessionOptions } from "express-session"
import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";
import {
    SECRET,
    OneDay,
    __prod__,
    COOKIENAME,
    REDIS_URL,
  } from "../constants/const";

  const RedisStore = connectRedis(session);
  //Client ioRedis
export const redis= new Redis(REDIS_URL)
export const sessionConfig:SessionOptions | undefined={
        store: new RedisStore({ 
          client: redis,
          disableTouch:true
        }),
        secret: SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: { 
          maxAge: OneDay,
          httpOnly:false,
          sameSite:"lax",
          secure:__prod__,
        },
        name: COOKIENAME,    
}
redis.on('error',  (err)=> {
  console.log('Could not establish a connection with redis. ' + err);
});
redis.on('connect', ()=> {
  let startTime=new Date();
  console.log(startTime,'\n🚀 Redis Connected');

});
