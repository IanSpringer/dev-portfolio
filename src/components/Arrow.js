
import React, { Component } from 'react';
import '../styles/Arrow.css';

class Arrow extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="noto arrow">
        <span className="arrow-line"></span>
      </div>
    )
  }
}

export default Arrow;
