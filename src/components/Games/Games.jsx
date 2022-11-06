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
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        'https://cryptologos.cc/logos/decentraland-mana-logo.png',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
          'https://cryptologos.cc/logos/decentraland-mana-logo.png',
      },
      {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
          'https://cryptologos.cc/logos/decentraland-mana-logo.png',
      },
      {
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        'https://cryptologos.cc/logos/decentraland-mana-logo.png',
    },
    {
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        'https://cryptologos.cc/logos/decentraland-mana-logo.png',
    },
    {
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        'https://cryptologos.cc/logos/decentraland-mana-logo.png',
    },
    // More files...
  ]
  
  const Games = () => {
    return (
      <>
        <ul role="list" className="p-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-w-7 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                <button type="button" onClick={() => setOpen(true)} className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }

export default Games;