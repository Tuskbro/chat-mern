import { Avatar } from '@mui/material'
import React from 'react'
import "./Room.css"

function Room() {
  return (
    <div className='sidebarRoom'>
        <Avatar src="https://sun9-west.userapi.com/sun9-2/s/v1/if2/c5FcL6muF1zGxfV47TjxFfvzsD1E8svguss7uf7lIH4dQ4JQ4mbQnCnR8JMROYozkySbaOCaNGAuHXYubzsGMrvz.jpg?size=836x1080&quality=95&type=album"/>
        <div className="sidebarRoom_info">
            <h2>Mityo</h2>
            <p>hello</p>
        </div>
    </div>
  )
}

export default Room