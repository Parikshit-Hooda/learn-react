import React, {Component} from "react";
import CC from "./ChildComponent";


class PC extends Compoment {

  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this);

  }

  greetParent() {
    alert(`greeting`);
  }

  render() {
    return (
        <div>
          <CC greetHandler={this.greetParent} />
        </div>


    )

  }
}
