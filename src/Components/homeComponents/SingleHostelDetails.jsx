import React from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import hostelCard from '../../assets/hostelCard'
import '../style.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import NatureIcon from '@mui/icons-material/Nature';
// import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import DevicesFoldIcon from '@mui/icons-material/DevicesFold';
import HotTubIcon from '@mui/icons-material/HotTub';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import CycloneIcon from '@mui/icons-material/Cyclone';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import BalconyIcon from '@mui/icons-material/Balcony';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
function SingleHostelDetails() {

  const {hid}=useParams();// hid is the dynamic route we used in routes
  console.log(hid);

  const singleHostel= hostelCard.find(hcard=>hcard.Hid===parseInt(hid))
  console.log(singleHostel);
  // const {}=singleHostel
  const { Hid, hname, hlocation, hmanagerName, hcontact, hdescription, hfacilities, hpfimage, hprices } = singleHostel

  
  return (
    <>
   
    <div className='single-hostel-container'>
    <Navbar/>
      

        <div className='hostel-detail-items'>
        <div>
          <img src={hpfimage} alt="" />
         
        </div>
        <div>
        <b>
          Hostel Name : 
          </b>
          <span> 
          {hname}
            </span>

        </div>
        <div>
        <b>

        Location :
        </b>
<span>{hlocation}</span>
        </div>
        <div>
        Warden Name :
<span>{hmanagerName}</span>


        </div>
        <div>
        <b>
           Contact :
          </b>
<span>{hcontact}</span>


        </div>
        <div>
        <strong>
          Price of Rooms :
          </strong>
        <div>
          <br />
          {
            hprices.map((money)=>{

              return(
              <div>
                {/* <h>{money.oneSeater} {money.twoSeater}</h> */}
        <table className="price-of-rooms money-rooms">
                                  
                                  <thead>
                                    <tr>
                                      <th>1 Seater</th>
                                      <td >{money.oneSeater}</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th>2 Seater</th>
                                      <td>{money.twoSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>3 Seater</th>
                                      <td> {money.threeSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>4 Seater</th>
                  
                                      <td>{money.fourSeater}</td>
                                    </tr>
                                    <tr>
                                      <th>Admission Fee:</th>
                  
                                      <td>{money.admissionFee}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                </div>
              )
            })
          }
                                
        </div>

        </div>
        <div>

        </div>
        <div>
           <strong> Facilities:</strong>
           <div>
            {
              hfacilities.map((facility)=>{
                return (
                  
                  <div className='facilities-hostel'>
                   { facility.wifi ? <span className='fact-item'><RssFeedIcon/>Wifi</span> : <p>No Wifi</p>}
                    {facility.parking ? <span><NatureIcon/>Parking</span> : <span></span>}
                    {facility.locker ? <span><DevicesFoldIcon/>Locker</span> : <span></span>}
                    {facility.hotwater ? <span><HotTubIcon/>24/7 Hot & Cold Water</span> : <span></span>}
                    {facility.cctv ? <span><CameraOutdoorIcon/>CCTV</span> : <span></span>}
                    {facility.fan ? <span><CycloneIcon/>Fan</span> : <span></span>}
                    {facility.laundry ? <span><LocalLaundryServiceIcon/>Laundry</span> : <span></span>}
                    {facility.balcony ? <span><BalconyIcon/>Balcony</span> : <span></span>}
                    {facility.gym ? <span><FitnessCenterIcon />Gym</span> : <span></span>}
                  </div>
                )
              })
            }
           </div>
        </div>
        
        <div>
        <b>
          Description :
          </b>
          
          
        <p>{hdescription} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eveniet saepe harum similique inventore excepturi, assumenda rerum omnis labore quam ex commodi, soluta hic, aliquam obcaecati debitis odio quasi!</p>

        </div>
        </div>
      

    </div>
    </>
   
  )
}

export default SingleHostelDetails