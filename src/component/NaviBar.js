import React from "react";
import hrcImage from "../static/highradius-logo.png";
import abcImage from "../static/abc-logo.png";

function NaviBar() {
  return (
    <div
      style={{
        height: 90,
        width: "100%",
        backgroundColor: "#2d4250",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          marginRight: "350px",
          marginLeft: "50px",
          display: "flex",
          height: "90%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <img
          src={abcImage}
          alt="highradius-logo"
          style={{ height: "50%" }}
        ></img>
        <h3>Invoice List</h3>
      </div>
      <img src={hrcImage} alt="highradius-logo" style={{ height: "50%" }}></img>
    </div>
  );
}

export default NaviBar;
