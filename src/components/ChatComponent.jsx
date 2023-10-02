import React, { useState } from 'react'
import "../Styles/App.css";
import { ChatContainer, GridContainer } from '../Styles/Styles'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatComponent = (props) => {
  const [chat, setChat] = useState(null);

  const openChat = () => {
    setChat(!chat);
  }

  const closeChat = () => {
    setChat(null);
  }


  const projectId = `${import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}`
  const username = props.user.username
  const secret = props.user.secret;


  return (
    <>
      {!chat && (
        <GridContainer>
          <button onClick={openChat}> Chat UI</button>
        </GridContainer>
      )}

      {chat && (
        <ChatContainer>
          <PrettyChatWindow
            projectId={projectId}
            username={username}
            secret={secret}
            style={{ zIndex: 999 }}
          />
          <button id="chatButton" onClick={closeChat}> Close </button>
        </ChatContainer>
      )}
    </>
  )
}

export default ChatComponent