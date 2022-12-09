import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <h1 id="logo">HOSTEL <br></br>FINDER</h1> 
        <button id="sign" className="logbtn button">Sign Up</button>
        <button id="login" className="logbtn button">Login</button>
        <button type='button' id="hostelmanage-btn" className='button'>Manage Hostels</button>
            
    </nav>
        
    </>
  )
}

export default Navbar