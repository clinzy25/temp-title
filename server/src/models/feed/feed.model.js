const mongoose = require('mongoose');
const feeds = require('./feed.mongo');
const users = require('../user/user.mongo');

/** TODO: generate links */
function generateInviteLink() {
  return 'Temp-link';
}

/**
 * Find users last active feed and set 'lastActive' to false
 * @param {string} userId
 * @returns null
 */
async function setLastActive(userId) {
  try {
    return await feeds.updateOne(
      { host_id: userId, lastActive: true },
      { lastActive: false }
    );
  } catch (error) {
    console.error('Could not update feed in db');
    return error;
  }
}

/**
 * Get feed by uid and title if provided
 * otherwise get lastActive feed by uid where 'lastActive is true
 * @param {string} feedTitle
 * @param {string} userId
 * @returns {object} A user
 */
async function findFeed(userId, feedTitle) {
  try {
    /** If no feed title, user is logging in or refreshing the page, so query by 'lastActive' */
    if (!feedTitle) {
      return await feeds.findOne({ host_id: userId, lastActive: true });
    }

    await setLastActive(userId);

    /** If feed title, user is selecting a specific feed, so query by 'feedTitle' */
    return await feeds.findOneAndUpdate(
      { host_id: userId, feedTitle },
      { lastActive: true }
    );
  } catch (error) {
    console.error('Could not find feed in db');
    return error;
  }
}

/**
 * Add new feed to db
 * @param {{host_id: string, feedTitle: string}} feed -- Host specified values (feedTitle) and uid
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

  try {
    /** Add feed id to user's feed array */
    const feedForUserSchema = {
      feedId: newFeed._id,
      feedTitle: newFeed.feedTitle,
    };
    await users.updateOne(
      { _id: feed.host_id },
      { $push: { feeds: feedForUserSchema } }
    );

    /** Create feed document in feeds collection */
    await feeds.create(newFeed);

    await setLastActive(feed.host_id);
  } catch (error) {
    console.error('Could not create feed in db: ', error);
    return error;
  }

  return newFeed;
}

module.exports = {
  findFeed,
  addFeed,
};
