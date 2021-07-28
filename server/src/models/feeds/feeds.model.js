const mongoose = require('mongoose');
const feeds = require('./feeds.mongo');
const users = require('../users/users.mongo');

async function findFeed(userId) {
  try {
    return await feeds.findOne({ host_id: userId, lastActive: true});
  } catch (error) {
    console.error('Could not find feed');
    return error;
  }
}

/** TODO: generate links */
function generateInviteLink() {
  return 'Temp-link';
}

async function addFeed(feed) {
  const inviteLink = generateInviteLink();

  const newFeed = Object.assign(feed, {
    _id: new mongoose.Types.ObjectId(),
    posts: [],
    canSubsPost: false,
    inviteLink,
    subscribers: [],
    removedSubscribers: [],
    lastActive: true,
  });
  await users.updateOne(
    { _id: feed.host_id },
    { $push: { feeds: newFeed._id } }
  );
  await feeds.create(newFeed);
  return newFeed;
}

/**
 * Insert mock data
 */
const mockFeed = {
  host_id: '60fee6c8505ba042ec0bdd55',
  feedTitle: 'Temp-title',
  posts: [],
  canSubsPost: false,
  inviteLink: 'temp-link',
  subscribers: [],
  removedSubscribers: [],
  lastActive: true,
};

async function insertTempData() {
  // await feeds.deleteMany({});
  // await feeds.create(mockFeed);
}

module.exports = {
  insertTempData,
  findFeed,
  addFeed,
};
