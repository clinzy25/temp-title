const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  feeds: {
    type: [Object],
    required: true,
  },
});

module.exports = mongoose.model('User', usersSchema);
