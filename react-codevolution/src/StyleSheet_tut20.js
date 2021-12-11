import React from "react";
import "./myStyles.css"
//1.css stylesheets
//2.inline styling
//3.css modules
//4.css in js libraries

//approach 2. Inline styling
// const heading = {
//   fontSize: '40px',
//   color: 'purple'
// }

//approach 3

function StyleSheet(props) {

  return (
    <p>StyleSheet.js p tag</p>
  )

  //2. inline stylesheets
  // return (
  //   <h3 style = {heading}>hello there</h3>
  // )

  //approach 1
  // let color = props.primary ? "primary" : "secondary";
  // let font_size = props.fontxl ? "font-xl" : "";
  //
  //return (
  //   <h2 className={`${color} ${font_size}`}>hello</h2>
  // );
}

export default StyleSheet;
