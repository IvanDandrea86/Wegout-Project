import { RedisPubSub } from 'graphql-redis-subscriptions';
import  Redis from 'ioredis';
import { REDIS_DOMAIN_NAME,REDIS_PORT,REDIS_PASSWORD } from '../constants/const';

const options:Redis.RedisOptions = { 
  host: REDIS_DOMAIN_NAME,
  port: REDIS_PORT,
  password:REDIS_PASSWORD,
  retryStrategy: times => {
    return Math.min(times * 50, 2000);
  }
};

export default new RedisPubSub({
  
  publisher: new Redis(options),
  subscriber: new Redis(options), 
});