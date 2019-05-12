import React, { Component } from 'react';
import Tile from './Tile';
import '../styles/MyWork.css';
import untuckit from '../images/untuckit.jpg';
import thrive from '../images/thrive.jpg';
import draper from '../images/draper.png';
import lumee from '../images/lumee.jpg';
import roam from '../images/roam.jpg';
import boll from '../images/boll.jpg';

class MyWork extends Component {
  constructor(props) {
    super(props);
    this.buildBlocks = this.buildBlocks.bind(this);
    this.state = {
      "workArray": [
        {
          "title": "Untuckit",
          "img": untuckit,
          "link": "https://www.untuckit.com/"
        },
        {
          "title": "Thrive Causemetics",
          "img": thrive,
          "link": "https://thrivecausemetics.com"
        },
        {
          "title": "Draper James",
          "img": draper,
          "link": "https://draperjames.com/"
        },
        {
          "title": "Lumee",
          "img": lumee,
          "link": "https://lumee.com/"
        } ,
        {
          "title": "Roam Luggage",
          "img": roam,
          "link": "https://roamluggage.com/"
        },
        {
          "title": "Boll & Branch",
          "img": boll,
          "link": "https://www.bollandbranch.com/"
        }
      ]
    }

  }

  buildBlocks() {
    console.log('hello')
    const blockElement = this.state.workArray.map((site, key) => {
      return <Tile className="my-work__block" key={key} title={site.title} background={site.img} link={site.link}>{site.title}</Tile>
    })

    return blockElement;
  }

  render() {
    return (
      <div className="my-work" data-my-work="true">
        <h2 className="my-work__header noto">My Recent Work</h2>
        <div className="my-work__wrapper">
          {this.buildBlocks()}
        </div>
      </div>
    )
  }
}

export default MyWork;
