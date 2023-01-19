import React from "react";

const Searchbar = () => {
  return (
    <>
      <section >
        <div className="search-container" >
          <div className="search-items">

          
          <div>
            <input
              type="text"
              placeholder="search by name"
              id="searchbyname"
              className="searchbyname"
            />
          </div>
          <div className="location-container">
            <input
              type="search"
              placeholder="District"
              className="inputdetails"
            />
            <input
              type="text"
              placeholder="Place"
              className="inputdetails"
            />
            <input
              type="number"
              placeholder="Price"
              className="inputdetails"
            />
            <select
              id="Hosteltype"
              className="inputdetails hosteltype"
            >
              <option value="boys">Boys</option>
              <option value="girls">Girs</option>
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
              />
              <label htmlFor="parking">Parking &nbsp;</label>
              </div>
              <div className="fact-item">


              <input
                type="checkbox"
                id="gym"
              />
              <label htmlFor="gym">Gym &nbsp;</label>
              </div>
              <div className="fact-item">
                
              <input
                type="checkbox"
                id="laundry"
              />
              <label htmlFor="laundry">Laundry &nbsp;</label>
              </div>
              <div className="fact-item">

              <input
                type="checkbox"
                id="cctv"
              />
              <label htmlFor="cctv">CCTV &nbsp;</label>
              </div>
              <div className="fact-item">

              <input
                type="checkbox"
                id="wifi"
              />
              <label htmlFor="wifi">WiFi</label>
              </div>
              <div className="fact-item">

              <input
                type="checkbox"
                id="fan"
              />
              <label htmlFor="fan">Fan</label>
              </div>
              <div className="fact-item">

              <input
                type="checkbox"
                id="fan"
              />
              <label htmlFor="fan">Laundry</label>
              </div>
              <div className="fact-item">

              <input
                type="checkbox"
                id="fan"
              />
              <label htmlFor="fan">Balcony</label>
              </div>
              <div className="fact-item">

              <input
                type="checkbox"
                id="fan"
              />
              <label htmlFor="fan">24/7 Hot & Cold Water</label>
              </div>
            </div>
            <br />

            <div className="search-button-container">

              <input
                type="button"
                className="button search"
                value="Search"
              />
            </div>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchbar;
