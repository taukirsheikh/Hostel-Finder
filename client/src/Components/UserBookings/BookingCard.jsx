import React from 'react'
import './Booking.css'

const BookingCard = ({booking}) => {
    const { booking_id, hostel, booker_name, contact, seater, booking_date } = booking;
  const { manager_name, manager_contact, hostel_name } = hostel;
  return (
   <>
   

   <div className="card">
      <h3>Booking ID: B{booking_id}K</h3>
      <h3>Hostel Name: {hostel_name}</h3>
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