import React, { FC, ReactElement, Component, Fragment, useState } from 'react'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
    {
      title: 'Decentraland',
      size: 'Verify to Enable Chat',
      source:
        'https://cryptologos.cc/logos/decentraland-mana-logo.png',
    },
    {
      title: 'Splinterlands',
      size: 'Chat Enabled',
      source:
        'https://images.hive.blog/DQmSpQZv6jVH9i3Xv5UQRsMz6FHMjfxMmH7iwEVtkFMoykR/portada.png',
    },
    {
      title: 'Alien Worlds',
      size: 'Chat Enabled',
      source:
        'https://s3-eu-west-1.amazonaws.com/tpd/logos/6064a2be38339e00018eca1c/0x0.png',
    },
    {
      title: 'DeFi Kingdoms',
      size: 'Chat Enabled',
      source:
        'https://pbs.twimg.com/profile_images/1501255657974026243/defG5I7h_400x400.jpg',
    },
  ]
  
  const Games = () => {
    // const [open, setOpen] = useState(true)
    // <button onClick={() => setOpen(true)}>Open</button>

    return (
      <>
        {/* <ContactList open={open} setOpen={setOpen}/> */}
        <ul role="list" className="p-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-w-7 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                <button type="button" onClick={() => setOpen(true)} className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

export default Games;