import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'cookie-parser';
import { config } from '../config/config.js';
import userModel from '../model/user.model.js';
import redis from '../db/catche.js';



export async function registerController (req, res) {
    const { username, email, password } = req.body;
    try{
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({ username, email, password: hashedPassword });

        const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(201).json(
            { 
                message: 'User registered successfully',
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
        );

    } catch (error) {
        console.error('Error in registerController:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function loginController (req, res) {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error in loginController:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function logoutController (req, res) {
    res.clearCookie('token');
    redis.set('token', Date.now().toString(), 'EX', 3600);

    res.status(200).json({ message: 'Logout successful' });
}

export async function getMeController (req, res) {
    try {
        const user = await userModel.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error in getMeController:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
