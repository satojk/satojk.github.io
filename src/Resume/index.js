import React, { Component } from 'react';
import resumejpg from './resume.jpg'
import Back from '../commons.js';
//import Iframe from 'react-iframe';
import '../commons.css';
import './index.css';

class Resume extends Component {
  render() {
    return (
      <div>
        <Back />
        <div className="Center-content-div">
          <img className="Resume-img" src={resumejpg} alt='resume' />
        </div>
      </div>
    );
  }
}

export default Resume;
