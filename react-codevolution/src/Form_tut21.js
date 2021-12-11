import React, {Component} from "react";

class Form_tut21 extends Component {

  constructor() {
    super()
    this.state = {
      name: 'parikshit',
      course: 'Ember'
    }
  }

  nameChangeHandler = event => {
    this.setState({
      name: event.target.value
    })
  }

  courseChangeHandler = event => {
    this.setState({
      course: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.course}`)
    event.preventDefault();
  }

  render(){
    const {name, course} = this.state
  return (
    <form onSubmit = {this.handleSubmit}>
      <div>
      <label>name</label>
      <input type = 'text' value = {name} onChange = {this.nameChangeHandler}></input>
        </div>
        <div>
      <label>Course</label>
      <select value = {course} onChange = {this.courseChangeHandler}>
      <option value = 'Ember'>Ember</option>
        <option value = 'React'>React</option>
        </select>
          </div>

          <button type = 'submit'>Submit</button>
      </form>
  )
}
}

export default Form_tut21;
