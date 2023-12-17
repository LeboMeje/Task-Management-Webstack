// server.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Dummy tasks for testing
const tasks = [
  { id: 1, title: 'Complete project', deadline: '2023-12-31' },
  { id: 2, title: 'Submit report', deadline: '2023-11-15' },
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
