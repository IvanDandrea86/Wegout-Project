import { RedisPubSub } from 'graphql-redis-subscriptions';
import  Redis from 'ioredis';
import { user, host,port } from '../constants/const';

const options:Redis.RedisOptions = { 
  host: host,
  port: port as number,
  password:user,
  maxRetriesPerRequest: 20,
  retryStrategy: times => {
    return Math.min(times * 50, 2000);
  }
};

export default new RedisPubSub({
  
  publisher: new Redis(options),
  subscriber: new Redis(options), 
});