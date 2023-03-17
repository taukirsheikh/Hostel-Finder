import React from 'react'
import './Booking.css'
import {MdPending} from "react-icons/md"

const BookingCard = ({booking}) => {
    const { booking_id, hostel, booker_name, contact, seater, booking_date, booking_status } = booking;
  const { manager_name, manager_contact, hostel_name } = hostel;
  return (
   <>
   

   <div className="card">
      <h3>Booking ID: B{booking_id}K</h3>
      <h3>Hostel Name: {hostel_name}</h3>
      {booking_status? (

      <h4>Booking Status:
        Confirmed ✔
        
         </h4>
      ):(<h5>Booking status : Not Confirmed <MdPending /> </h5>)}
      <p>Manager Name: {manager_name}</p>
      <p>Manager Contact: {manager_contact}</p>
      <p>Booker Name: {booker_name}</p>
      <p>Contact: {contact}</p>
      <p>Seater: {seater}</p>
      <p>Booking Date: {booking_date}</p>
    </div>
  
   </>
  )
}

export default BookingCard