import styled from "styled-components"

// Global Styling
export const GridContainer = styled.div`
    height: 90vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 999;
`

export const LoadingContainer = styled.div`
    height: 90vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 999;

    img {
        border-radius: 10px;
    }
`

// Home Styling
export const HomeContainer = styled.div`
    backdrop-filter: blur(15px);
    z-index: 999;
    display: flex;
    width: 99.5%;
    margin-top: 0px;
    padding: 5px;
    align-content: center;    
    display: flex;
    justify-content: space-between;
`       

export const TitleContainer = styled.div`
    display: flex;

    h1 {
        font-size: 20px;
        color: white;
    }
`

export const UserContainer = styled.div`
    display: flex;
    align-items: end;

    h2 {
        font-size: 15px;
    }
`

export const LogoutContainer = styled.div`
    display: flex;
    margin-right: 2px;

    button {
        margin-top: 10px;
      }
`


// Chat Styling
export const ChatContainer = styled.div`
    z-index: 999;
    position:relative;
    backdrop-filter: blur(10px);
    height: 85vh; 
    margin-top: 8px;
    margin-bottom: 50px;

    button#chatButton {
        margin-top: 20px;
        width: 50%;
        z-index: 999;
        cursor: pointer;
        margin-left: 25%;
        background-color: red;
        color: white;
        text-align: center;
    }
`
