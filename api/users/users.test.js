const res = require('express/lib/response');
const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

describe('Test to api users endpoints', () => {
  describe('POST /users', () => {
    test('should respond with a 500  status code when a user do not use a email', async () => {
      const newUser = {
        email: "",
        firstName: "Jair Leonardo",
        lastName: "Gomez",
        password: "12345678"
      }
      const res = await request.post('/api/users').send(newUser);
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual('ValidationError: email: Email is a required field');
    });

    test('should respond with a 500  status code when a user use a email previusly registered', async () => {
      const newUser = {
        email: "jlopezsa@gmail.com",
        firstName: "Jair Leonardo",
        lastName: "Gomez",
        password: "12345678"
      }
      const res = await request.post('/api/users').send(newUser);
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual(`MongoServerError: E11000 duplicate key error collection: AssesmentBackEnd.users index: email_1 dup key: { email: \"jlopezsa@gmail.com\" }`);
    });

    test('should respond with a 500  status code when a user use a ligth password', async () => {
      const newUser = {
        email: "jlopezsa@gmail.com",
        firstName: "Jair Leonardo",
        lastName: "Gomez",
        password: "1234"
      }
      const res = await request.post('/api/users').send(newUser);
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual('ValidationError: password: Password length is less than 8 characters, try again!');
    });

    test('should respond with a 201 status code when a user is created', async () => {
      const newUser = {
        _id: "624fb5d8e7fe33365bb7ffff",
        email: "jairsalamanca@gmail.com",
        firstName: "Jair",
        lastName: "Salamanca",
        password: "12345678"
      }
      const res = await request.post('/api/users').send(newUser);
      expect(res.statusCode).toEqual(201);
    });

  });

  describe('GET all users endpoints', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/users');
      expect(res.statusCode).toEqual(201);
    });
  })

  describe('GET a user by ID endpoints', () => {
    test('should respond with a 201 status code when a user is found', async () => {
      const res = await request.get('/api/users/628801968c547396fb012499');
      expect(res.statusCode).toEqual(201);
    });

    test('should respond with a 500 when a user is not found', async () => {
      const res = await request.get('/api/users/aa8801968c547396fb0124ff');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({
        message: 'User is not found'
      });
    });
  })

  describe('DELETE to api users endpoints', () => {

    test('should respond with a 500 status code when the user is not found', async() => {
      const res = await request.delete('/api/users/6285ce6dd11ef87da76f2eff');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ message: `User is not found` });
    });

    test('should respond with a 201 status code when the user is deleted', async() => {
      const res = await request.delete('/api/users/624fb5d8e7fe33365bb7ffff');
      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual({ message : 'User was deleted'});
    });
  })
})
