import React from "react";
import { Link } from "react-router-dom";
import StyledNavbar from "./NavBar.style";

const NavBar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/policy" className="links">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms" className="links">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link to="/contact" className="links">
            Contact Us
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
