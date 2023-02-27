import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function ProtectedRoute({ isLoggedIn, children }) {
  const [alertShown, setAlertShown] = useState(false);

  // let alertShown = false;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
