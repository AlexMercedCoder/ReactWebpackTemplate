import React from "react";
import ReactDom from "react-dom";
import "./styles.scss"

const App = (props) => {
  return <h1>Hello World</h1>;
};


//create root div
// const body = document.querySelector('body')
// const div = document.createElement('div')
// div.id = "root"
// body.appendChild(div)

//append app to root div
ReactDom.render(<App />, document.querySelector("#root"));
