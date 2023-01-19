import React from 'react'
import Navbar from './navbar'
import '../style.css'

function SingleHostelDetails() {
  return (
    <>
    <Navbar/>
    <div className='single-hostel-container'>
        <div className='hostel-detail-items'>

        <div>
        Hostel Name :

        </div>
        <div>
        Location :

        </div>
        <div>
        Warden Name :

        </div>
        <div>
         Contact :

        </div>
        <div>
        Price of Rooms :

        </div>
        <div>
            Facilities:
        </div>
        <div>
        Description :

        </div>
        </div>
    </div>
    </>
   
  )
}

export default SingleHostelDetails