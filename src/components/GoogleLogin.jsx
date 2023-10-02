import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
// import oauthConfig from '../context/oauth-config.jsx'; 

const GoogleLoginComponent = () => {
  const { openOAuthPopup } = useOAuth(oauthConfig);

  const handleGoogleLogin = async () => {
    try {
      // Open the Google OAuth popup for login
      await openOAuthPopup('google');   
    } catch (error) {
      // Handle errors if needed
      console.error('Google login error', error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLoginComponent;      
