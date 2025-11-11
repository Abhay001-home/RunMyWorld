const express = require('express');
const router = express.Router();
const Device = require('../models/Device');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', async (req, res) => {
     const devices = await Device.find();
     res.json(devices);
});

router.post('/', async (req, res) => {
     const device = new Device(req.body);
     await device.save();
     res.json(device);
});

module.exports = router;