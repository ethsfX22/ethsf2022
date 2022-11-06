import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';

// Import components
import Tabs from '../../components/Tabs/Tabs';
import Profile from '../../components/Profile/Profile';

import './Popup.css';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Popup = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Profile open={open} setOpen={setOpen} />
      <Tabs open={open} setOpen={setOpen} />
    </div>
  );
};

export default Popup;
