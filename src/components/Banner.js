
import React, { Component } from 'react';
import Title from "./Title";
import Arrow from './Arrow';

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
      </div>
    )
  }
}

export default Banner;
