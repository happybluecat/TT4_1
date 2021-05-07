import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
//import AuthContext from "../store/auth-context";

function NavBar() {
  //const ctx = useContext(AuthContext);
  const logoutHandler = () => {
    //ctx.onLogout();
    console.log("logout");
  };
  return (
    <nav>
      <div className={classes["navbar-container"]}>
        <li>
          <Link to="/" className={classes["navbar-link"]}>
            <i className="fa fa-home"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/TransferPage" className={classes["navbar-link"]}>
            <i className="fa fa-exchange"></i>
            Transfer
          </Link>
        </li>
        <li>
          <Link to="/AccountDetails" className={classes["navbar-link"]}>
            <i className="fa fa-university"></i>
            Account Details
          </Link>
        </li>
        <li>
          <span className={classes.logout} onClick={logoutHandler}>
            <i class="fa fa-sign-out"></i>
            Logout
          </span>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
