import "./styles.css";
import React from "react";
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
