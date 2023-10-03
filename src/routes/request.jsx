import express from 'express';
import dotenv from 'dotenv';
var router = express.Router();
dotenv.config();
const { OAuth2Client } = require('google-auth-library');

// Get users listing. 
router.post('/', async function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Referrer-Policy', 'no-referrer-when-downgrade');

  const redirectUrl = 'http://127.0.0.1:3000/oath';

  const oAuth2Client = newAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
    prompt: 'consent'
  });

  res.json({ url: authorizeUrl })

});

module.exports = router 
