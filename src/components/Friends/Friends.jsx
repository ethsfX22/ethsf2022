import React, { FC, ReactElement, Component, Fragment, useState } from 'react'

import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const friends = [
  {
    name: 'Saharsh Agrawal',
    handle: 'saharshagrawal',
    href: '#',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-yWRrhM_Twud01WXFEkL3JYEcTxiHpTC8VdUtvbBtfhdCZ0qTGx0yGHV74uya3z5pPI&usqp=CAU',
    status: 'online',
  },
  {
    name: 'Vitalik Buterin',
    handle: 'Vitalik',
    href: '#',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg',
    status: 'offline',
  },
  {
    name: 'Sahil Manocha',
    handle: 'sahilmanocha',
    href: '#',
    imageUrl:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e',
    status: 'online',
  },
  // More people...
]

  const Friends = () => {

    return (
      <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
        {friends.map((person) => (
          <li key={person.handle}>
            <div className="group relative flex items-center py-6 px-5">
              <a href={person.href} className="-m-1 block flex-1 p-1">
                <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                <div className="relative flex min-w-0 flex-1 items-center">
                  <span className="relative inline-block flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    <span
                      className={classNames(
                        person.status === 'online' ? 'bg-green-400' : 'bg-gray-300',
                        'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white'
                      )}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="ml-4 truncate">
                    <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                    <p className="truncate text-sm text-gray-500">{'@' + person.handle}</p>
                  </div>
                </div>
              </a>
              <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
                <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open options menu</span>
                  <span className="flex h-full w-full items-center justify-center rounded-full">
                    <EllipsisVerticalIcon
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            View profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Send message
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
    )
  }

export default Friends;