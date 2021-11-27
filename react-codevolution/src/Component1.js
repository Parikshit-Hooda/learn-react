import React from "react";
import { render } from "react-dom";

import { UCConsumer } from "./userContext";

export default function Component1() {
//  console.log(UCConsumer);
    return (
      <UCConsumer>
        {(name) => {
          return <p>this is component 1. {name}</p>;
        }}
      </UCConsumer>
    )

}
