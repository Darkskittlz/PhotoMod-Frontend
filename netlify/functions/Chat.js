import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: '*', // Allow requests from any origin (for development)
    methods: ['GET', 'POST'], // Define the HTTP methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Define the allowed headers
  })
);

const authenticate = async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { 'private-key': 'ff622dd3-fb29-499d-b30b-24adacfc2145' } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: 'sha256...' });
};

// Define your route using the .post method
app.post('/', authenticate);


export { app as handler };