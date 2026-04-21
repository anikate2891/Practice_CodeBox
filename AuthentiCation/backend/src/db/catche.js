import {config} from '../config/config.js';
import Redis from 'ioredis';

const redis = new Redis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    password: config.REDIS_PASSWORD
});

redis.on('connect', () => {
    console.log('Server is connected to Redis');
});

redis.on('error', (err) => {
    console.error('Redis error:', err);
});




export default redis;