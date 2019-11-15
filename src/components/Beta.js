import React from "react";
import "./Beta.css";
import withErrorManagment from "./hoc/withErrorManagment";

const Beta = ({ children }) => (
  <div>
    {children}
    <p className="band-beta">Beta</p>
  </div>
);

export default withErrorManagment(Beta);
