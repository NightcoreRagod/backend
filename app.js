import express from 'express';
import{ PORT } from './Config/env.js';    

const app = express();

// Fix 1: Passed a clean string to res.send()
app.get('/', (req, res) => {
    res.send('welcome'); 
});

// Fix 2: Changed to positional arguments for app.listen
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost: ${PORT}`);
});

export default app;