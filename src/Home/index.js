import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      linksClasses: ['Link-dormant-a', 'Link-dormant-a', 'Link-dormant-a']
    }
  }

  highlightLink = (ix) => {
    let newLinksClasses = this.state.linksClasses;
    newLinksClasses[ix] = 'Link-active-a';
    this.setState({
      linksClasses: newLinksClasses
    });
  }

  unHighlightLink = (ix) => {
    let newLinksClasses = this.state.linksClasses;
    newLinksClasses[ix] = 'Link-dormant-a';
    this.setState({
      linksClasses: newLinksClasses
    });
  }

  render() {
    return (
      <div className="Center-div">
        <p className="Name-p">Lucas Sato</p>
        <p className="Base-p">I am an undergraduate at Stanford studying Computer Science, Theoretical Neuroscience, and Analytic Philosophy. I think, read, and write a lot about the intersections of the three.</p>

        <div className="Links-container">

          <a href="projects" className={this.state.linksClasses[0]}
             onMouseEnter={() => {this.highlightLink(0)}}
             onMouseLeave={() => {this.unHighlightLink(0)}}>
            Projects
          </a>

          <a href="musings" className={this.state.linksClasses[1]}
             onMouseEnter={() => {this.highlightLink(1)}}
             onMouseLeave={() => {this.unHighlightLink(1)}}>
            Musings
          </a>

          <a href="resume" className={this.state.linksClasses[2]}
             onMouseEnter={() => {this.highlightLink(2)}}
             onMouseLeave={() => {this.unHighlightLink(2)}}>
            Resume
          </a>

        </div>

      </div>
    )
  }
}

export default Home;
