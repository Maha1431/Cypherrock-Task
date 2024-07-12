import React from "react";
import "./navbar.css";
import text from "../../images/text.svg"
import logo1 from "../../images/cysunc logo.svg"
function Navbar() {
  return (
    <div className="navbar">
      <div className="navLeft">
        <div className="logo">
          <img src={logo1} alt="logo" className="navIcon"></img>
        </div>
      </div>
      <div className="navRight">
        <div className="logo">
          <img src={text} alt="text" className="navIcon"></img>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
