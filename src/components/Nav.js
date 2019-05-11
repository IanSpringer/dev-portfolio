import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.renderNav = this.renderNav.bind(this);
    this.state = {
      "links": [{"title": "My Work", "destination": "[data-my-work]"},
                {"title": "About", "destination": "[data-what-i-do]"},
                {"title": "Github", "destination": "https://github.com/IanSpringer"}]
    }
  }

  renderNav() {
    const nav = this.state.links.map(link => {
      if (link.destination.includes('https://') ) {
        return <a href={link.destination} className="nav__link noto">{link.title}</a>
      }

      return <span className="js-scroll-{link.destination} nav__link noto">{link.title}</span>
    })

    return nav;
  }

  // componentDidMount() {
  //   this.renderNav()
  // }

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
