import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <>
      Hello World <Link to="/Second">Second</Link>
    </>
  );
};

export default FirstPage;
