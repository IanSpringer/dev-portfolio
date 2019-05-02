import React, { Component } from 'react';
import Banner from './components/Banner';
import MyWork from './components/MyWork';
import WhatIDo from './components/WhatIDo';
import qardoos from './fonts/Qardoos.otf';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <MyWork />
        <WhatIDo />
      </div>
    );
  }
}

export default App;
