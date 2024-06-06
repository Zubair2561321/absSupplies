import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navWrapper">
        <div className="navbar-logo">
          <a href="#">Atlantis Building Supplies</a>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
