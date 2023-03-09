import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Loginout from "./Loginout";
import "./Navbar.css";

const Navbar = () => {
  const navigateTo = useNavigate();
  const goToManagerDashboard = () => {
    navigateTo("/manager-dashboard");
  };
  return (
    <>
      <nav className="home-nav-bar">
        <NavLink to="/">
          <h1>SAJILO HOSTEL </h1>
        </NavLink>
        <div className="manage-signin">
          <button
            type="button"
            className="manage-button"
            // css in style.css  outer below
            onClick={() => goToManagerDashboard()}
          >
            Manage Hostel
          </button>
          <Loginout />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
