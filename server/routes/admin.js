const express = require('express');
const router = express.Router();
const { Task, User } = require('../models');
const jwt = require('jsonwebtoken');

// Middleware for admin
function adminAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ error: 'No token' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Get all tasks with user info
router.get('/tasks', adminAuth, async (req, res) => {
  try {
    const tasks = await Task.findAll({ include: [User] });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

module.exports = router;
