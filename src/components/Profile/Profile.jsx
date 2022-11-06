import React, { FC, ReactElement, Component, Fragment, useState } from 'react';
import { useWallet } from '../../pages/Popup/WalletProvider';

const Profile = ({ open, setOpen }) => {
  const { isAuthenticated, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
      <div className="flex justify-center">
        <img
          src="https://avatars0.githubusercontent.com/u/35900628?v=4"
          alt=""
          className="rounded-full w-16 h-16 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
        />
      </div>
      <div className="">
        <h1 className="font-bold text-center text-3xl text-gray-900">
          GameChat
        </h1>
        <p>
          <span></span>
        </p>
        <div className="flex flex-row items-center content-center">
          <div className="my-5 px-3">
            <button onClick={() => setOpen(true)}>
              <a
                href="#"
                className="w-36 text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                XMTP Chat
              </a>
            </button>
          </div>

          <div className="my-5 px-3">
            <button>
              <a
                href="http://127.0.0.1:9090/issue"
                className="w-36 text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                zkDiD
              </a>
            </button>
          </div>
        </div>
        <div className="my-2 px-1">
          <button
            onClick={isAuthenticated ? disconnectWallet : connectWallet}
            id="wallet-connect"
          >
            <a
              href="#"
              className="w-50 text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-1 bg-gray-900 hover:bg-black hover:text-white"
            >
              {isAuthenticated ? 'Disconnect Wallet' : 'Connect Wallet'}
            </a>
          </button>
        </div>

        <div className="w-full text-left">
          <h3 className="font-medium text-gray-900 text-center mt-6 px-6">
            Recent Messages
          </h3>
          <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
            <a
              href="#"
              className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
              />
              {'i <3 decentraland  '}
              <span className="text-gray-500 text-xs">24 min ago</span>
            </a>

            <a
              href="#"
              className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
              />
              {'u got rekt gg  '}
              <span className="text-gray-500 text-xs">42 min ago</span>
            </a>

            <a
              href="#"
              className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
              />
              {'Poggers  '}
              <span className="text-gray-500 text-xs">49 min ago</span>
            </a>

            <a
              href="#"
              className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
              />
              {'omega lul  '}
              <span className="text-gray-500 text-xs">1 day ago</span>
            </a>

            <a
              href="#"
              className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
              />
              {"i'm going afk brb  "}
              <span className="text-gray-500 text-xs">5 days ago</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
