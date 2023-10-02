import React from 'react';
import { StarBackground } from '../components/Space.jsx'
import NavComponent from '../components/NavComponent.jsx';
import ChatComponent from '../components/ChatComponent.jsx';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const user = props.user;
    const navigate = useNavigate();

    if (user === undefined) {
        navigate("/")
    }
    return (
        <>
            <StarBackground />
            <NavComponent user={user} />
            <ChatComponent user={user} />
        </>
    )
}

export default Home
