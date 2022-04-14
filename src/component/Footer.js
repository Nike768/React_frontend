import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: 50,
        width: "100%",
        backgroundColor: "#283d4a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href="https://www.highradius.com/" style ={{color:"blue"}}>Privacy Policy</a>
      &nbsp;| Ⓒ HighRadius Corporation. All rights reserved.
    </div>
  );
}

export default Footer;
