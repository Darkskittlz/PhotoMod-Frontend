import express from 'express';
import dotenv from 'dotenv';
var router = express.Router();
dotenv.config();
const { OAuth2Client } = require('google-auth-library');

async function getUserData(access_token) {
  const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}');
  const data = await response.json();
  console.log('data: ', data);
}

router.get('/', async function (req, res, next) {
  const code = req.query.code;
  console.log("code: ", code);

  try {
    const redirectUrl = 'http://127.0.0.1:3000/oath';
    const oAuth2Client = newAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );

    const res = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(res.tokens);
    console.log("Tokens acquired");
    const user = oAuth2Client.credentials;
    console.log("Credentials: ", user);
    await getUserData(user.access_token);
  } catch (err) {
    console.log('Error signing in with Google')
  }
});

module.exports = router;
