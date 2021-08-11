const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../../app');
const { mongoConnect, mongoDisconnect } = require('../../utils/mongo');

/** Create an agent to fake authenticate and make test protected endpoints */
const agent = request.agent(app);

describe('Users API', () => {
  beforeAll(async () => {
    dotenv.config();
    await mongoConnect();
    /** Call fake auth endpoint in app.js to mimic authentication */
    await agent.get('/auth/fake');
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('Test GET /users', () => {
    test('Should respond with 200 success', async () => {
      await agent.get('/users').expect(200);
    });
    test('Should respond with 401 unauthorized', async () => {
      await request(app).get('/users').expect(401);
    });
  });
});
