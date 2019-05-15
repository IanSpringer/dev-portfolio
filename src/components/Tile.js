import React, { Component } from 'react';
import '../styles/Tile.css';

class Tile extends Component {

  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer" data-iterator={this.props.iterator} className="my-work__tile js-work-tile" style={{backgroundImage: `url(${this.props.background})`}}>
        <label className="my-work__label noto">{this.props.title}</label>
        <div className="my-work__overlay"></div>
      </a>
    )
  }
}

export default Tile;
