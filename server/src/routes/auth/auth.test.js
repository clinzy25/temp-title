const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../../app');
const { insertTempData } = require('../../models/feeds/feeds.model');
const { mongoConnect, mongoDisconnect } = require('../../utils/mongo');

describe('Users API', () => {
  beforeAll(async () => {
    dotenv.config();
    await mongoConnect();
    await insertTempData();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('Test GET /users', () => {
    test('Should respond with 200 success', async () => {
      const newUser = {
        provider: 'google',
        userName: 'testUser01',
        email: 'test@gmail.com',
        displayName: 'Test User',
        avatar: 'testing.url',
      };
      const response = await request(app)
        .get('/users')
        .expect(200);
    });
  });

  // describe('Test GET /feeds', () => {
  //   test('Should respond with 200 success', async () => {
  //     const response = await request(app).get('/feeds').expect(200);
  //   });
  // });
});
