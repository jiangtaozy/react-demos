/*
 * Created by jemo on 2018-7-9.
 * react-motion demo Motion value
 */

import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

class MotionValueDemo extends Component {
  render() {
    return(
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        { value => <div>{ value.x }</div> }
      </Motion>
    )
  }
}

export default MotionValueDemo
