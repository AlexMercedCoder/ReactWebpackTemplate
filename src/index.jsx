import React from "react";
import ReactDom from "react-dom";
import "./styles.scss";

const App = (props) => {
  return <h1>Hello World</h1>;
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />)
