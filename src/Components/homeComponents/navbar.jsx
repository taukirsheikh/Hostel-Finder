import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Loginout from "./Loginout";

const Navbar = () => {
  const navigateTo = useNavigate();

  const goToManagerDashboard = () => {
    navigateTo("/manager-dashboard");
  };
  return (
    <>
    <header>

      <nav className="home-nav-bar">
        <div>
          
        <NavLink to="/">
          <h1 id="logo">
            <strong>SAJILO</strong> <br></br>HOSTEL
          </h1>
        </NavLink>
        <div className="manage-signin">
      <div>

        <button
          type="button"
          
          className="button"
          onClick={() => goToManagerDashboard()}
        >
          Manage Hostel
        </button>
      </div>
          <div>
            
      <Loginout/>

          {/* <button
          id="sign"
          className="button"
        >
          Sign In
        </button> */}
       
          </div>

        </div>
        </div>
      </nav>
      
    </header>

    </>
  );
};

export default Navbar;
