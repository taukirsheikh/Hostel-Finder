import React from "react";
import Hostel from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./Components/NoMatch";
import ManagerDashboard from "./Components/ManagerUI/ManagerDashboard";
import RegisterHostel from "./Components/ManagerUI/RegisterHostel";
import UpdateHostel from "./Components/ManagerUI/UpdateHostel";
import Bookings from "./Components/ManagerUI/Bookings";
import UpdateDetailsPage from "./Components/ManagerUI/UpdateDetailsPage";
import SingleHostelDetails from "./Components/homeComponents/SingleHostelDetails";


const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Hostel />} // home page
          >
          </Route>

          <Route
              path="/hostel-details/:hid" element={<SingleHostelDetails/>}>
                
              </Route>

          <Route
            path="/manager-dashboard"
            element={<ManagerDashboard />}
          >
            {/* must be defined on top to get to index */}
            <Route index element={<Bookings/>} />

            <Route
              path="register-hostel"
              element={<RegisterHostel/>}
            />

            <Route
              path="update-hostel"
              element={<UpdateHostel/>}>
                
            </Route>
              <Route
              path="update-hostel/:hid" element={<UpdateDetailsPage/>}>
                
              </Route>
            
            <Route
              path="bookings"
              element={<Bookings/>}

            />
          </Route>
          <Route
            path="*"
            element={<NoMatch />}
          />
          
      </Routes>
    </>
  );
};

export default App;
