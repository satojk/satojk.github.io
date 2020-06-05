import React, { Component } from 'react';
import Back from '../commons.js';
import '../commons.css';
import './index.css';

class MusingEntry extends Component {
  constructor() {
    super();
    this.state = {
      classNameStr: 'MusingEntry-dormant-a'
    }
  }

  highlightMusingEntry = () => {
    let newClassName = 'MusingEntry-active-a';
    this.setState({
      classNameStr: newClassName
    });
  }
 
  unHighlightMusingEntry = () => {
    let newClassName = 'MusingEntry-dormant-a';
    this.setState({
      classNameStr: newClassName
    });
  }

  render() {
    return (
        <div className='MusingEntry-div'>
        </div>
    );
  }
}

class Musings extends Component {
  render() {
    return (
      <div>
        <Back />
        <div className="Center-content-div">
          <p className="About">General musings, ranging in theme and 
          seriousness.</p>

          <hr /> 

          <p className="Gray-note">(but I'm glad you're interested!)</p>
        </div>
      </div>
    );
  }
}

export default Musings;
