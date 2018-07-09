import React, { Component } from 'react'
import MotionValueDemo from './components/MotionValueDemo'
import StaggeredMotionDemo from './components/StaggeredMotionDemo'

class App extends Component {
  render() {
    return (
      <div>
        <MotionValueDemo />
        <StaggeredMotionDemo />
      </div>
    );
  }
}

export default App;
