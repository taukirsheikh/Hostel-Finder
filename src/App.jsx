import React from "react";
import Hostel from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./Components/NoMatch";
import ManagerDashboard from "./Components/ManagerUI/ManagerDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Hostel />} // home page
        >
          <Route
            path="manager-dashboard"
            element={<ManagerDashboard />}
          ></Route>
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
