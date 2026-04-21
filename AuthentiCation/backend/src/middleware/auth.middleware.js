import jwt from 'jsonwebtoken';
import userModel from '../model/user.model.js';
import {config} from '../config/config.js';
import redis from '../db/catche.js';

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    try{
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized User' });
        }
        const isTokenInCache = await redis.get(token);
        if (isTokenInCache) {
            return res.status(401).json({ message: 'Unauthorized User' });
        }
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        console.error('Error in authMiddleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export default authMiddleware;

