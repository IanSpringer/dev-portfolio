import React, { Component } from 'react';
import '../styles/WhatIDo.css';

class WhatIDo extends Component {

  render() {
    return (
      <div className="what-i-do" data-what-i-do="true">
        <h2 className="what-i-do__header noto">What I Do</h2>
        <p className="what-i-do__desc noto">I write. I consult. I ask questions. I am a passionate UI Engineer, possessing a deep knowledge of the core front end technologies such as HTML5, Javascript, CSS, React, jQuery, and Node. My skills are highlighted by my extensive experience delivering high quality code to enterprise level e-commerce brands.</p>
        <h4 className="what-i-do__cta noto">Like what you hear? <a className="noto" href="mailto:ianspringer12@gmail.com">Shoot me an email</a></h4>
      </div>
    )
  }
}

export default WhatIDo;
