import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import BookingCard from './BookingCard'
import './Booking.css'

const BookedHostel = () => {
    const booker_id=useSelector((state)=>state.user.userDetail.user_id)
    const [bookings, setBookings] = useState([]);
    console.log(bookings)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user-bookings/${booker_id}/`)
          .then(response => response.json())
          .then(data => setBookings(data))
          .catch(error => console.log(error));
      }, [booker_id]);

     
  return (

    <>
    <div className='book-title'> Booked Hostel</div>
    <div className='card-container'>
    {bookings.map(booking => (
          <BookingCard key={booking.booking_id} booking={booking} />
        ))}

    </div>
    </>

  )
}

export default BookedHostel