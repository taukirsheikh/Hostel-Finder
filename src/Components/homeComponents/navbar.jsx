import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
       <NavLink to="/"><h1  id="logo">HOSTEL <br></br>FINDER</h1> </NavLink>
        <button id="sign" className="logbtn button">Sign Up</button>
        <button id="login" className="logbtn button">Login</button>
        <button type='button' id="hostelmanage-btn" className='button'>Manage Hostel</button>
            
    </nav>
        
    </>
  )
}

export default Navbar