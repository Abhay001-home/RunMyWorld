const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
     name: String,
     os: String,
     status: { type: String, default: 'online' },
     lastSync: { type: Date, default: Date.now },
     taskCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Device', DeviceSchema);