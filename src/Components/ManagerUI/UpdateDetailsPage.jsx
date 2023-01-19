import React from 'react'

function UpdateDetailsPage() {
  return (
    <>
    
    <section className="registerContainer">
        <div className="registerItemsNames">
          <div>
            <br></br>
            <strong>Update Hostel</strong>
            <hr />
            <div className='hostel-id-text'>
               <strong>
                Hostel ID : 1001
                </strong> 
            </div>
          </div>
          <br />
          <form className="registerForm">
            <div className="nameAndpan">
              <div>
                <label>Hostel Name :</label>
                <br />
                <input
                  className="forminputfield_1 forminputfield_2"
                  type="text"
                  name=""
                ></input>
              </div>
              <div>
                <label>Pan No :</label>
                <br />
                <input
                  className="forminputfield_1 forminputfield_2"
                  type="text"
                  name=""
                ></input>
              </div>
            </div>
            <br />
            <div className="dis-pla-typ">
              <div>
                <label htmlFor="">District :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name=""
                ></input>
              </div>
              <div>
                <label htmlFor="">Place :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name=""
                ></input>
              </div>

              <div>
                <label htmlFor="">Type :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name=""
                ></input>
              </div>
            </div>
            <br />
            <div className="manager-contact">
              <div>
                <label htmlFor="">Hostel Manager Name :</label>
                <br />
                <input
                  className="forminputfield_1 forminputfield_2"
                  type="text"
                  name=""
                ></input>
              </div>

              <div>
                <label htmlFor="">Contact No. :</label>
                <br />
                <input
                  className="forminputfield_1"
                  type="text"
                  name=""
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
                  <label htmlFor="">1 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="text"
                    name=""
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="">2 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="text"
                    name=""
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="">3 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="text"
                    name=""
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="">4 Seater :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="text"
                    name=""
                  ></input>
                </div>
                <div className="prices-and-name-inputs">
                  <label htmlFor="">Admission Fee :</label>
                  <input
                    className="forminputfield_1 middle"
                    type="text"
                    name=""
                  ></input>
                </div>
              </div>
            </div>
            <br />
            <div>
              <label htmlFor="">Description :</label> <br />
              <textarea
                className="forminputfield_1 description"
                type="text"
                name=""
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
                    name=""
                  ></input>
                  <label htmlFor="">Wifi</label>
                </div>
                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">24/7 Hot & Cold Water</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Laundry</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Parking</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">CCTV</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Balcony</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Locker</label>
                </div>

                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Fan</label>
                </div>
                <div className="grid-item">
                  <input
                    className="forminputfield_1 checkboxsize"
                    type="checkbox"
                    name=""
                  ></input>
                  <label htmlFor="">Gym</label>
                </div>
              </div>
            </div>
            <br />
            <label htmlFor="">Hostel Images :</label>
            <br />
            <br />
            <div className="hostel-image">
              <div className="hostel-image-items">

              <label htmlFor="">Hostel Profile Image :</label>
              <br />
              <input
                type="file"
                className=""
                ></input>
              <br />
                </div>
                <div className="hostel-image-items">

              <label htmlFor="">Image 1 :</label>
              <br />
              <input
                type="file"
                className=""
                ></input>
                </div>
              <br />
                <div className="hostel-image-items">
              <label htmlFor=""> Image 2 :</label>
              <br />
              <input
                type="file"
                className=""
              ></input>
                </div>

              <br />
              <div className="hostel-image-items">

              <label htmlFor=""> Image 3 :</label>
              <br />
              <input
                type="file"
                className=""
              ></input>
                </div>
                <div className="hostel-image-items">

              <br></br>
              <label htmlFor=""> Image 4 :</label>
              <br />
              <input
                type="file"
    
              ></input>
                </div>

            </div>
            <br />
            <div className="register-button">
              <button
                type="button"
                className="register-button-item"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
    
  )
}

export default UpdateDetailsPage