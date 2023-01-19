import React from "react";
import HostelsList from "../../assets/HostelList";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import {HostelRegList} from "./ApiOfHostelReg/Hosteldatajson";
import { useState } from "react";
function UpdateHostel() {
  // const[hostelList,setHostelList]=useState(HostelRegList)
  // console.log(hostelList);
const handleupdateNavigation = ()=>{
  console.log('i am here ' );

}

 

  return (
    <>
      <div className="hostel-container-bg">
        <br />
        
        
        <div className="hostel-list-container" onClick={handleupdateNavigation}>
          {HostelsList.map((hostelItems) => {
            return (
              <Link  to={`${hostelItems.id}`  }  >
              <div className="hostel-items" key={hostelItems.id} >
                <div className="Id-Hname">
                  <ul   >
                    <li key={hostelItems.id}>Hostel Id: {hostelItems.id} </li>
                    <li>Hostel Name : {hostelItems.myname}</li>
                  </ul>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UpdateHostel;
