import React from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import hostelCard from "../../assets/hostelCard";
import SearchedHostelList from "../../assets/DbHostelList"
import "../style.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import NatureIcon from "@mui/icons-material/Nature";
// import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import DevicesFoldIcon from "@mui/icons-material/DevicesFold";
import HotTubIcon from "@mui/icons-material/HotTub";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import CycloneIcon from "@mui/icons-material/Cyclone";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import BalconyIcon from "@mui/icons-material/Balcony";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./SingleHostelDetails.css";
import { FaWifi, FaHotTub, FaTshirt, FaParking, FaVideo, FaFan, FaWindowMaximize } from 'react-icons/fa';
import {BiCctv} from "react-icons/bi"
import {MdBalcony} from "react-icons/md"

function SingleHostelDetails() {
  const { hid } = useParams(); // hid is the dynamic route we used in routes
  console.log(hid);

  const singleHostel = SearchedHostelList.find((hcard) => hcard.hostel_id === parseInt(hid));
  console.log(singleHostel);
  // const {}=singleHostel
  const {
    hostel_id,
    image_1,
    image_2,
    image_3,
    hostel_name,
    hostel_type,
    district,
    place,
    manager_name,
    manager_contact,
    single_seater,
    two_seater,
    three_seater,
    four_seater,
    admission_fee,
    description,
    wifi,
    closet,
    hot_water,
    laundry,
    parking,
    cctv,
    fan,
    balcony,
    map_link,
    manager_id,
  } = singleHostel;

  return (
    <>
      <div className="single-hostel-container">
        <Navbar />

        <div className="hostel-detail-items">
          <div>
            <img src={image_1 || "https://media.istockphoto.com/id/1166153578/de/vektor/vektor-cartoon-studenten-schlafsaal-raum-innen.jpg?s=612x612&w=0&k=20&c=hUVYv9cvL40_ywb89_ms__HBatti4JmbRsKKlSy8bPY="}
                  alt="Avatar" />
          </div>
          <div>
            <b>Hostel Name :</b>
            <span>{hostel_name}</span>
          </div>
          <div>
            <b>Location :</b>
            <span>{place}, {district}</span>
          </div>
          <div>
            Hostel Manager: <span>{manager_name}</span>
          </div>
          <div>
            <b>Contact :</b>
            <span>{manager_contact}</span>
          </div>
          <div>
            <strong>Price of Rooms :</strong>
            <div>
              <br />
              
                  <div>
                    {/* <h>{money.oneSeater} {money.twoSeater}</h> */}
                    <table className="price-of-rooms money-rooms">
                      <thead>
                        <tr>
                          <th>1 Seater</th>
                          <td>{single_seater}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>2 Seater</th>
                          <td>{two_seater}</td>
                        </tr>
                        <tr>
                          <th>3 Seater</th>
                          <td> {three_seater}</td>
                        </tr>
                        <tr>
                          <th>4 Seater</th>

                          <td>{four_seater}</td>
                        </tr>
                        <tr>
                          <th>Admission Fee:</th>

                          <td>{admission_fee}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
               
            </div>
          </div>
          <div></div>
          <div >
            <strong> Facilities:</strong>
            <div>
           <div className="facilities-hostel">

            {wifi ? <span className="fact-item" ><FaWifi size="2rem" /> Wifi</span> : null}
            {/* {closet ? <p><FaCloset /> Closet</p> : null} */}
            {hot_water ? <span><FaHotTub size={2} /> Hot Water</span> : null}
            {laundry ? <span><FaTshirt size={1} /> Laundry</span> : null}
            {parking ? <span><FaParking size={2} /> Parking</span> : null}
            {cctv ? <span><BiCctv size={2} /> CCTV</span> : null}
            {fan ? <span><FaFan size={2}/> Fan</span> : null}
            {balcony ? <span><MdBalcony size={2}/> Balcony</span> : null}
          
              </div>
                     
            </div>
          </div>

          <div>
            <b>Description :</b>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Sunt dolores eveniet saepe harum similique inventore
              excepturi, assumenda rerum omnis labore quam ex commodi, soluta
              hic, aliquam obcaecati debitis odio quasi!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleHostelDetails;
