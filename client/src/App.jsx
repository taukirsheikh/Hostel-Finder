import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Hostel from "./Components/HomePage";
import { NoMatch } from "./Components/NoMatch";
import ProtectedRoute from "./Components/Protected Route/ProtectedRoute";
import ManagerDashboard from "./Components/ManagerUI/ManagerDashboard";
import RegisterHostel from "./Components/ManagerUI/RegisterHostel";
import UpdateHostel from "./Components/ManagerUI/UpdateHostel";
import Bookings from "./Components/ManagerUI/Bookings";
import UpdateDetailsPage from "./Components/ManagerUI/UpdateDetailsPage";
import SingleHostelDetails from "./Components/homeComponents/SingleHostelDetails";
// import SingleHostelDetailsView from "./Components/Search/SingleHostelView";
import { SearchScreen } from "./Components/Search/SearchScreen";
import SingleHostelDetailsView from "./Components/Search/SingleHostelView";
import UserBooking from "./Components/UserBookings/UserBookingScreen";

// const SearchScreen = lazy(() => import("./Components/Search/SearchScreen"));

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Hostel />} />
        <Route path="/hostel-details/:hid" element={<SingleHostelDetails />} />
        <Route path="/hostel-detail/:hid" element={<SingleHostelDetailsView/>} />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/manager-dashboard" element={<ManagerDashboard />}>
            <Route index element={<Bookings />} />
            <Route path="register-hostel" element={<RegisterHostel />} />
            <Route path="update-hostel" element={<UpdateHostel />} />
            <Route path="update-hostel/:hid" element={<UpdateDetailsPage />} />
            <Route path="bookings" element={<Bookings />} /> 
          </Route>
          <Route path="/user-bookings" element={<UserBooking/>}></Route>
        </Route>
        <Route path="/hostel-search" element={<SearchScreen />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
