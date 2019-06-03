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
                {"title": "Github", "destination": "https://github.com/IanSpringer", "asset": ""}],
      "header": [{"title": "Ian Springer", "description": "Front End Developer", "destination": "[data-banner]"}],
      "hamburgerState": "is-hidden"
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

  renderNav(links) {
    const nav = links.map((link, key) => {
    let description = "";
      if(link.description) {
        description = <span>| {link.description}</span>
      }
      if (link.destination.includes('https://') ) {
        return <a href={link.destination} key={key} className="nav__link noto">{link.title} {description}</a>
      }

      return <span className="js-scroll-to-section nav__link noto" onClick={this.scrollToSection} data-scroll-to={link.destination}>{link.title} {description}</span>
    })

    return nav;
  }

  render() {
    return (
      <div>
        <nav className="nav desktop">
          <div className="nav__inner">
            <div className="nav__left">
            {this.renderNav(this.state.header)}
            </div>
            <div className="nav__rght">
            {this.renderNav(this.state.links)}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
