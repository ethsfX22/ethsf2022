import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';

// Import components
import Tabs from '../../components/Tabs/Tabs';
import Profile from '../../components/Profile/Profile';

import './Popup.css';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useWallet } from './WalletProvider';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Popup = () => {
  const [open, setOpen] = useState(true);
  const { isAuthenticated, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="App">
      <header className="App-header"></header>
      <button
        onClick={isAuthenticated ? disconnectWallet : connectWallet}
        id="wallet-connect"
      >
        Button For User
        {isAuthenticated ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
      <Profile open={open} setOpen={setOpen} />
      <Tabs open={open} setOpen={setOpen} />
    </div>
  );
};

export default Popup;
