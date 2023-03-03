import React from "react";
import "./style.css";

export const NoMatch = () => {
  return (
    <>
      <div className="body">
        <div className="error">404</div>
        <br />
        <br />
        <span className="info">File not found</span>
        <img
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          className="static"
        />
      </div>
    </>
  );
};
