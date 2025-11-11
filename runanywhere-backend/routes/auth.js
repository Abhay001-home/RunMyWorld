// routes/auth.js  ← FULLY FIXED VERSION
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ADD THIS LINE TO FIX BODY PARSING
router.use(express.json());

// Signup
router.post('/signup', async (req, res) => {
     try {
          const { name, email, password } = req.body || {};  // ← SAFE DESTRUCTURE

          if (!name || !email || !password) {
               return res.status(400).json({ error: 'Name, email, and password are required' });
          }

          if (await User.findOne({ email })) {
               return res.status(400).json({ error: 'User already exists' });
          }

          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User({ name, email, password: hashedPassword });
          await user.save();

          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
          res.json({ token, user: { id: user._id, name, email } });
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: 'Server error' });
     }
});

// Login
router.post('/login', async (req, res) => {
     try {
          const { email, password } = req.body || {};

          if (!email || !password) {
               return res.status(400).json({ error: 'Email and password required' });
          }

          const user = await User.findOne({ email });
          if (!user) return res.status(401).json({ error: 'Invalid email or password' });

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
          res.json({ token, user: { id: user._id, name: user.name, email } });
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: 'Server error' });
     }
});

module.exports = router;