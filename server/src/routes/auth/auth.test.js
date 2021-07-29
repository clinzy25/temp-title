const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../../app');
const { insertTempData } = require('../../models/feeds/feeds.model');
const { mongoConnect, mongoDisconnect } = require('../../utils/mongo');
const { expectCt } = require('helmet');

describe('Users API', () => {
  beforeAll(async () => {
    dotenv.config();
    await mongoConnect();
    await insertTempData();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  // describe('Test GET /users', () => {
  //   test('Should respond with 200 success', async () => {
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
  //   });
  // });

  describe('Test GET /feeds', () => {
    test('Should respond with 201 created', async () => {
      const response = await (
        await request(app).post('/feeds/create')
      )
        .send({
          host_id: 10510540804,
          feedTitle: 'newFeed',
        })
        .expect('Content-Type', /json/)
        .expect(201);
    });
  });
})
