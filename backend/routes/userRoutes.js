// router.js

import express from 'express';
import mongoose from 'mongoose';
import { signupUser } from '../controllers/userController.js';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Declare gridfsBucket in the outer scope
let gridfsBucket;

// Connect to MongoDB without using top-level await
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Event listener for successful connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB.');

    // Initialize GridFSBucket after connection is open
    gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'profilePictures',
    });

    console.log('GridFSBucket initialized.');
});

// Event listener for connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
});

// Middleware to ensure GridFSBucket is initialized
const checkGridfsBucket = (req, res, next) => {
    if (!gridfsBucket) {
        console.log("File storage not initialized");
        return res.status(500).json({ message: 'File storage not initialized' });
    }
    next();
};

// Set up multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle user signup with profile picture upload
router.post('/', checkGridfsBucket, upload.single('profilePicture'), (req, res) => {
    try {
        // Ensure a file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { buffer, originalname, mimetype } = req.file;
        console.log("0"); // Indicates the route has been hit and file is present

        // Create an upload stream to GridFS
        const uploadStream = gridfsBucket.openUploadStream(originalname, {
            contentType: mimetype,
            metadata: {
                fieldName: 'profilePicture',
            },
        });

        console.log("1"); // Before ending the upload stream

        // End the upload stream with the file buffer
        uploadStream.end(buffer);

        console.log("2"); // After ending the upload stream

        // Handle the finish event to proceed with user signup
        uploadStream.on('finish', () => {
            console.log("3"); // After the file has been successfully uploaded to GridFS

            // Attach the uploaded file's ID to the request body for the controller
            req.body.profilePictureId = uploadStream.id;

            // Proceed to handle user signup
            signupUser(req, res);
        });

        // Handle errors during the upload process
        uploadStream.on('error', (err) => {
            console.error('GridFS upload error:', err);
            return res.status(500).json({ message: 'File upload failed', error: err.message });
        });

    } catch (error) {
        console.error('Error in upload route:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Route to fetch profile picture by ID
router.get('/profilePicture/:id', checkGridfsBucket, async (req, res) => {
    try {
        // Ensure valid ObjectId format
        const fileId = new mongoose.Types.ObjectId(req.params.id);
        console.log('Fetching profile picture with ID:', fileId);

        // Ensure gridfsBucket is initialized
        if (!gridfsBucket) {
            console.error('gridfsBucket is not initialized');
            return res.status(500).json({ message: 'File storage not initialized' });
        }

        // Check if the file exists in GridFS
        const files = await gridfsBucket.find({ _id: fileId }).toArray();
        if (!files || files.length === 0) {
            console.error('File not found in GridFS');
            return res.status(404).json({ message: 'File not found' });
        }

        // Dynamically set Content-Type based on file metadata (if available)
        const file = files[0];
        res.set('Content-Type', file.contentType || 'application/octet-stream');

        // Create a download stream from GridFS
        const downloadStream = gridfsBucket.openDownloadStream(fileId);

        // Handle errors during the download process
        downloadStream.on('error', (err) => {
            console.error('GridFS download error:', err);
            return res.status(404).json({ message: 'Error retrieving file' });
        });

        // Pipe the download stream to the response
        downloadStream.pipe(res);
    } catch (error) {
        // Handle errors like invalid ObjectId format or server issues
        console.error('Error in download route:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

export default router;
