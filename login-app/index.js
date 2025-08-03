require('dotenv').config();
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
dotenv.config();

const app = express();
const PORT = 3000;
app.use(cors({ origin: 'http://localhost:3001' }));

app.use(express.json()); // Parse JSON
app.use('/api/auth', authRoutes); // Route middleware
app.get('/', (req, res) => {
    res.send('Welcome to the Login API!');
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});