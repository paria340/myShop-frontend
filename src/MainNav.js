// import { useState } from 'react'
import React from "react";
// import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs"

const MainNav = () => {
  return (
    <div className="wrapper">
      <div className="header">Openning hours Monday to Saturday</div>
      <ul>
        <nav>
          <ul className="left">
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Shop Online</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MainNav;
