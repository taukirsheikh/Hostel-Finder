import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchHostel as getHostel } from "../redux/searchSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Searchbar.css";

const Searchbar = () => {
  const navigate=useNavigate()
  const searchedHostel= useSelector((state)=>state.search.hostelList)
  const dispatch=useDispatch();
  const [price, setPrice] = useState(0);
  const [selectedSeater, setSelectedSeater] = useState("");
  const [seaterPrice, setSeaterPrice] = useState(0);
  const [searchDetail, setSearchDetail] = useState({
    hostel_name: "",
    hostel_type: "Boys",
    district: "",
    place: "",
    single_seater: 0,
    two_seater: 0,
    three_seater: 0,
    four_seater: 0,
    wifi: false,
    closet: false,
    hot_water: false,
    laundry: false,
    parking: false,
    cctv: false,
    fan: false,
    balcony: false,
  });
  useEffect(() => {
    console.log(price);
    console.log(searchDetail, "i am from useEffect");
  }, [price, searchDetail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePriceChange = (e) => {
    console.log(selectedSeater, "price change");
    const { value: newPrice } = e.target;
    setPrice(newPrice);
    if (selectedSeater) {
      setSearchDetail((prevState) => ({
        ...prevState,
        [selectedSeater]: parseInt(newPrice),
      }));
    } else {
      setSearchDetail((prevState) => ({
        ...prevState,
        single_seater: parseInt(newPrice),
        two_seater: newPrice * 0,
        three_seater: newPrice * 0,
        four_seater: newPrice * 0,
      }));
    }
  };

  const handleSeaterChange = (e) => {
    const { value: seater } = e.target;
    setSelectedSeater(seater);
    console.log(seater, "i am from seater chnage and which seater i am");

    setSearchDetail({ ...searchDetail, [seater]: parseInt(price) });
    if (seater === "single_seater") {
      setSearchDetail({
        ...searchDetail,
        [seater]: parseInt(price),
        two_seater: price * 0,
        three_seater: price * 0,
        four_seater: price * 0,
      });
      console.log("lol, i am single");
    }
    if (seater === "two_seater") {
      setSearchDetail({
        ...searchDetail,
        [seater]: parseInt(price),
        single_seater: price * 0,
        three_seater: price * 0,
        four_seater: price * 0,
      });
      console.log("lol, i am two");
    }
    if (seater === "three_seater") {
      setSearchDetail({
        ...searchDetail,
        [seater]: parseInt(price),
        two_seater: price * 0,
        single_seater: price * 0,
        four_seater: price * 0,
      });
      console.log("lol, i am three");
    }
    if (seater === "four_seater") {
      setSearchDetail({
        ...searchDetail,
        [seater]: parseInt(price),
        two_seater: price * 0,
        three_seater: price * 0,
        single_seater: price * 0,
      });
      console.log("lol, i am four");
    }
  };

  const handleCheckboxChange = (e) => {
    setSearchDetail({
      ...searchDetail,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Send search details to backend

    console.log(searchDetail);
    try{
      // const resp= await axios.get('http://127.0.0.1:8000/api/search-hostel', {params:searchDetail})
      const resp= await axios.post('http://127.0.0.1:8000/api/search-hostel/',searchDetail)
      .then((resp)=>{
        console.log(resp.data)
        dispatch(getHostel(resp.data))
        console.table(searchedHostel)
        navigate("/hostel-search")
      })

    }catch(error){
      console.log(error)
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSearch}>
        <section>
          <div className="search-container">
            <div className="search-items">
              <div>
                <input
                  type="text"
                  placeholder="search by name"
                  id="searchbyname"
                  className="searchbyname"
                  name="hostel_name"
                  onChange={handleChange}
                />
              </div>
              <div className="location-container">
                <input
                  type="search"
                  placeholder="District"
                  className="inputdetails"
                  name="district"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Place"
                  className="inputdetails"
                  name="place"
                  onChange={handleChange}
                />
                <select name="seater" id="" onChange={handleSeaterChange} className="seater-type">
                  <option value="single_seater"> 1 Seater </option>
                  <option value="two_seater"> 2 Seater </option>
                  <option value="three_seater"> 3 Seater </option>
                  <option value="four_seater"> 4 Seater </option>
                </select>
                <input
                  type="number"
                  placeholder="Price"
                  className="inputdetails"
                  name="price"
                  onChange={handlePriceChange}
                />
                <select
                  id="Hosteltype"
                  className="inputdetails hosteltype"
                  name="hostel_type"
                  onChange={handleChange}
                >
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girs</option>
                </select>
              </div>
              <div>
                <div className="checkboxfacilities">
                  <div className="fact-text">
                    <label id="facilities">Select Facilities:</label>
                  </div>

                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="parking"
                      name="parking"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="parking">Parking &nbsp;</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="laundry"
                      name="laundry"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="laundry">Laundry &nbsp;</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="cctv"
                      name="cctv"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="cctv">CCTV &nbsp;</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="wifi"
                      name="wifi"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="wifi">WiFi</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="fan"
                      name="fan"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="fan">Fan</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="closet"
                      name="closet"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="closet">Closet</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="balcony"
                      name="balcony"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="fan">Balcony</label>
                  </div>
                  <div className="fact-item">
                    <input
                      type="checkbox"
                      id="fan"
                      name="hot_water"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="fan">24/7 Hot & Cold Water</label>
                  </div>
                </div>
                <br />

                <div className="search-button-container">
                  <input
                    type="submit"
                    className="button search"
                    value="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Searchbar;
