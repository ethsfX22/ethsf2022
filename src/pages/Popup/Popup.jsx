import React, {useState} from 'react';
import logo from '../../assets/img/logo.svg';

// Import components
import Navbar from '../../components/Navbar/Navbar';
import ContactList from '../../components/ContactList/ContactList';
import Tabs from '../../components/Tabs/Tabs';

import './Popup.css';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Popup = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <h1
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GameChat
        </h1>

        <Tabs />
      </header>

      <ContactList open={open} setOpen={setOpen}/>

      <button onClick={() => setOpen(true)}>Open</button>
    </div>
  );
};

export default Popup;
