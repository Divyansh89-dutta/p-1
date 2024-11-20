// db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.connection.once('open', () => {
            console.log('Connected to MongoDB.');
            const gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
                bucketName: 'profilePictures',
            });
            console.log('GridFSBucket initialized.');
            resolve(gridfsBucket);
        });

        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err.message);
            reject(err);
        });
    });
};

export default connectDB;
