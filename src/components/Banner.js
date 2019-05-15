
import React, { Component } from 'react';
import Title from "./Title";
import Arrow from './Arrow';
import desk from '../images/boll.jpg';

import '../styles/Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      "positionY": 0,
      "opacity": 1,
      "background": desk
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const positionY = window.scrollY;
    this.setState({positionY: -(positionY / 4), opacity: (1 - (positionY * .005))})
  }

  render() {
    const transformStyles = {
      transform: `translate(0px, ${this.state.positionY}px)`,
      opacity: this.state.opacity
    }

    const bannerStyles = {
      backgroundImage: this.state.background
    }
    return (
      <div className="banner" style={bannerStyles}>
        <div className="overlay"></div>
        <div className="banner__inner">
          <Arrow />
          <Title dataStyle={transformStyles}/>
        </div>
      </div>
    )
  }
}

export default Banner;
