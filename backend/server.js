import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import exampleRoutes from './routes/exampleRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/examples', exampleRoutes);
app.use('/signup',userRoutes);

const port =  process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
