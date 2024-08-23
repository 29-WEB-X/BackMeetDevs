import supertest from 'supertest';
import api from '../src/api.js';
import { connect, disconnect } from './setup.js';

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

    await connect();

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

    await disconnect();
  });
  test('Duplicated nickname or email', async () => {
    await connect();

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

    expect(responseSecondUser.statusCode).toBe(400);
    expect(responseSecondUser.body.msg).toBe('Duplicated user');

    await disconnect();
  });
  test('Empty body', async () => {
    const response = await supertest(api).post('/auth/register').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.msg).toBe('Invalid Body');
  });
});

//TEST login
/**
 * login 200
 * login con credenciales erroneas
 * login con campos incompletos
 */
