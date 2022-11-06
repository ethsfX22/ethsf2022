import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import '../../assets/styles/tailwind.css';
import WalletProvider from './WalletProvider';

render(
  <WalletProvider>
    <Popup />
  </WalletProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
