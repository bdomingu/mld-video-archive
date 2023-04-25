import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


interface Database {
    db: mongoose.Connection;
  }
  
  const connectToDatabase = (): Database => {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    } else {
      const connection = mongoose.createConnection(MONGODB_URI);
      console.log("connected to the db")
      return { db: connection };
    }
  };

export default connectToDatabase;