
import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import '../styles/Arrow.css';

class Arrow extends Component {

  constructor(props) {
    super(props);
    this.fadeButton = this.fadeButton.bind(this);
    this.scrollToWork = this.scrollToWork.bind(this);
    this.state = {
      "classes": "button banner__arrow noto js-scroll-to-section"
    }
  }

  fadeButton() {
    setTimeout(() => {
      this.setState({classes: "button banner__arrow noto is-active"})
    })
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    this.fadeButton();
    scrollSpy.update();
  }

  scrollToWork() {
    const scrollTo = document.querySelector(`div[data-my-work]`).offsetTop;
    return scroll.scrollTo(scrollTo);
  }

  render() {
    return (
      <button className={this.state.classes} onClick={this.scrollToWork}>
        <span className="button__wave"></span>
      </button>
    )
  }
}

export default Arrow;
