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

  // Log that the serverless function received a request
  console.log('Received request with username:', username);

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { 'private-key': 'ff622dd3-fb29-499d-b30b-24adacfc2145' } }
    );

    // Log successful response
    console.log('Success - Response:', r.status, r.data);

    // Return the response
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Log error and response data if available
    console.error('Error:', e);
    if (e.response) {
      console.error('Response Data:', e.response.data);
      console.error('Response Status:', e.response.status);
    }

    // Return the error response
    return res.status(e.response.status).json(e.response.data);
  } finally {
    // Log that the function completed
    console.log('Function completed');
  }
};

// Define your route using the .post method
app.post('/', authenticate);

export { app as handler };
