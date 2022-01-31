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
          domain:'wegout.herokuapp.com',
          maxAge: OneDay,
          httpOnly:true,
          sameSite:"lax",
          secure:true,
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
