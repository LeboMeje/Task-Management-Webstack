// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const authRoutes = require('./routes/auth');
const authenticateUser = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

// Protected route example
app.get('/dashboard', authenticateUser, (req, res) => {
  res.json({ message: 'You have access to this protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
