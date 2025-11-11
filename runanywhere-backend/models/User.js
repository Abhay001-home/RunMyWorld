const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     name: String,
     email: { type: String, unique: true },
     password: String,
     role: { type: String, default: 'User' },
     settings: {
          theme: { type: String, default: 'dark' },
          notifications: { type: Boolean, default: true }
     }
});

module.exports = mongoose.model('User', UserSchema);