import express from 'express';
import { PORT } from './Config/env.js';
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subsciption.router.js';
const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/subscriptions', subscriptionRouter);

// Fix 1: Passed a clean string to res.send()
app.get('/', (req, res) => {
    res.send('welcome'); 
});

// Fix 2: Changed to positional arguments for app.listen
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;