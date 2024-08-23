import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongoServer;

const connect = async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
};

const disconnect = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

export { connect, disconnect };
