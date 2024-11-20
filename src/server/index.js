import express from 'express'; 
import cors from 'cors';
import bodyParser from 'body-parser';
// import { MobileUpdate } from '../utils/database.ts';
import {MongoClient, ServerApiVersion} from 'mongodb';

export const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://prprabdul:gazzali1997@thespecialists.dgduo.mongodb.net/?retryWrites=true&w=majority&appName=thespecialists";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const dbName = 'mydatabase';

// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit-number', async (req, res) => {
  const mobileInput = parseInt(req.body.mobile);
  if (isNaN(mobileInput)) {
      return res.status(400).json({ message: "Invalid mobile number!" });
  }

  try {
      const client = new MongoClient(url);
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('mobileNumbers');
      
      await collection.insertOne({ mobile: mobileInput });
      await client.close();

      // Respond with JSON instead of plain text
      res.json({ message: `Mobile number ${mobileInput} has been saved to the database!` });
  } catch (error) {
      // Return error in JSON format
      res.status(500).json({ message: "Error saving the mobile number to the database." });
  }
});

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});