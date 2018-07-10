/*
 * Created by jemo on 2018-7-9.
 * App
 */

import React, { Component } from 'react'
import MotionValueDemo from './components/MotionValueDemo'
import StaggeredMotionDemo from './components/StaggeredMotionDemo'
import TransitionMotionDemo from './components/TransitionMotionDemo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/motion'>Motion Demo</Link>
            </li>
            <li>
              <Link to='/staggered-motion'>StaggeredMotion Demo</Link>
            </li>
            <li>
              <Link to='/transition-motion'>TransitionMotion Demo</Link>
            </li>
          </ul>
          <Route path='/motion' component={MotionValueDemo} />
          <Route path='/staggered-motion' component={StaggeredMotionDemo} />
          <Route path='/transition-motion' component={TransitionMotionDemo} />
        </div>
      </Router>
    );
  }
}

export default App;
