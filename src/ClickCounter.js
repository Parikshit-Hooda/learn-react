import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {

  render() {
    const {name, incCount, count} = this.props
    return (
      <div>
        <button onClick = {incCount}>{name} Clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)
