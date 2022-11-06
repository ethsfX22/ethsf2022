import React, { FC, ReactElement, Component, Fragment, useState } from 'react'

  const Chat = () => {
    return (
      <div className="flex flex-col items-center mt-10 text-sm">
        <a href="https://xmtp.vercel.app/">Visit <span class="font-bold">https://xmtp.vercel.app/</span> to view chat client</a>
      
        <div className="px-3 py-5">
          <a>To join the Decentraland GameChat Server, simply send a <span class="font-bold">/join</span> message request to the GameChat <span class="font-bold">server address</span> viewable on the Game tab.</a>
        </div>

        {/* <div className="px-10 py-5">
          For example, try sending...
        </div> */}
      
      </div>
    )
  }

export default Chat;