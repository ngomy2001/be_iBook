const SuperRequest = require('supertest');
const app = require('../app');
const database = require('../database/connect');
const { INVALID_PASSWORD } = require('../Constants/message');

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.disconnect();
});

const mockUser = {
  email: 'myngo1234567@gmail.com3',
  password: 'abc123456',
};
describe('POST /api/auth/login', () => {
  test('Login Successfully return response with status 200 and token', async () => {
    const response = await SuperRequest(app)
      .post('/api/auth/login')
      .send(mockUser)
      .set('Accept', 'application/json');

    console.log(
      '🚀 ~ file: PostController.test.js ~ line 16 ~ test ~ response',
      response.body
    );

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
  });

  test('Login failed return response with status 400 when missing email', async () => {
    const response = await SuperRequest(app)
      .post('/api/auth/login')
      .send({ email: mockUser.email, password: '1234567' })
      .set('Accept', 'application/json');

    console.log(
      '🚀 ~ file: PostController.test.js ~ line 16 ~ test ~ response',
      response.body
    );

    expect(response.status).toBe(400);
    expect(response.text).toBe(INVALID_PASSWORD);
  });
});
