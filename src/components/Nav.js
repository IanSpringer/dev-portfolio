import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.renderNav = this.renderNav.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
    this.state = {
      "links": [{"title": "My Work", "destination": "[data-my-work]"},
                {"title": "About", "destination": "[data-what-i-do]"},
                {"title": "Github", "destination": "https://github.com/IanSpringer", "asset": ""}]
    }
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  scrollToSection(event) {
    const target = event.currentTarget;
    const scrollTo = document.querySelector(`div${target.getAttribute('data-scroll-to')}`).offsetTop;
    return scroll.scrollTo(scrollTo);
  }

  renderNav() {
    const nav = this.state.links.map((link, key) => {
      if (link.destination.includes('https://') ) {
        return <a href={link.destination} key={key} className="nav__link noto">{link.title}</a>
      }

      return <span className="js-scroll-to-section nav__link noto" onClick={this.scrollToSection} data-scroll-to={link.destination}>{link.title}</span>
    })

    return nav;
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav__inner">
        {this.renderNav()}
        </div>
      </nav>
    )
  }
}

export default Nav;
