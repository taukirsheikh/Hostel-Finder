import React from "react";
import Navbar from "../homeComponents/navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../style.css";

import "../homeComponents/SingleHostelDetails.css";
import {
  FaWifi,
  FaHotTub,
  FaTshirt,
  FaParking,
  FaVideo,
  FaFan,
  FaWindowMaximize,
} from "react-icons/fa";
import { BiCctv } from "react-icons/bi";
import { MdBalcony } from "react-icons/md";
import { useEffect, useState } from "react";
import { BookingSingleHostel } from "./BookingSingleHostel";

function SingleHostelDetailsView() {
  const { hid } = useParams(); // hid is the dynamic route we used in routes
  console.log(hid);
  const [singleHostel, setSingleHostel] = useState([]);

  useEffect(() => {
    const fetchSingleHostel = async () => {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/single-hostel/${hid}/`
        );
        console.table(resp.data);
        setSingleHostel(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingleHostel();
  },[hid]);
  //   const singleHostel = SearchedHostelList.find((hcard) => hcard.hostel_id === parseInt(hid));
  //   console.log(singleHostel);
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
            <img
              src={
                image_1 ||
                "https://media.istockphoto.com/id/1166153578/de/vektor/vektor-cartoon-studenten-schlafsaal-raum-innen.jpg?s=612x612&w=0&k=20&c=hUVYv9cvL40_ywb89_ms__HBatti4JmbRsKKlSy8bPY="
              }
              alt="Avatar"
            />
          </div>
          {/* booking this hostel */}
          <div className="book-hostel"> 
            <BookingSingleHostel hostel_id={hostel_id} manager_id={manager_id}/>
          </div>
          <div>
            <b>Hostel Name :</b>
            <span>{hostel_name}</span>
          </div>
          <div>
            <b>Location :</b>
            <span>
              {place}, {district}
            </span>
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
          <div>
            <strong> Facilities:</strong>
            <div>
              <div className="facilities-hostel">
                {wifi ? (
                  <span className="fact-item">
                    <FaWifi size="2rem" /> Wifi
                  </span>
                ) : null}
                {/* {closet ? <p><FaCloset /> Closet</p> : null} */}
                {hot_water ? (
                  <span>
                    <FaHotTub size="2rem" /> Hot Water
                  </span>
                ) : null}
                {laundry ? (
                  <span>
                    <FaTshirt size="2rem" /> Laundry
                  </span>
                ) : null}
                {parking ? (
                  <span>
                    <FaParking size="2rem" /> Parking
                  </span>
                ) : null}
                {cctv ? (
                  <span>
                    <BiCctv size="2rem" /> CCTV
                  </span>
                ) : null}
                {fan ? (
                  <span>
                    <FaFan size="2rem" /> Fan
                  </span>
                ) : null}
                {balcony ? (
                  <span>
                    <MdBalcony size="2rem" /> Balcony
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <b>Description :</b>

              <p>
                {description}
              </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores eveniet saepe harum similique inventore excepturi,
              assumenda rerum omnis labore quam ex commodi, soluta hic, aliquam
              obcaecati debitis odio quasi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleHostelDetailsView;
