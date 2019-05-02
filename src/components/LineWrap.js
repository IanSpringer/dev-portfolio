
import React, { Component } from 'react';
import Line from './Line'


class LineWrap extends Component {
  constructor(props) {
    super(props);
    this.buildLines = this.buildLines.bind(this);
    this.state = {
      "lineArray": Array(13).fill('')
    }
  }

  buildLines() {
    const lineMap = this.state.lineArray.map((line, key) => {
      return <Line key={key} dataKey={key} dataClassName='line'/>
    })
    return lineMap;
  }




  render() {
    return (
      <div className="line-wrap">
        {this.buildLines()}
      </div>
    )
  }
}

export default LineWrap;
