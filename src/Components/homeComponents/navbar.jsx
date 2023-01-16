import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();

  const goToManagerDashboard = () => {
    navigateTo("manager-dashboard");
  };
  return (
    <>
      <nav>
        <NavLink to="/">
          <h1 id="logo">
            <strong>SAJILO</strong> <br></br>HOSTEL
          </h1>
        </NavLink>
        <button
          id="sign"
          className="logbtn button"
        >
          Sign Up
        </button>
        <button
          id="login"
          className="logbtn button"
        >
          Login
        </button>
        <button
          type="button"
          id="hostelmanage-btn"
          className="button"
          onClick={() => goToManagerDashboard()}
        >
          Manage Hostel
        </button>
      </nav>
    </>
  );
};

export default Navbar;
