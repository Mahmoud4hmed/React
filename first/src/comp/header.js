import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <span>home</span>
        <a href="#">
          <img src="img/logo.png" className="logo" />
        </a>
        <ul>
          <li>
            <NavLink className="main-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="main-link" to="/html">HTML</NavLink>
          </li>
          <li>
            <NavLink className="main-link" to="/css">CSS</NavLink>
          </li>
          <li>
            <NavLink className="main-link" to="/javascript">Javascript</NavLink>
          </li>
        </ul>
      </header>
  );
}

export default Header;
