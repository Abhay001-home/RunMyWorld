const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

router.use(auth); // All routes below need login

router.get('/', async (req, res) => {
     const tasks = await Task.find({ userId: req.userId });
     res.json(tasks);
});

router.post('/', async (req, res) => {
     const task = new Task({ ...req.body, userId: req.userId });
     await task.save();
     res.json(task);
});

router.put('/:id', async (req, res) => {
     const task = await Task.findOneAndUpdate(
          { _id: req.params.id, userId: req.userId },
          req.body,
          { new: true }
     );
     res.json(task);
});

router.delete('/:id', async (req, res) => {
     await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
     res.json({ success: true });
});

module.exports = router;