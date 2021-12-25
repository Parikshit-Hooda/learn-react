//An HOC is a pattern whenre a component takes another component
//as an argument and returns a new component
//const NewComponent = higherOrderComponent(originalComponent)
//const EnhancedComponent = higherOrderComponent(originalComponent)


import React from 'react';

const UpdatedComponent = (OriginalComp) => {
  class NewComponent extends React.Component {
    
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
    return { count: prevState.count+1 }

    })
  }

    render() {
        return <OriginalComp name = 'Parikshit' count = {this.state.count} incCount = {this.incrementCount}/>
      }
  }

  return NewComponent
  
}

export default UpdatedComponent