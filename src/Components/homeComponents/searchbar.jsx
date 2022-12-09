import React from 'react'

const Searchbar = () => {
  return (
    <>
    
        <section>
          <div>
                <input type="text" placeholder="search by name" id="searchbyname"/>
                <div>
                    <input type="text" placeholder="District" className='inputdetails'/>
                    <input type="text" placeholder="Place" className='inputdetails'/> 
                    <input type="text" placeholder="Price" className='inputdetails'/>
                    <select id="type" className='inputdetails'>
                      <option value="boys">Boys</option>
                      <option value="girls">Girs</option>
               

                    </select>
                </div>
                  <div>
                     <div className="checkboxfacilities">
                            <label id="facilities">Select Facilities:</label>
                            <input type="checkbox" id="parking"/>
                            <label for="parking">Parking &nbsp;</label>
                            <input type="checkbox" id="gym"/>
                            <label for="gym">Gym &nbsp;</label>
                            <input type="checkbox" id="laundry"/>
                            <label for="laundry">Laundry &nbsp;</label>
                            <input type="checkbox" id="cctv"/>
                            <label for="cctv">CCTV &nbsp;</label>
                            <input type="checkbox" id="wifi"/>
                            <label for="wifi">WiFi</label>

                       </div>
                     <input type="button" className='button search' value="Search"/>
                  </div>
          </div>
        </section>
        
    </>
  )
}

export default Searchbar