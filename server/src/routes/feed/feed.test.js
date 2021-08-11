const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../../app');
const feeds = require('../../models/feed/feed.mongo');
const { mongoConnect, mongoDisconnect } = require('../../utils/mongo');

/** Create an agent to fake authenticate and make test protected endpoints */
const agent = request.agent(app);

describe('Feeds API', () => {
  beforeAll(async () => {
    dotenv.config();
    await mongoConnect();
    /** Call fake auth endpoint in app.js to mimic authentication */
    await agent.get('/auth/fake');
  });

  afterAll(async () => {
    await feeds.collection.deleteMany({ feedTitle: 'Test feed' });
    await mongoDisconnect();
  });

  describe('Test POST /feeds/create', () => {
    test('Should add feed to db', async () => {
      const userDefinedFeedData = {
        host_id: '6101c1654cc7fd48e020fdd9',
        feedTitle: 'Test feed',
      };
      const completeFeed = {
        host_id: '6101c1654cc7fd48e020fdd9',
        feedTitle: 'Test feed',
        _id: expect.any(String),
        posts: [],
        canSubsPost: false,
        inviteLink: 'Temp-link',
        subscribers: [],
        removedSubscribers: [],
        lastActive: true,
      };

      const response = await agent
        .post('/feeds/create')
        .send(userDefinedFeedData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body).toEqual(completeFeed);
    });

    test('Should catch missing required property', async () => {
      const userDefinedFeedData = {
        host_id: '6101c1654cc7fd48e020fdd9',
        /** Missing 'feedTitle' prop */
      };

      const response = await agent
        .post('/feeds/create')
        .send(userDefinedFeedData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: 'Missing required feed property',
      });
    });

    test('Should respond with 401 Unauthorized', async () => {
      await request(app).post('/feeds/create').expect(401);
    });
  });

  describe('Test POST /feeds', () => {
    const result = {
      posts: [],
      subscribers: [],
      removedSubscribers: [],
      _id: expect.any(String),
      host_id: '6101c1654cc7fd48e020fdd9',
      feedTitle: 'Test feed',
      canSubsPost: false,
      inviteLink: 'Temp-link',
      lastActive: true,
      __v: 0,
    };

    test('Should return feed by userId only, lastActive should be true', async () => {
      const response = await agent
        .post('/feeds')
        .expect('Content-type', /json/)
        .expect(200);

      expect(response.body).toStrictEqual(result);
      expect(response.body.lastActive).toStrictEqual(true);
    });

    test('Should return feed by feed title, lastActive should be true', async () => {
      const response = await agent
        .post('/feeds')
        .send({ feedTitle: 'Test feed' })
        .expect('Content-type', /json/)
        .expect(200);

      expect(response.body).toStrictEqual(result);
      expect(response.body.lastActive).toStrictEqual(true);
    });

    test('Should catch invalid feed title', async () => {
      const response = await agent
        .post('/feeds')
        .send({ feedTitle: 'Non-existent Feed' })
        .expect('Content-type', /json/)
        .expect(404);

      expect(response.body).toStrictEqual({
        error: 'Feed not found',
      });
    });

    test('Should respond with 401 Unauthorized', async () => {
      await request(app).post('/feeds').expect(401);
    });
  });
});
