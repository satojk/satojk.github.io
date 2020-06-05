import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home/index';
import Projects from './Projects/index';
import Resume from './Resume/index';
import ReadingList from './Reading-List/index';
import Musings from './Musings/index';


class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
          <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume}/>
          <Route path={process.env.PUBLIC_URL + '/reading-list'} component={ReadingList}/>
          <Route path={process.env.PUBLIC_URL + '/musings'} component={Musings}/>
        </Switch>
      </main>
    );
  }
}

export default App;
