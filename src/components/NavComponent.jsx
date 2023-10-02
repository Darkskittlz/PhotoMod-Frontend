import React from 'react'
import { HomeContainer, LogoutContainer, TitleContainer, UserContainer } from '../Styles/Styles'
import { Link } from 'react-router-dom';


const NavComponent = (props) => {
    return (
        <HomeContainer>
            <UserContainer>
                <h2>User: {props.user.username}</h2>
            </UserContainer>
            <TitleContainer>
                <h1>Home</h1>
            </TitleContainer>
            <LogoutContainer>
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </LogoutContainer>
        </HomeContainer>
    )
}

export default NavComponent