import React from "react";

const Searchbar = () => {
  return (
    <>
      <section>
        <div>
          <input
            type="text"
            placeholder="search by name"
            id="searchbyname"
          />
          <div>
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
              id="type"
              className="inputdetails"
            >
              <option value="boys">Boys</option>
              <option value="girls">Girs</option>
            </select>
          </div>
          <div>
            <div className="checkboxfacilities">
              <label id="facilities">Select Facilities:</label>
              <input
                type="checkbox"
                id="parking"
              />
              <label htmlFor="parking">Parking &nbsp;</label>
              <input
                type="checkbox"
                id="gym"
              />
              <label htmlFor="gym">Gym &nbsp;</label>
              <input
                type="checkbox"
                id="laundry"
              />
              <label htmlFor="laundry">Laundry &nbsp;</label>
              <input
                type="checkbox"
                id="cctv"
              />
              <label htmlFor="cctv">CCTV &nbsp;</label>
              <input
                type="checkbox"
                id="wifi"
              />
              <label htmlFor="wifi">WiFi</label>
            </div>
            <input
              type="button"
              className="button search"
              value="Search"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchbar;
