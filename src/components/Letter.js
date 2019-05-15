import React, { Component } from 'react';
import '../styles/Letter.css';

class Letter extends Component {

  render() {
    return (
      <span className="banner__letter" data-index={this.props.index}>{this.props.letter}</span>
    )
  }
}

export default Letter;
