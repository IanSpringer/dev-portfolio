import React, { Component } from 'react';
import Banner from './components/Banner';
import MyWork from './components/MyWork';
import WhatIDo from './components/WhatIDo';
import Nav from './components/Nav'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Banner />
        <Nav />
        <MyWork />
        <WhatIDo />
      </div>
    );
  }
}

export default App;
