import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className={classes["navbar-container"]}>
        <li>
          <Link to="/" className={classes["navbar-link"]}>
            <i class="fa fa-home"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Transfer" className={classes["navbar-link"]}>
            <i class="fa fa-exchange"></i>
            Transfer
          </Link>
        </li>
        <li>
          <Link to="/AccountDetails" className={classes["navbar-link"]}>
            <i class="fa fa-university"></i>
            Account Details
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
