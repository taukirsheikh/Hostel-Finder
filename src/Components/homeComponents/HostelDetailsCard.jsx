import React from "react";

const hostelCard=[
    {
    hid:1001,
    hname:'New Boys Hostel',
    hlocation:'New Road',
    himage:"https://media.nomadicmatt.com/hostelrules01.jpg",
    hprices:[{
        oneSeater:11500,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},
    {
    hid:1002,
    hname:'Giri Boys Hostel',
    hlocation:'Buddhanagar',
    himage:"https://mite.ac.in/wp-content/uploads/2020/01/ANT02474.jpg",
    hprices:[{
        oneSeater:11500,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},
    {
    hid:1003,
    hname:'Mero Boys Hostel',
    hlocation:'Bijulibazar',
    himage:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/405031654.jpg?k=d6bd431a0ed343e89b077505d1d660e63ee1765a279e9d52abca4955f5580e59&o=&hp=1",
    hprices:[{
        oneSeater:11500,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},
    {
    hid:1004,
    hname:'Hamro Boys Hostel',
    hlocation:'New Road',
    himage:"https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Sep/19/Photo_h400_w540/GR2-318227-1496807_400_540.jpeg",
    hprices:[{
        oneSeater:11500,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},
    {
    hid:1005,
    hname:'Hamro Boys Hostel',
    hlocation:'Buddhanagar',
    himage:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/386641763.jpg?k=05348b753426372d233b0b51e4a8d08b9eed98c3eb175d2c25a8c281d73c9990&o=&hp=1",
    hprices:[{
        oneSeater:13000,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},
    {
    hid:1006,
    hname:'Hamro Boys Hostel',
    hlocation:'Buddhanagar',
    himage:"https://www.raiuniversity.edu/wp-content/uploads/Hostel-min.jpg",
    hprices:[{
        oneSeater:13000,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},
    {
    hid:1007,
    hname:'Shyam Boys Hostel',
    hlocation:'Buddhanagar',
    himage:"https://thumbs.dreamstime.com/b/backpackers-hostel-modern-bunk-beds-dorm-room-twelve-people-inside-79935795.jpg",
    hprices:[{
        oneSeater:13000,
        twoSeater:11000,
        threeSeater:10000,
        fourSeater:9000,
    }]

},




]




function HostelDetailsCard() {
  return (
    <>
      <div className="hostel-cards-container">
        <h2>Hostels</h2>
        
        <br />

        <div className="hostel-card-items">

        

        {
            hostelCard.map((hElem)=>{

                return(

                    <div className="hostel-card">
                    <img
                      src={hElem.himage}
                      alt="Avatar"
                      className="hostel-profile-image"
                    />
                    <div className="details-container">
                      <div>
                        <h4>
                          <b>{hElem.hname}</b>
                        </h4>
                        <p>Location : {hElem.hlocation}</p>
                      </div>

                      {
                        hElem.hprices.map((hpElem)=>{

                            return (

                                <div>
                                Price of Rooms
                                <br />
                                <div className="hostel-price-container">
                  
                                <table className="price-of-rooms">
                                  
                                  <thead>
                                    <tr>
                                      <th>1 Seater</th>
                                      <td >{hpElem.oneSeater}</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th>2 Seater</th>
                                      <td>{hpElem.twoSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>3 Seater</th>
                                      <td> {hpElem.threeSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>4 Seater</th>
                  
                                      <td>{hpElem.fourSeater}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                </div>
                  
                              </div>
                               
                            )

                        })
                      }

                     
                    
                      <div>
                        <button
                          type="button"
                          className="button"
                        >
                          View Details
                        </button>
                      </div>
                      <br />
                    </div>
                  </div>


                )
            })
        }


        </div>
                       
     
               
      </div>
    </>
  );
}

export default HostelDetailsCard;
