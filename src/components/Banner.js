
import React, { Component } from 'react';
import Title from "./Title";
import Arrow from './Arrow';
import LineWrap from './LineWrap';
import desk from '../images/computer.jpg';

import '../styles/Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="banner" style={{backgroundImage: `url(${desk})`}}>
        <div className="overlay"></div>
        <div className="banner__inner">
          <Arrow />
          <Title />
        </div>
      </div>
    )
  }
}

export default Banner;
