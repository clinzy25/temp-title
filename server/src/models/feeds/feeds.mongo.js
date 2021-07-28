const mongoose = require('mongoose');

const feedsSchema = new mongoose.Schema({
  host_id: {
    type: 'ObjectId',
    ref: 'User',
    required: true,
  },
  feedTitle: {
    type: String,
    required: true,
  },
  posts: {
    type: [Object],
    required: true,
  },
  canSubsPost: {
    type: Boolean,
    required: true,
  },
  inviteLink: {
    type: String,
    required: true,
  },
  subscribers: {
    type: [Object],
    required: true,
  },
  removedSubscribers: {
    type: [Object],
    required: true,
  },
  lastActive: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Feed', feedsSchema);
