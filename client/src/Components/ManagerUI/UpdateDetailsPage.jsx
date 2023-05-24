import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateDetailsPage() {
  const [hostelData, setHostelData] = useState([]);
  const { hid } = useParams();
  console.log(hid + " is id from single hostel update");
  useEffect(() => {
    if (hid) {
      const fetchHostelData = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/update-single-hostel/${hid}/`
          );
          console.table(response.data);
          setHostelData(response.data);
          console.log("hostel-data received", hostelData);
          console.log(hostelData.hostel_id);
        } catch (error) {
          console.error(error);
        }
      };
      fetchHostelData();
    }
  }, [hid]);

  const [hostelUpdate, setHostelUpdate] = useState({
    hostel_name: "",
    hostel_type: "",
    pan_no: "",
    district: "",
    place: "",
    manager_name: "",
    manager_contact: "",
    single_seater: "",
    two_seater: "",
    three_seater: "",
    four_seater: "",
    admission_fee: "",
    description: "",
    // image_1: "",
    // image_2: "",
    // image_3: "",
    wifi: "",
    closet: "",
    hot_water: "",
    laundry: "",
    parking: "",
    cctv: "",
    fan: "",
    balcony: "",
    map_link: "",
    single_seater_vacant: "",
    two_seater_vacant: "",
    three_seater_vacant: "",
    four_seater_vacant: "",
  });

  // sending
  useEffect(() => {
    if (hostelData) {
      setHostelUpdate({
        hostel_name: hostelData.hostel_name,
        hostel_type: hostelData.hostel_type,
        pan_no: hostelData.pan_no,
        district: hostelData.district,
        place: hostelData.place,
        manager_name: hostelData.manager_name,
        manager_contact: hostelData.manager_contact,
        single_seater: hostelData.single_seater,
        two_seater: hostelData.two_seater,
        three_seater: hostelData.three_seater,
        four_seater: hostelData.four_seater,
        admission_fee: hostelData.admission_fee,
        description: hostelData.description,
        // image_1: hostelData.image_1,
        // image_2: hostelData.image_2,
        // image_3: hostelData.image_3,
        wifi: hostelData.wifi,
        closet: hostelData.closet,
        hot_water: hostelData.hot_water,
        laundry: hostelData.laundry,
        parking: hostelData.parking,
        cctv: hostelData.cctv,
        fan: hostelData.fan,
        balcony: hostelData.balcony,
        map_link: hostelData.map_link,
        single_seater_vacant: hostelData.single_seater_vacant,
        two_seater_vacant: hostelData.two_seater_vacant,
        three_seater_vacant: hostelData.three_seater_vacant,
        four_seater_vacant: hostelData.four_seater_vacant,
      });
    }
  }, [hostelData]);

  // receiving from fetch
  console.log("i am from hostelUpdate ", hostelUpdate);
  const {
    hostel_name,
    hostel_type,
    pan_no,
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
    image_1,
    image_2,
    image_3,
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
  } = hostelUpdate;
  const handleChange = (e) =>
    setHostelUpdate({ ...hostelUpdate, [e.target.name]: e.target.value });
  const handleCheckboxChange = (e) =>
    setHostelUpdate({ ...hostelUpdate, [e.target.name]: e.target.checked });
  console.log(typeof two_seater);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.table(hostelUpdate)

  //   axios
  //     .patch(`http://127.0.0.1:8000/api/update-single-hostel/${hid}/`, hostelUpdate)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // -------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(hostelUpdate);

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/update-single-hostel/${hid}/`,
        hostelUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //  const response= await axios.post("https://12548895-2c90-482a-a57a-42f46b4aed44.mock.pstmn.io/hostel",hostelUpdate);
      console.log(response.data,'success');
      alert("Hostel Successfully Updated")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="registerContainer">
        <div className="registerItemsNames">
          <div>
            <br></br>
            <strong>Update Hostel Hostel</strong>
            <hr />
          </div>
          {/* form */}
          <form
            className="registerForm"
            onSubmit={handleSubmit}
            // encType="multipart/form-data"
          >
            <div className="nameAndpan">
              <div>
                <label htmlFor="hostel_name">Hostel Name :</label>
                <br />
                <input
                  className="forminputfield_1 forminputfield_2"
                  type="text"
                  name="hostel_name"
                  id="hostel_name"
                  value={hostel_name}
                  onChange={handleChange}
                  // value={hostelData.hostel_name}
                ></input>
              </div>
              <div>
                <label htmlFor="pan_no:">Pan No :</label>
                <br />
                <input
                  className="forminputfield_1 forminputfield_2"
                  type="text"
                  id="pan_no"
                  name="pan_no:"
                  value={pan_no}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <br />
            <div className="dis-pla-typ">
              <div>
                <label htmlFor="district">District :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name="district"
                  id="district"
                  value={district}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="place">Place :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name="place"
                  id="place"
                  value={place}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label htmlFor="hostel_type">Type :</label>
                <br />
                <select
                  className="forminputfield_1"
                  name="hostel_type"
                  // value={hostel.hostel_type}
                  value={hostel_type}
                  onChange={handleChange}
                >
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                </select>
                {/* <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name=""
                ></input> */}
              </div>
            </div>
            <br />
            <div className="manager-contact">
              <div>
                <label htmlFor="manager_name">Hostel Manager Name :</label>
                <br />
                <input
                  className="forminputfield_1 forminputfield_2"
                  type="text"
                  name="manager_name"
                  id="manager_name"
                  value={manager_name}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label htmlFor="manager_contact">Contact No. :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name="manager_contact"
                  id="manager_contact"
                  value={manager_contact}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <br />
            <div className="price-bg">
              <label htmlFor="">Price of Rooms :</label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>Rooms Available</label>
              <br />
              <br />
              <div className="price-of-room">
                <div className="prices-and-name-inputs">
                  <label htmlFor="single_seater">1 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="single_seater"
                    id="single_seater"
                    value={single_seater}
                    onChange={handleChange}
                  ></input>
                   <input type="checkbox" className="room-checkbox" name="single_seater_vacant" checked={single_seater_vacant} onChange={handleCheckboxChange} />
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="two_seater">2 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="two_seater"
                    id="two_seater"
                    value={two_seater}
                    onChange={handleChange}
                  ></input>
                  <input type="checkbox" className="room-checkbox" name="two_seater_vacant" checked={two_seater_vacant} onChange={handleCheckboxChange} />
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="three_seater">3 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="three_seater"
                    id="three_seater"
                    value={three_seater}
                    onChange={handleChange}
                  ></input>
                  <input type="checkbox" className="room-checkbox" name="three_seater_vacant" checked={three_seater_vacant} onChange={handleCheckboxChange} />
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="four_seater">4 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="four_seater"
                    id="four_seater"
                    value={four_seater}
                    onChange={handleChange}
                  ></input>
                  <input type="checkbox" className="room-checkbox" name="four_seater_vacant" checked={four_seater_vacant} onChange={handleCheckboxChange} />
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="">Admission Fee :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="admission_fee"
                    id="admission_fee"
                    value={admission_fee}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <br />
            <div>
              <label htmlFor="description">Description :</label> <br />
              <textarea
                className="forminputfield_1 description"
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
            <br />
            <div>
              <label htmlFor="">Facilities :</label> <br />
              <div className="facilities-items">
                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="wifi"
                    checked={wifi}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="hot_water"
                    checked={hot_water}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="hot_water">24/7 Hot & Cold Water</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="laundry"
                    checked={laundry}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="laundry">Laundry</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="parking"
                    checked={parking}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="parking">Parking</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="cctv"
                    checked={cctv}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="cctv">CCTV</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="balcony"
                    checked={balcony}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="balcony">Balcony</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="closet"
                    checked={closet}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="closet">Closet</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="fan"
                    checked={fan}
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="fan">Fan</label>
                </div>
                {/* <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Gym</label>
                </div> */}
              </div>
            </div>
            <br />
            <label htmlFor="">Hostel Images :</label>
            <br />
            <br />
            <div className="hostel-image">
              <div className="hostel-image-items">
                <label htmlFor="image_1">Hostel Profile Picture :</label>
                <br />
                <input
                  type="file"
                  className=""
                  name="image_1"
                  // onChange={handleImage1Change}
                  // onChange={(event) => setImage_1(event.target.files[0])}
                  onChange={(e) =>
                    setHostelUpdate({
                      ...hostelUpdate,
                      image_1: e.target.files[0],
                    })
                  }
                ></input>
                <br />
              </div>
              {/* <div className="hostel-image-items">

              
                </div> */}
              <strong>Other Images of Your Hostel</strong> <br />
              <div className="hostel-image-items">
                <label htmlFor="image_2"> Image 2 :</label>
                <br />
                <input
                  type="file"
                  className=""
                  name="image_2"
                  onChange={(e) =>
                    setHostelUpdate({
                      ...hostelUpdate,
                      image_2: e.target.files[0],
                    })
                  }

                  // onChange={handleImage2Change}
                  // onChange={(event) => setImage_2(event.target.files[0])}
                ></input>
              </div>
              <br />
              <div className="hostel-image-items">
                <label htmlFor="image_3"> Image 3 :</label>
                <br />
                <input
                  type="file"
                  className=""
                  name="image_3"
                  onChange={(e) =>
                    setHostelUpdate({
                      ...hostelUpdate,
                      image_3: e.target.files[0],
                    })
                  }
                  // onChange={handleImage3Change}
                  // onChange={(event) => setImage_3(event.target.files[0])}
                ></input>
              </div>
              <div className="hostel-items">
                Google Maps Location Link (URL) :
                <br />
                <textarea type="url" name="map_link" onChange={handleChange} id="" cols="30" rows="1"></textarea>
                
              </div>
            </div>
            <br />
            <div className="register-button">
              <button type="submit" className="register-button-item">
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateDetailsPage;
