import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import 'antd/dist/antd.css';
import './react-geo.css'; */

import {
  SimpleButton
} from '@terrestris/react-geo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleButton
          onClick={() => {alert('Hello World!');}}
          iconName="bars"
        />
      </header>
    </div>
  );
}

export default App;
