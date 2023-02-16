import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ManagerNavBar from "./ManagerNavBar";
import { fetchDetail as managerDetail } from "../redux/userSlice";
import { useEffect } from "react";
import axios from "axios";

import "./style.css";

function ManagerDashboard() {
  const email = useSelector((state) => state.user.user.email);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/users/${email}/`
        );
        console.log(response.data);
        dispatch(managerDetail(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [email]);

  return (
    <>
      <ManagerNavBar />
    </>
  );
}

export default ManagerDashboard;
