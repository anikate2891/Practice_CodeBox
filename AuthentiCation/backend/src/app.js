import express from 'express';
import authRouter from './routes/app.route.js';
const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

export default app;