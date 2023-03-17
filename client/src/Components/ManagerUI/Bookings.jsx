import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { confirmBooking as confirming } from "../redux/userSlice";


function Bookings() {
  const dispatch=useDispatch()
  const bookings = useSelector((state) => state.user.hostelBookings);
  console.table(bookings)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  console.log(bookings, "from booking component");
  const handleConfirm = async(booking_id,e)=>{
    e.preventDefault();
    console.log("booking id",booking_id)
    window.confirm("Do you want to Confirm the booking ?")
    if (confirm){
      console.log("ok was clicked")
      try{

        const resp= await axios.patch(`http://127.0.0.1:8000/api/booking-status/${booking_id}/`,{booking_status:true})
        console.log(resp.data)
        dispatch(confirming())
        alert("booking confirmed")
      }
      catch(err){
        console.error(err)
      }
    }

  }
  return (
    <>
      <div className="booking-page">
        <br />
        <h2>Bookings of Your Hostel</h2>
        <br />
        <div className="booking-container">
          <table id="customers">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>ID</th>
                <th>Hostel Name</th>
                <th>Student Name</th>
                <th>Seater</th>
                <th>Contact</th>
                <th>Booked Date</th>
                <th>Confirmed Status</th>
              </tr>
            </thead>
            <tbody>
              {!bookings ? (
                <tr>Hostel Bookings Will Appear Here</tr>
              ) : (
                bookings.map((booking, index) => (
                  <tr key={booking.booking_id}>
                    <td>{index + 1}</td>
                    <td>B{booking.booking_id}K</td>
                    <td>{booking.hostel}</td>
                    <td>{booking.booker_name}</td>
                    <td>{booking.seater}</td>
                    <td>{booking.contact}</td>
                    <td>{formatDate(booking.booking_date)}</td>
                    <td>{booking.booking_status==true ? ("Confirmed ✔") : ( 

                    <button onClick={(e)=>handleConfirm(booking.booking_id,e)}  className="booking-confirm-btn">Confirm</button>
                    )}
                    
                    </td>
                  </tr>
                ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bookings;
