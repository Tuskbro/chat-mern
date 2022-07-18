import React from 'react'
import './Chat.scss';
import Message from './Message';
function Chat() {
  return (
    <div className='chat'>
      <Message userName='Mityo' text="this is a message" timestamp={new Date().toUTCString()}/>
      <Message userName='Mityo' text="this is a message" timestamp={new Date().toUTCString()} variant='owner'/>
      <Message userName='Mityo' text="this is a message" timestamp={new Date().toUTCString()}/>
    </div>
  )
}

export default Chat