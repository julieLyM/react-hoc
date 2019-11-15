import React from "react";

const Button = ({ buttonClick, children }) => (
  <div>
    <p className="band-beta" onClick={() => buttonClick}>
      {children}
      Beta
    </p>
  </div>
);

export default Button;
