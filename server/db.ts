import type { ConnectOptions } from 'mongoose';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI as string;
        console.log(MONGODB_URI)
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('Connected to database');
    } catch (error: any) {
        console.error(error.message)
    }
}

export default connectToDatabase;