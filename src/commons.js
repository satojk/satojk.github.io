import React, { Component } from 'react';
import './commons.css';

class Back extends Component {
  constructor() {
    super();
    this.state = {
      classNameStr: 'Back-dormant-a'
    }
  }

  highlightBack = () => {
    let newClassName = 'Back-active-a';
    this.setState({
      classNameStr: newClassName
    });
  }

  unHighlightBack = () => {
    let newClassName = 'Back-dormant-a';
    this.setState({
      classNameStr: newClassName
    });
  }

  render() {
    return (
      <div className='Back-div'>
      <a href=".." className={this.state.classNameStr}
         onMouseEnter={() => {this.highlightBack()}}
         onMouseLeave={() => {this.unHighlightBack()}}>
        back
      </a>
      </div>
    );
  }
}

export default Back
