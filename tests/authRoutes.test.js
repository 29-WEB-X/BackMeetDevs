import supertest from 'supertest';
import api from '../src/api.js';

//TEST register
/**
 * register 200
 * register con nickname o email duplicado
 * register con body vacío
 */

describe('Test /auth/register', () => {
  test('200 - Register', async () => {
    /**
     * mandar llamar a la ruta /auth/register
     * comprobar que regresa un 200
     */

    const response = await supertest(api).post('/auth/register').send({
      name: 'Fernando',
      email: 'fernando@prueba.com',
      birthday: '1998-10-23',
      country: 'México',
      gender: 'Male',
      nickname: 'ferservo98',
      profession: 'BackendDev',
      password: '123',
    });

    expect(response.statusCode).toBe(201);
  });
  test('Duplicated nickname or email', async () => {
    const responseFirstUser = await supertest(api).post('/auth/register').send({
      name: 'Fernando',
      email: 'fernando@prueba.com',
      birthday: '1998-10-23',
      country: 'México',
      gender: 'Male',
      nickname: 'ferservo98',
      profession: 'BackendDev',
      password: '123',
    });

    expect(responseFirstUser.statusCode).toBe(201);

    const responseSecondUser = await supertest(api)
      .post('/auth/register')
      .send({
        name: 'Fernando',
        email: 'fernando@prueba.com',
        birthday: '1998-10-23',
        country: 'México',
        gender: 'Male',
        nickname: 'ferservo98',
        profession: 'BackendDev',
        password: '123',
      });

    expect(responseSecondUser.statusCode).toBe(404);
    expect(responseSecondUser.body.code).toBe('DUPLICATED_USER');
  });
  test('Empty body', async () => {
    const response = await supertest(api).post('/auth/register').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.code).toBe('INVALID_BODY');
  });
});

//TEST login
/**
 * login 200
 * login con credenciales erroneas
 * login con campos incompletos
 */

// describe('Test /auth/login');
