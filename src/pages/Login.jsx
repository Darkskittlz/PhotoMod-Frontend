import '../Styles/App.css';
import React, { useState, useEffect } from "react";
import { StarBackground } from '../components/Space.jsx'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GridContainer, LoadingContainer } from '../Styles/Styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loadingGif from "../assets/car.gif"

const GoogleKey = `${import.meta.env.VITE_GOOGLE_KEY}`


const Login = (props) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState([]);
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();
    const [email, setEmail] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const navigate = useNavigate();

    const forwardHome = () => {
        navigate('/home')
    }

    // const responseMessage = (response) => {
    //     console.log(response);
    // };

    // const errorMessage = (error) => {
    //     console.log(error);
    // };

    // useEffect(
    //     () => {
    //         if (user) {
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     setProfile(res.data);
    //                 })
    //                 .catch(
    //                     // (err) => console.log(err)
    //                     console.log("There is an ERROR!")
    //                 );
    //         }
    //     },
    //     [user]
    // );



    const onSubmit = async (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        props.onAuth({ username: value, secret: value });

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/authenticate', {
                username: value,
            });

            props.onAuth({ ...response.data, secret: value });
            forwardHome();
        } catch (e) {
            console.error('error: ', e);
            if (e.response) {
                console.error('Response Data:', e.response.data);
                console.error('Response Status:', e.response.status);
            }
        } finally {
            // Set loading to false after the request is completed
            setLoading(false);
        }

        // axios.post(
        //     'http://localhost:3001/authenticate',
        //     { username: value }
        // )
        //     .then((r) => {
        //         props.onAuth({ ...r.data, secret: value });
        //         forwardHome();
        //     })
        //     .catch((e) => {
        //         console.error('error: ', e);
        //         if (error.response) {
        //             console.error('Response Data:', error.response.data);
        //             console.error('Response Status:', error.response.status);
        //         }
        //     })
    };

    return (
        <>
            {loading ? (
                <LoadingContainer>
                    <img src={loadingGif} alt="Loading..." />
                </LoadingContainer>
            ) : (
                <GoogleOAuthProvider clientId={GoogleKey}>
                    <StarBackground />
                    <GridContainer>
                        <div className="form">
                            <form onSubmit={onSubmit} className="form-card">
                                <div className="form-title">Welcome 👋</div>
                                <div className="form-subtitle">Set a username to get started</div>
                                <div className="auth">
                                    <div className="auth-label">Username</div>
                                    <input className="auth-input" name="username" />
                                    <button className="auth-button" type="submit">
                                        Enter
                                    </button>
                                </div>
                            </form>
                            {/* <div className="GoogleAuth">
                        <GoogleLogin
                            onSuccess={responseMessage}
                            onError={errorMessage}
                        />
                    </div> */}
                        </div>
                    </GridContainer>
                </GoogleOAuthProvider>
            )}
        </>
    );
}

export default Login;
