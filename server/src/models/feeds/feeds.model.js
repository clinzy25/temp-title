const mongoose = require('mongoose');
const feeds = require('./feeds.mongo');
const users = require('../users/users.mongo');

/**
 * Get last feed viewed by host by their user id
 * @param {string} userId
 * @returns {object} A user
 */
async function findFeed(userId) {
  try {
    return await feeds.findOne({ host_id: userId, lastActive: true });
  } catch (error) {
    console.error('Could not find feed');
    return error;
  }
}

/** TODO: generate links */
function generateInviteLink() {
  return 'Temp-link';
}

/**
 * Add new feed to db
 * @param {object} feed -- Host specified values (feedTitle) and user id
 * @returns {object} a complete feed with user selected values and default values
 */
async function addFeed(feed) {
  const inviteLink = generateInviteLink();

  /** Add default values */
  const newFeed = Object.assign(feed, {
    _id: new mongoose.Types.ObjectId(),
    posts: [],
    canSubsPost: false,
    inviteLink,
    subscribers: [],
    removedSubscribers: [],
    lastActive: true,
  });

  /** Add feed id to user's feed array */
  await users.updateOne(
    { _id: feed.host_id },
    { $push: { feeds: newFeed._id } }
  );

  /** Create feed document in feeds collection */
  await feeds.create(newFeed);

  return newFeed;
}

module.exports = {
  findFeed,
  addFeed,
};
