import React from "react";

function UpdateHostel() {
  const Hostels = [
    {
      id: 1001,
      myname: "Hamro Boys Hostel",
    },

    {
      id: 1002,
      myname: "Junu Girls Hostel",
    },

    {
      id: 1003,
      myname: "Sagar Boys Hostel",
    },
  ];

  return (
    <>
      <div className="hostel-container-bg">
        <br />
        <div className="hostel-list-container">
          {Hostels.map((hostelItems) => {
            return (
              <div className="hostel-items">
                <div className="Id-Hname">
                  <ul   >
                    <li key={hostelItems.id}>Hostel Id: {hostelItems.id} </li>
                    <li>Hostel Name : {hostelItems.myname}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UpdateHostel;
