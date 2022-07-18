import React from 'react'
import './Message.scss'

interface MessageProps{
    userName: string;
    text: string;
    content?: string[]; 
    variant?: 'interlocutor'|'owner';
    timestamp: string;
}
Message.defaultProps= {variant: 'interlocutor'};
function Message({userName,text,variant,timestamp,content}:MessageProps) {
  
  return (
    <div>
      <p className={variant=='owner' ? "chat_message chat_receiver" : "chat_message"}>
        <span className='chat_name'>{variant!='owner' ? userName : "Я"}</span>
        This is a message
        <span className='chat_timestamp'>{new Date().toUTCString()}</span>
      </p>
    </div>
  )
}

export default Message