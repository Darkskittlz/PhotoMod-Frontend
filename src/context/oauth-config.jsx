// import { createOAuthConfiguration } from '@react-oauth/google';
// There is something wrong with the above import. Its not defined in the package node_modules


const oauthConfig = createOAuthConfiguration({
  google: {     
    clientId: `${import.meta.env.VITE_GOOGLE_KEY}`,
    redirectUri: 'http://localhost:5137/auth/google/callback', // Your callback URL
  },
});

export default oauthConfig;
//
//
