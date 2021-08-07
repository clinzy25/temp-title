const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: String,
  avatar: String,
  displayName: {
    type: String,
  },
  /** Array of feed references from feed collection */
  feeds: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feed' }],
    required: true,
  },
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
