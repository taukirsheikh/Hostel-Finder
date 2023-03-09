import React from "react";
// import './style.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function BookingNavBar() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <header>
        <nav>
          <div className="navBackground ">
            <NavLink to="/">
              <h1 id="logo">
                SAJILO <br />
                HOSTEL
              </h1>
            </NavLink>
           
            <span className="userIdentity">
              <strong>{user.name}</strong>
            </span>
          </div>
        </nav>
        <Outlet></Outlet>
      </header>
    </>
  );
}

export default BookingNavBar;
