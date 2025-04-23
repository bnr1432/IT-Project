const express = require('express');
const router = express.Router();
const { Task, User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify user
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ error: 'No token' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Submit task
router.post('/submit', auth, async (req, res) => {
  const { content } = req.body;
  try {
    const task = await Task.create({ content, UserId: req.user.id });
    res.json({ message: 'Task submitted', task });
  } catch (err) {
    res.status(500).json({ error: 'Task submission failed' });
  }
});

module.exports = router;
