import React from "react";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className={classes["navbar-container"]}>
        <li>
          <i class="fa fa-home"></i>
          Home
        </li>
        <li>
          <i class="fa fa-inbox"></i>
          Inbox
        </li>
        <li>
          <i class="fa fa-university"></i>
          Bank
        </li>
        <li>
          <i class="fa fa-barcode"></i>
          Scan
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
