const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'X-Requested-With']
}));

app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  // Handle authentication here
  res.json({ message: 'Login successful', user: username });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
