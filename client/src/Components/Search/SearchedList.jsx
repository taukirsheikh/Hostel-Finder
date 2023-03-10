import React from "react";
// import hostelCard from "../../assets/hostelCard";
import { Link } from "react-router-dom";
import "./../homeComponents/HostelDetailsCard.css";
// import SearchedHostelList from "../../assets/DbHostelList"

import { useSelector } from "react-redux";

function HostelDetailsCard() {
  const searchHostelList= useSelector((state)=>state.search.hostelList)
  return (
    <>
      <div className="hostel-cards-container">
        {searchHostelList.length>1 ? <h2>Searched Hostel</h2>:(<h2>Your Search Hostel Will Appear Here</h2>)}
        {console.log(searchHostelList.length,"hi")}
        {/* <h2> Featured Hostels</h2> */}
        <div className="hostel-card--items">
          {searchHostelList.map((hElem) => {
            return (
              <div className="hostel-card" key={hElem.hostel_id}>
                <img
                  src={hElem.image_1 || "https://media.istockphoto.com/id/1166153578/de/vektor/vektor-cartoon-studenten-schlafsaal-raum-innen.jpg?s=612x612&w=0&k=20&c=hUVYv9cvL40_ywb89_ms__HBatti4JmbRsKKlSy8bPY="}
                  alt="Avatar"
                  className="hostel-profile-image"
                  // onError = {e => e.target.style.display = 'none'}
                />
                <div className="details-container">
                  <div>
                    <h4>
                      <b>{hElem.hostel_name}</b>
                    </h4>
                    <p>Location : {hElem.place}, {hElem.district}</p>
                  </div>
                  {/* ============= Start of Room Prices ============ */}
                  
                    
                  <div>
  <p>Room Price</p>
  <div className="hostel-price-container">
    <table className="price-of-rooms">
      <thead>
        <tr>
          <th>1 Seater</th>
          <td>{hElem.single_seater === 0 ? "N/A" : hElem.single_seater}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>2 Seater</th>
          <td>{hElem.two_seater === 0 ? "N/A" : hElem.two_seater}</td>
        </tr>
        <tr>
          <th>3 Seater</th>
          <td>{hElem.three_seater === 0 ? "N/A" : hElem.three_seater}</td>
        </tr>
        <tr>
          <th>4 Seater</th>
          <td>{hElem.four_seater === 0 ? "N/A" : hElem.four_seater}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

                   
                  <div className="btn-view--details">
                    <Link
                      to={`/hostel-detail/${hElem.hostel_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button type="button" className="button">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HostelDetailsCard;
