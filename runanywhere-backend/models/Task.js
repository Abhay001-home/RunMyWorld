const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
     name: String,
     type: String,
     time: String,
     device: String,
     status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);