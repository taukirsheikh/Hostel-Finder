import React, { useEffect } from 'react'
import axios from 'axios'
import './BookingSingleHostel.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export const BookingSingleHostel = (props) => {
    const { hostel_id, manager_id } = props;
    console.log("hostel_id:", hostel_id);
    console.log("manager_id:", manager_id);
    const user_id=useSelector((state)=>state.user.userDetail.user_id);
//    const booker_id=Object.user_id.user_id
    console.log("user_id:", user_id);
    // console.log("booker:", booker_id);
    const logcheck=useSelector((state)=>state.user.isLoggedIn)
    const[bookHostel, setBookHostel]=useState({
        "booker_name": "",
        "contact": "",
        "seater": 1,
        // "hostel": hostel_id,
        "booker_id": user_id
        // "hostel_manager": manager_id
        
    })
    if (hostel_id !== undefined) {
        bookHostel.hostel =  hostel_id ;
    }

    if (manager_id !== undefined) {
        bookHostel.hostel_manager = manager_id ;
    }
    const handleChange=(e)=>{
        setBookHostel({
            ...bookHostel,[e.target.name]:e.target.value,
        })
    }

    const handleSeaterChange=(e)=>{
        setBookHostel({
            ...bookHostel,[e.target.name]:parseInt(e.target.value)
        })
    }

    const handleBooking= async(e)=>{
        e.preventDefault();
        console.log(bookHostel)
       
        try{
            const resp=axios.post("http://127.0.0.1:8000/api/bookings/",bookHostel)
            .then((resp)=>{
                console.log(resp.data)})

        }catch(err){
            console.error(err)
        }
    }
   
  return (
   <>
  <div>
    <h2>
        Book This Hostel
        </h2>
    <div>
    <form action="
    "onSubmit={handleBooking}>

    <label htmlFor="booker-name">Your Name: </label>
    <input type="text" name="booker_name"  onChange={handleChange} required/>
    <label htmlFor="contact">Contact No. :</label>
    <input type="text" name='contact' pattern="^\d{10}$" title='Number must be 10 digit' onChange={handleChange} required/>
    <label htmlFor="seater">Select Room: </label>
    <select name='seater' type="number" onChange={handleSeaterChange}>
        <option  value={1}>Single Seater</option>
        <option  value={2}>Two Seater</option>
        <option value={3}>Three Seater</option>
        <option value={4}>Four Seater</option>
    </select>
    <div>
        {logcheck ? (<button type='submit'>Book Hostel</button>): <p>Sign In to Book Hostel</p> }
    </div>
    </form>
    </div>
  </div>
   
   </>
  )
}
