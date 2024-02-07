// import { useState } from 'react'
import React from "react";
// import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs"

const MainNav = () => {
  return (
    <div>
      <div className="header">Openning hours Monday to Saturday</div>
      <ul className="wrapper">
        <nav>
          <ul className="left">
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/shopOnline">Shop Online</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/aboutUs">About Us</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MainNav;
