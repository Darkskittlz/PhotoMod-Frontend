import './Styles/App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './services/firebase';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';


const GoogleKey = `${import.meta.env.VITE_GOOGLE_KEY}`


const App = () => {
  const [user, setUser] = useState(undefined);
  initializeApp(firebaseConfig);

  const ProtectedRoute = ({ element }) => {
    if (!user) {
      // Redirect to the login page if user is undefined
      return <Navigate to="/" />;
    }

    // Render the component if the user is defined
    return element;
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={<Login onAuth={(user) => setUser(user)} />}
          />
          <Route
            path="/home"
            element={<ProtectedRoute element={<Home user={user} />} />}
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
