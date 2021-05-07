import React from "react";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar-container">
        <li>Home</li>
        <li>Inbox</li>
        <li>Bank</li>
        <li>Scan</li>
      </div>
    </nav>
  );
}

export default NavBar;
