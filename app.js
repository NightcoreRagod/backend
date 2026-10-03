import express from 'express';

import { PORT } from './Config/env.js';

import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js';
import subscriptionRouter from './routes/subscription.router.js';

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscription', subscriptionRouter);

// Fix 1: Passed a clean string to res.send()
app.get('/', (req, res) => {

    res.send('welcome'); 
});

// Fix 2: Changed to positional arguments for app.listen
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;