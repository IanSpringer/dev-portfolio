
import React, { Component } from 'react';
import Title from "./Title";
import Arrow from './Arrow';
import LineWrap from './LineWrap';

import '../styles/Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="banner">
        <Arrow />
        <Title />
        <LineWrap />
      </div>
    )
  }
}

export default Banner;
