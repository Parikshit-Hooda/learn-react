import React, {Component} from 'react';

class Counter extends React.Component {
  state = {
    count:0,
  };



  render() { 

    let classes = this.getBadgeClasses();

    return <div>
    <span className = {classes}>{this.fn1()}</span>
    <button class = "btn btn-secondary btn-sm">Increment</button></div>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  // classval() {
  //   return 
  // }

  fn1(){
    const { count } = this.state;
    return count === 2 ? ":D" : ":()";
  }
}
 
export default Counter;
