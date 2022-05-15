import React from "react";
import "./styles.scss";
import { createRoot } from "react-dom/client";

const App = (props) => {
  return <h1>Hello World</h1>;
};

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
