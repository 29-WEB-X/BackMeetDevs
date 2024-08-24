import { connect, disconnect } from './setup';
beforeEach(async () => {
  await connect();
});

afterEach(async () => {
  await disconnect();
});
