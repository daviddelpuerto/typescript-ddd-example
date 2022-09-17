import 'reflect-metadata';
import request from 'supertest';
import { Server } from '../src/app/Server';
import '../src/Shared/infrastructure/bootstrap';

const port = process.env.NODE_PORT || '3000';
const server = new Server(port);

beforeAll(async () => {
  await server.listen();
});

afterAll(async () => {
  await server.stop();
});

test('Sending a GET request to the root endpoint returns status code 200', async () => {
  await request(server.httpServer)
    .get('/api')
    .expect(200);
});