import React, { Component } from 'react';
import '../styles/WhatIDo.css';

class WhatIDo extends Component {

  render() {
    return (
      <div className="what-i-do" data-what-i-do="true">
        <h2 className="what-i-do__header noto">What I Do</h2>
        <p className="what-i-do__desc noto">As a UI Engineer, I am passionate about combining the art of design with the science of programming. I possess a deep knowledge of the core front end technologies such as HTML5, Javascript, CSS, React, jQuery... but I don't live solely on the client side. I am also experienced in using many of the modern build/bundling tools such as NPM, Webpack, Gulp, and Yarn, as well as possesing professional experience building servers in Node + Express. My skills are highlighted by my extensive experience delivering high quality code to enterprise level e-commerce brands.</p>
        <h4 className="what-i-do__cta noto">Like what you see? <a className="noto" href="mailto:ianspringer12@gmail.com">Shoot me an email</a></h4>
      </div>
    )
  }
}

export default WhatIDo;
