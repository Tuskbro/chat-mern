import { InsertEmoticon, Mic } from '@mui/icons-material'
import React from 'react'
import "./ChatInput.scss"

function ChatInput() {
  return (
    <div className='chatInput'>
      <InsertEmoticon/>
      <form>
        <input type="text" name="messageInput" id="" placeholder='Type a message' />
        <button type="submit"></button>
        
      </form>
      <Mic/>
    </div>
  )
}

export default ChatInput