import React from 'react'
import Navbar from './homeComponents/navbar'
import Searchbar from './homeComponents/searchbar'
import HostelDetailsCard from './homeComponents/HostelDetailsCard'
import './style.css'


const Hostel = () => {
  return (
    <>
    <div id="background">
      <Navbar/>
      <Searchbar/>
      <HostelDetailsCard/>
      </div>
    </>
  )
}

export default Hostel