import "./styles.css";
import React from "react";
import { UCProvider, UCConsumer } from "./userContext";
import Component1 from "./Component1";

export default function App() {
  return (
    <div className="App">
      <UCProvider value={"Parikshit"}>
        <p>This is App component p tag.</p>
        <p>another p tag</p>
        <p>p tag after consumer</p>
        <Component1 />
      </UCProvider>
    </div>
  );
}
