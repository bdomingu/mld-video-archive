import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface Database {
    db: mongoose.Connection;
  }
  
  const connectToDatabase = async (): Promise<Database> => {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    } else {
      await mongoose.connect(MONGODB_URI);
      const connection = mongoose.connection
      console.log("connected to the db")
      return { db: connection };
    }
  };

export default connectToDatabase;