import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";

export default function Header() {
  return (
    <header id="container">
      <div id="nav-bar">
        <div id="nav-belt">
          <div className="nav-left">
            <div id="nav-logo">
              <Link to={"/"}>LOGO</Link>
            </div>
          </div>
          <div className="nav-fill">
            <div id="nav-search">
              <form id="nav-search-bar-form">
                <div className="nav-left">
                  <a href="">ALL</a>
                </div>
                <div className="nav-fill">
                  <input type="text" />
                </div>
                <div className="nav-right">
                  <button type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
          <div className="nav-right">
            <div id="nav-tools">
              <a href="/">Language</a>
              <Link to="/login">Log in</Link>
              <a href="/">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
