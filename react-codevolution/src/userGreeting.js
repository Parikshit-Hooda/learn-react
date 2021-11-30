// https://www.youtube.com/watch?v=7o5FPaVA9m0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=16
import React, {Component} from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    } //state parenthesis
  }

  //fourth approach: short circuit operator
  //render something or nothing - use this approach
  render() {
    return this.state.isLoggedIn && (<h1>Hello</h1>)
    // return (
    //   <h1>Hi!</h1>
    // )
  }

  //third approach: ternary operator
  // render() {
  //   return (
  //     (this.state.isLoggedIn) ? <h3>Welcome user</h3> : <h3>Welcome guest</h3>
  //   )
  // }

  //second approach
  // render() {
  //   let message;
  //   if(this.state.isLoggedIn) {
  //     message = `Welcome user`;
  //   } else {
  //     message = `Welcome guest`;
  //   }

  //   return (

  //     <h3>
  //     {message}
  //     </h3>

  //   )


  // }

  // render() {
  //   //first apprroach
  //   if(this.state.isLoggedIn) {
  //     return (
  //       <h3>Welcome Guest</h3>
  //     )
  //     } else {
  //       return (
  //         <h3>Welcome P</h3>
  //       )
  //     }
  //   }

  }


export default UserGreeting;
