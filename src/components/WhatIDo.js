import React, { Component } from 'react';
import '../styles/WhatIDo.css';

class WhatIDo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="what-i-do">
        <h2 className="what-i-do__header noto">What I Do</h2>
        <p className="what-i-do__desc noto">Blobbing code together since 2015. I am a driven front end programmer and UI specialist, holding a breadth of knowledge in HTML, CSS, Javascipt, e-commerce, and web design. My skills are highlighted by my experience delivering high quality code to enterprise level e-commerce brands.</p>
        <h4 className="what-i-do__cta noto">Like what you hear? <a clasName="noto" href="mailto:ianspringer12@gmail.com">Shoot me an email</a></h4>
      </div>
    )
  }
}

export default WhatIDo;
