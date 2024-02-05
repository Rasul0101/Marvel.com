// import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <h1 className="title">
            <span>Marvel</span> information portal
          </h1>
          <ul className="links">
            <NavLink to="/">Characters</NavLink>
            <span>/</span>
            <NavLink to="/comics">Comics</NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
