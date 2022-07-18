import React from 'react'
import "./Sidebar.css"
import { Chat as ChatIcon, DonutLarge, MoreVert as MoreVertIcon, SearchOutlined } from '@mui/icons-material'
import {Avatar, IconButton} from '@mui/material'
import Room from './RoomPreview'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <Avatar src="https://sun9-east.userapi.com/sun9-31/s/v1/if2/ISoD0OCNmoimRcvPnJLUhTZZQRqCHA5Uu_QaxmEaLQHpIuJvy_j69mikSkwUbAfhGm8qG4QYbA8MoI2pT6wzMFE6.jpg?size=549x686&quality=95&type=album"/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined/>
          <input placeholder='Search or start new chat' type="text"/>
        </div>
      </div>

      <div className="sidebar_rooms">
        <Room/>
        <Room/>
        <Room/>

      </div>
    </div>
  )
}

export default Sidebar