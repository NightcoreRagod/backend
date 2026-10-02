import express from 'express';

const app = express();

// Fix 1: Passed a clean string to res.send()
app.get('/', (req, res) => {
    res.send('welcome'); 
});

// Fix 2: Changed to positional arguments for app.listen
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});

export default app;