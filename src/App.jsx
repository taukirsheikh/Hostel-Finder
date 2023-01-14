import React from "react";
import Hostel from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./Components/NoMatch";

const App = () => {
  return (
    <>
      
      <Routes>
        <Route
          path="/"
          element={<Hostel />} // home page 
        >
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
