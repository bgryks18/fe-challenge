import React from 'react';
import styles from './app.module.scss';
const App = () => {
  return (
    <div id="content">
      <div id="bar"></div>
      <div id="header">
        <div>
          <h1>MagicHesap</h1>
          <p>Hesap Uzmanı</p>
        </div>
      </div>
      <div id="account">
        <div id="accountArena"></div>
      </div>
    </div>
  );
};

export default App;
