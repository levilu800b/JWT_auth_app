import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set('strictQuery', true);
  const db = await mongoose.connect(process.env.ATLAS_URI); // Use environment variable
  console.log('Database Connected');
  return db;
}

export default connect;
