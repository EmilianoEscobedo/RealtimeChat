import React from 'react'
import { Channels } from '../components/Channels'
import { Chat } from '../components/Chat'
import '../assets/css/chatbox.css'

export const ChatBox = () => {
  return (
    <>
        <div className='container__chatBox'>
        <Channels></Channels>
        <Chat></Chat>
        </div>
    </>
  )
}
