import { RedisPubSub } from 'graphql-redis-subscriptions';
import  Redis from 'ioredis';
import { REDIS_URL } from '../constants/const';

const options:Redis.RedisOptions = { 
  retryStrategy: times => {
    return Math.min(times * 50, 2000);
  }
};

export default new RedisPubSub({
 
  publisher:  new Redis(REDIS_URL,options),
  subscriber: new Redis(REDIS_URL,options), 
});