import React from "react";
import ReactDOM from "react-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/First" element={<FirstPage />}></Route>
      <Route path="/Second" element={<SecondPage />}></Route>
      <Route element={<NoPage />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
