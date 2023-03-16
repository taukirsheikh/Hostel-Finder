import React from "react";
import Navbar from "../homeComponents/navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import {MdStarRate} from "react-icons/md"
import Comment from "../SmallComponents/Comment"

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
import ImageSlider from "../SmallComponents/ImageSlider";
import RatingHostel from "../SmallComponents/RatingHostel";

function SingleHostelDetailsView() {
  const { hid } = useParams(); // hid is the dynamic route we used in routes
  // console.log(hid);
  const [singleHostel, setSingleHostel] = useState([]);

  useEffect(() => {
    const fetchSingleHostel = async () => {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/single-hostel/${hid}/`
        );
        // console.table(resp.data);
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
    single_seater_vacant,
    two_seater_vacant,
    three_seater_vacant,
    four_seater_vacant,
    rating,
    manager_id,
  } = singleHostel;

  return (
    <>
      <div className="single-hostel-container">
        <Navbar />

        <div className="hostel-detail-items">
          <div className="hostel-images">
            <ImageSlider image_1={image_1} image_2={image_2} image_3={image_3}/>
            {/* <img
              src={
                image_1 ||
                "https://media.istockphoto.com/id/1166153578/de/vektor/vektor-cartoon-studenten-schlafsaal-raum-innen.jpg?s=612x612&w=0&k=20&c=hUVYv9cvL40_ywb89_ms__HBatti4JmbRsKKlSy8bPY="
              }
              alt="Avatar"
              /> */}
          </div>
          {/* booking this hostel */}
          <div className="book-hostel"> 
            <BookingSingleHostel hostel_id={hostel_id} manager_id={manager_id}/>
          </div>
          <div>
            <b>Hostel Name :</b>
            <span>{hostel_name}</span> 
            <span className="rating-hostel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <MdStarRate className="star-icon"
            size={30}
            color="#e3ca65"/>{rating}/5</span>
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
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <strong></strong>
              <div className="room-vacant">

              {single_seater_vacant ? (
                  <span className="fact-item">✔
                  </span>
                ) : (<span>❌</span>)}
              {two_seater_vacant ? (
                  <span className="fact-item">✔
                  </span>
                ) : (<span>❌</span>)}
              {three_seater_vacant ? (
                  <span className="fact-item">✔
                  </span>
                ) : (<span>❌</span>)}
              {four_seater_vacant ? (
                  <span className="fact-item">✔
                  </span>
                ) : (<span>❌</span>)}
              </div>
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
            Welcome to our cozy and friendly hostel, where you can enjoy a comfortable and affordable stay in the heart of the city. Our hostel is located in a lively and vibrant neighborhood, within walking distance to all the main attractions, restaurants, bars, and shops.
            </p>
          </div>
          <br />
          <div className="map-link">
          <a href={ map_link || "https://www.google.com/maps/search/hostels+near+me/@27.6918747,85.2730619,13z/data=!3m1!4b1?hl=en" } target="_blank"><img src="https://iili.io/HXvJJ8F.md.png" alt="HXvJJ8F.md.png" border="0"/>
          {/* View on Map */}
          <p>View on Map</p>
          </a>
          </div>
          <RatingHostel hostel_id={hostel_id} hostel_rating={rating}/>
          

        </div>
        <Comment hostel_id={hostel_id}/>

      </div>
    </>
  );
}

export default SingleHostelDetailsView;
