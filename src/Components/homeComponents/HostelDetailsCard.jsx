import React from "react";
import hostelCard from "../../assets/hostelCard";
import { Link } from "react-router-dom";

function HostelDetailsCard() {
  return (
    <>
      <div className="hostel-cards-container">
        <h2> Featured Hostels</h2>
        
        <br />

        <div className="hostel-card-items">

        

        {
            hostelCard.map((hElem)=>{

                return(

                    <div className="hostel-card" key={hElem.Hid}>
                    <img 
                      src={hElem.hpfimage}
                      alt="Avatar"
                      className="hostel-profile-image"
                    />
                    <div className="details-container">
                      <div>
                        <h4>
                          <b>{hElem.hname}</b>
                        </h4>
                        <p>Location : {hElem.hlocation}</p>
                      </div>

                      {
                        hElem.hprices.map((hpElem)=>{

                            return (

                                <div>
                                Price of Rooms
                                <br />
                                <div className="hostel-price-container">
                  
                                <table className="price-of-rooms">
                                  
                                  <thead>
                                    <tr>
                                      <th>1 Seater</th>
                                      <td >{hpElem.oneSeater}</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th>2 Seater</th>
                                      <td>{hpElem.twoSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>3 Seater</th>
                                      <td> {hpElem.threeSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>4 Seater</th>
                  
                                      <td>{hpElem.fourSeater}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                </div>
                  
                              </div>
                               
                            )

                        })
                      }

                     
                    
                      <div>
                       <Link to={`/hostel-details/${hElem.Hid}`} style={{textDecoration: 'none'}}>
                       <button
                          type="button"
                          className="button"
                        >
                          View Details
                        </button>
                       </Link> 
                      </div>
                      <br />
                    </div>
                  </div>


                )
            })
        }


        </div>
                       
     
               
      </div>
    </>
  );
}

export default HostelDetailsCard;
