import React, { useEffect } from "react";
import HostelsList from "../../assets/HostelList";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";
// import {HostelRegList} from "./ApiOfHostelReg/Hosteldatajson";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../redux/store";
function UpdateHostel() {
  const [hostelList, setHostelList] = useState([]);
  const managerID = useSelector((state) => state.user.userDetail.user_id);

  // console.log(hostelList);
  const handleupdateNavigation = () => {
    console.log("i am here ");
    console.log(managerID);
  };

  
  useEffect(() => {
    if (managerID) {
      const fetchHostelList = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/update-list/${managerID}/`
          );
          setHostelList(response.data);
          console.table(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchHostelList();
    } else {
      console.log('wait');
    }
  }, [managerID]);
  

  return (
    <>
      <div className="hostel-container-bg">
        <br />

        <div
          className="hostel-list-container"
          onClick={handleupdateNavigation}
          style={{ textDecoration: "none" }}
        >
          {hostelList.length === 0 ? (
            <div>You have not registered any hostel yet</div>
          ) : (
            hostelList.map((hostel) => (
              <Link
                to={`${hostel.hostel_id}`}
                style={{ textDecoration: "none" }}
                key={hostel.hostel_id}
              >
                <div className="hostel-item">
                  <div className="id-hname">
                    <ul>
                      <li>Hostel ID: {hostel.hostel_id}</li>
                      <li>Hostel Name: {hostel.hostel_name}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default UpdateHostel;
