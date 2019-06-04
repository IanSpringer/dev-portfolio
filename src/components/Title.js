import Arrow from './Arrow';
import React, { Component } from 'react';
import Letter from './Letter'

class Title extends Component {
  constructor(props) {
    super(props);
    this.buildName = this.buildName.bind(this);
    this.fadeText = this.fadeText.bind(this)
    this.state = {
      name: "Ian Springer",
      title: "Front End Developer"
    }
  }

  componentDidMount() {
    this.fadeText('.banner__letter');
  }

  buildName(word) {
    return word.split('').map((letter, key) => <Letter letter={letter} index={key} key={key} />)
  }

  fadeText(element) {
    let stringArray = Array.from(document.querySelectorAll('.banner__letter'));
    stringArray.map((letter, key) => {
      setTimeout(() => {
        letter.classList.add('is-active');
      }, 120 * (key + 1));
      return letter;
    })
  }

  render() {

    return (
      <div className="banner__wrap" style={this.props.dataStyle}>
        <h1 className="banner__title noto">
          {this.buildName(this.state.name)}
        </h1>
        <h2 className="banner__subtitle noto">
          {this.buildName(this.state.title)}
        </h2>
        <Arrow/>
      </div>
    )
  }
}

export default Title;
