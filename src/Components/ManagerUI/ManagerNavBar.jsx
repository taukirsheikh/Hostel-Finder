import React from 'react'
// import './style.css'
import { NavLink } from "react-router-dom";
import { Link,Outlet } from 'react-router-dom';



function ManagerNavBar() {
  return (
    <>
      <nav>
        <header>
          <div className="navBackground ">
            <NavLink to="/">
              <h1 id="logo">
                SAJILO <br />
                HOSTEL
              </h1>
            </NavLink>
            <ul className="navItemsContainer">
              <NavLink to="register-hostel" style={{textDecoration: 'none'}}>
                <span
                type="button"
                className="navItems"
                >
                Register Hostel
                
              </span>
                  </NavLink>
                  <NavLink to="update-hostel" style={{textDecoration: 'none'}}>

              <span className="navItems">
                Update Hostel
                
              </span>
                  </NavLink>
              <NavLink to="bookings" style={{textDecoration: 'none'}}>
                <span className="navItems">
                Bookings
                
              </span>
                </NavLink>
            </ul>
            <span className='userIdentity'><strong>username</strong></span>
          </div>
        </header>
      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default ManagerNavBar