import React from "react";

function Bookings() {
  return (
    <>
      <div className="booking-page">
        <br />
        <h2>Bookings of Your Hostel</h2>
        <br />
        <div className="booking-container">
          {/* <h1>Bookings of Your Hostel</h1> */}

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
              <tr>
                <td>1</td>
                <td>Hamro Boys Hostel</td>
                <td>Himal Giri</td>
                <td>3</td>
                <td>9812378901</td>
                <td>jan 17, 2023</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Junu Girls Hostel</td>
                <td>Sarmila Gautam</td>
                <td>3</td>
                <td>9812305425</td>
                <td>jan 17, 2023</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sagar Boys Hostel</td>
                <td>Himmat Katwal</td>
                <td>2</td>
                <td>9881202225</td>
                <td>jan 17, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bookings;
