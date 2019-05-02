
import React, { Component } from 'react';
import Title from "./Title";

import '../styles/Banner.css'

class Drum extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="banner">
        <Title />
      </div>
    )
  }
}

export default Drum;
