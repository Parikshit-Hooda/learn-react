import React, { Component } from 'react'
import UpdatedComponent from './withCounter'


class HoverCounter extends Component {

  

  render() {
    const {count, incCount, name} = this.props
    return (
      <div>
        <h1 onMouseOver = {incCount}>{name} Hello {count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
