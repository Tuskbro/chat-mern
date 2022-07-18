import React from 'react'
import { Chat } from '../Chat'
import './Room.scss'
import RoomHeader from './RoomHeader'

function Room() {
  return (
    <div className='room'>
        <RoomHeader/>
        <Chat/>
    </div>
  )
}

export default Room