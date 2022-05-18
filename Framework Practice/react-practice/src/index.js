import React from "react";
import ReactDOM from "react-dom";
import InitialMessage from "./components/InitialMessage";
import "./styles/PageStyles.css";

ReactDOM.render(InitialMessage(`Hello World`), document.getElementById("root"));
