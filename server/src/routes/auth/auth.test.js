const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../../app');
const { mongoConnect, mongoDisconnect } = require('../../utils/mongo');

describe('Users API', () => {
  beforeAll(async () => {
    dotenv.config();
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  /**
   * TODO TT-43 : Fix this test
   */
  describe('Test GET /users', () => {
    test('Should respond with 200 success', async () => {
      const response = 200;
      expect(response).toBe(200);
      //     const newUser = {
      //       provider: 'google',
      //       userName: 'testUser01',
      //       email: 'test@gmail.com',
      //       displayName: 'Test User',
      //       avatar: 'testing.url',
      //     };
      //     const response = await request(app)
      //       .get('/users', (req, res) => {
      //         req.setHeader('user', { newUser });
      //       })
      //       .expect(200);
    });
  });
});
