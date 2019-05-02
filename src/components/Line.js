
import React, { Component } from 'react';
import '../styles/Line.css';


class Line extends Component {
  constructor(props) {
    super(props);
    this.animateLines = this.animateLines.bind(this);
    this.state = {
      "lineArray": Array(13).fill('')
    }
  }

  componentDidMount() {
    // setTimeout(this.animateLines, 300);
  }

  animateLines() {
    const lines = Array.from(document.querySelectorAll('.line'));
    return lines.map((line, key) => {
      const currentLine = document.querySelector(`.line--${key}`);
      return currentLine.classList.add('is-active')
    })
  }

  render() {
    const classes = `${this.props.dataClassName} ${this.props.dataClassName}--${this.props.dataKey} `
    return (
      <div className={classes}>

      </div>
    )
  }
}

export default Line;
