import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function RegisterHostel() {
  
  const managerId=useSelector((state)=>parseInt(state.user.userDetail.user_id))
  const[image_1, setImage_1]=useState(null)
  const[image_2, setImage_2]=useState(null)
  const[image_3, setImage_3]=useState(null)
  const [hostelData, setHostelData] = useState({
    manager_id: managerId,
    hostel_name: "",
    hostel_type: "Boys",
    pan_no: "",
    district: "",
    place: "",
    manager_name: "",
    manager_contact: "",
    single_seater: 0,
    two_seater: 0,
    three_seater: 0,
    four_seater: 0,
    admission_fee: 0,
    description: "",
    wifi: false,
    closet: false,
    hot_water: false,
    laundry: false,
    parking: false,
    cctv: false,
    fan: false,
    balcony: false,
    map_link: "",
  });
  const handleImagesUpload = () => {
    
  if (image_1) {
    setHostelData({
      ...hostelData,
      image_1,
    });
  }
  
  if (image_2) {
    setHostelData({
      ...hostelData,
      image_2,
    });
  }
  
  if (image_3) {
    setHostelData({
      ...hostelData,
      image_3,
    });
  }
  };
  
  useEffect(() => {
  handleImagesUpload();
  }, [image_1, image_2, image_3])
  console.log(managerId)
  // ------------------------------------

 
  const handleChange = (event) => {
    setHostelData({
      ...hostelData,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleCheckboxChange = (event) => {
    setHostelData({
      ...hostelData,
      [event.target.name]: event.target.checked,
    });
  };
  
  



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(hostelData);
    
   
    try{
      const response= await axios.post("http://127.0.0.1:8000/api/register-hostel/",hostelData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // const response= await axios.post("https://hostel.requestcatcher.com/test",hostelData);
      // const response= await axios.post("https://eoc5xb73r6ruesr.m.pipedream.net",hostelData);
      // const response= await axios.post("https://eoa0kngndulec0v.m.pipedream.net",hostelData);
      // const response= await axios.post("https://12548895-2c90-482a-a57a-42f46b4aed44.mock.pstmn.io/hostel",hostelData);
      console.log(response.data);
    } catch(error){
      console.log(error);
    }

  };
  return (
    <>
      <section className="registerContainer">
        <div className="registerItemsNames">
          <div>
            <br></br>
            <strong>Register Hostel</strong>
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
                  onChange={handleChange}
                  value={hostelData.hostel_name}
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
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label htmlFor="hostel_type">Type :</label>
                <br />
                <select className="forminputfield_1"
                  name="hostel_type"
                  // value={hostel.hostel_type}
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
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <br />
            <div className="price-bg">
              <label htmlFor="">Price of Rooms :</label>
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
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="two_seater">2 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="two_seater"
                    id="two_seater"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="three_seater">3 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="three_seater"
                    id="three_seater"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="four_seater">4 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="four_seater"
                    id="four_seater"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="">Admission Fee :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="number"
                    name="admission_fee"
                    id="admission_fee"
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
                    onChange={handleCheckboxChange}

                  ></input>
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="hot_water"
                    onChange={handleCheckboxChange}
                  ></input>
                  <label htmlFor="hot_water">24/7 Hot & Cold Water</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="laundry"
                    onChange={handleCheckboxChange}
                    
                  ></input>
                  <label htmlFor="laundry">Laundry</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="parking"
                    onChange={handleCheckboxChange}

                  ></input>
                  <label htmlFor="parking">Parking</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="cctv"
                    onChange={handleCheckboxChange}

                  ></input>
                  <label htmlFor="cctv">CCTV</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="balcony"
                    onChange={handleCheckboxChange}

                  ></input>
                  <label htmlFor="balcony">Balcony</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="closet"
                    onChange={handleCheckboxChange}

                  ></input>
                  <label htmlFor="closet">Closet</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name="fan"
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
                  onChange={(event) => setImage_1(event.target.files[0])}
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
                  // onChange={handleImage2Change}
                  onChange={(event) => setImage_2(event.target.files[0])}
                  

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
                  // onChange={handleImage3Change}
                  onChange={(event) => setImage_3(event.target.files[0])}


                ></input>
              </div>
              <div className="hostel-items">
                Google Maps Location Link (URL) :
                <br />
                <input
                 type="url"
                 name="map_link"
                 onChange={handleChange}
                 />
              </div>
            </div>
            <br />
            <div className="register-button">
              <button
                type="submit"
                className="register-button-item"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterHostel;
