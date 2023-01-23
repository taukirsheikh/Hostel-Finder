import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useGoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import {login as userLogin, logout as userLogout} from '../redux/userSlice'


function ProtectedRoute({ isLoggedIn, children }) {
    const [alertShown, setAlertShown] = useState(false);
    


// let alertShown = false;


  if (!isLoggedIn) {

    // setTimeout(() => {
    //     alert('you need to log in first');
    // }, 0);

    //   return (
        
        //       <Navigate to="/" />,
        //       alert('you need to log in first'))
        
        return <Navigate to="/" />;
        
        // if (!alertShown) {
        //     setAlertShown(true);
        //     setTimeout(() => {
        //         alert('you need to log in first');
        //     }, 0);}
          
     
  }

  

 
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
