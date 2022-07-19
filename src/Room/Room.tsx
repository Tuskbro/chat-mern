import React from 'react'
import { Chat } from '../Chat'
import ChatInput from '../Chat/ChatInput'
import './Room.scss'
import RoomHeader from './RoomHeader'

function Room() {
  return (
    <div className='room'>
        <RoomHeader/>
        <Chat/>
        <ChatInput/>
    </div>
  )
}

export default Room