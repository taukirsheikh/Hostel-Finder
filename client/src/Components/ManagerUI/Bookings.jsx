import React from "react";
import { useSelector } from "react-redux";

function Bookings() {
  const bookings = useSelector((state) => state.user.hostelBookings);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  console.log(bookings, "from booking component");
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
                <th>Hostel Name</th>
                <th>Student Name</th>
                <th>Seater</th>
                <th>Contact</th>
                <th>Booked Date</th>
              </tr>
            </thead>
            <tbody>
              {!bookings ? (
                <h1>Hostel Bookings Will Appear Here</h1>
              ) : (
                bookings.map((booking, index) => (
                  <tr key={booking.booking_id}>
                    <td>{index + 1}</td>
                    <td>{booking.hostel}</td>
                    <td>{booking.booker_name}</td>
                    <td>{booking.seater}</td>
                    <td>{booking.contact}</td>
                    <td>{formatDate(booking.booking_date)}</td>
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
