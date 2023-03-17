import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ManagerNavBar from "./ManagerNavBar";
import { fetchDetail as managerDetail } from "../redux/userSlice";
import { fetchBookings as managerHostelBookings } from "../redux/userSlice";
import { useEffect } from "react";
import axios from "axios";

import store from "../redux/store";

import "./style.css";
import { useSelect } from "@mui/base";

function ManagerDashboard() {
  const email = useSelector((state) => state.user.user.email);
  const bookingConfirm=useSelector((state)=>state.user.bookingConfirm)
  // const booking_status=useSelector((state)=>state.user.hostelBookings.booking_status)
  const [manager_ID, setManager_ID] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/users/${email}/`
        );
        console.log(response.data);

        dispatch(managerDetail(response.data));
        setManager_ID(response.data.user_id);
        console.log(manager_ID, "i am hostel");
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [email, manager_ID]);

  useEffect(() => {
    if (manager_ID) {
      const fetchBooking = async () => {
        try {
          const resp = await axios.get(
            `http://127.0.0.1:8000/api/bookings/${manager_ID}/`
          );
          const sortedBookings = resp.data.sort(
            (a, b) => b.booking_id - a.booking_id
          );

          console.log(resp.data);
          dispatch(managerHostelBookings(sortedBookings));
        } catch (error) {
          console.error(error);
        }
      };
      fetchBooking();
    }
  },[bookingConfirm, manager_ID]);

  return (
    <>
      <ManagerNavBar />
    </>
  );
}

export default ManagerDashboard;
