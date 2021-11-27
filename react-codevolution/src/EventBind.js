// https://www.youtube.com/watch?v=kVWpBtRjkCk&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=14
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello message from EventBind component"
    };

    // this.changeMessage = this.changeMessage.bind(this);

    this.changeMessage = () => {
      this.state.message === "Hello message from EventBind component"
        ? this.setState({ message: "btn clicked" })
        : this.setState({ message: "Hello message from EventBind component" });
    };
  }

  //  changeMessage = () => {
  //         this.state.message === "Hello message from EventBind component" ? this.setState({message: "btn clicked"}) : this.setState({message: "Hello message from EventBind component"});
  //     }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button  onClick = {this.changeMessage.bind(this)}>Click me</button> */}
        {/* <button onClick = {() => this.changeMessage()}>Click me</button> */}
        <button onClick={this.changeMessage}>Click me</button>
      </div>
    );
  }
}

export default EventBind;
