import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div>Header</div>
      <div>
        <Link to="/">Login</Link> 
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
