import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

export default function NavBar() {
  return (
    <header className="primary-navigation-header flex">
      <div className="burger grid">
        <img src="./main-menu.png" alt="burger" className="flex" />
      </div>
      <span className="logo">Logo</span>
      <nav className="primary-navigation-bar">
        <ul className="primary-navigation-items flex">
          <li className="nav-items">
            <a href="/">home</a>
          </li>
          <li className="nav-items">
            <a href="/">product</a>
          </li>
          <li className="nav-items">
            <a href="/">about</a>
          </li>
        </ul>
        <ul className="flex">
          <li className="nav-items grid">
            <a href="/">search</a>
          </li>
          <li className="nav-items grid">
            <a href="/">cart</a>
          </li>
          <li className="nav-items grid">
            <a href="/">profile</a>
          </li>
        </ul>
      </nav>
      <ul className="secondary-navigation-items">
        <li className="nav-items">
          <a href="/" className="grid">
            <img
              src="./shopping-cart.png"
              alt="shopping-cart"
              className="flex"
            />
          </a>
        </li>
      </ul>
    </header>
  );
}
