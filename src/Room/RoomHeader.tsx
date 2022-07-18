import { AttachFile as AttachFileIcon,
     Search as SearchIcon,
      MoreVert as MoreVertIcon  
} from '@mui/icons-material'

import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './RoomHeader.scss'

function RoomHeader() {
  return (
    <div className='roomHeader'>
        <Avatar/>
        <div className="roomHeader_info">
            <h2>Mityo</h2>
            <p>last seen at</p>
        </div>
        <div className="roomHeaderRight">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            
            <IconButton>
                <AttachFileIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default RoomHeader