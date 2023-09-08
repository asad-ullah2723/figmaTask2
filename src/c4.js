import React, { useState } from "react";

export default function C4() {
  const [comment, setComment] = useState(true);
  const removeButton = () => {
    setComment(false);
  };
  const [state2, setState2] = useState(0);

  const changeHeartImage2 = () => {
    if (state2 === 1) {
      setState2(0);
    } else {
      setState2(1);
    }
  };

  const bulbImageSrc2 = state2 === 1 ? "heart1.png" : "heart2.png";

  return (
    <div>
         <div style={{backgroundColor:"#e5e5e5", padding:"10px 50px"}}>
      {comment && (
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div style={{padding: "10px" }}>
            <img src="pic4.jpg" />
          </div>
          <div style={{padding: "10px" }}>
            <div>
              <b>John Doe</b>
            </div>
            <div>
              {" "}
              <p style={{ color: "gray" }}>Thank You All</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <a style={{ cursor: "pointer" }} onClick={changeHeartImage2}>
                  <img id="bulbImg" src={bulbImageSrc2} alt="Bulb" />
                </a>
              </div>
              <div>&nbsp;{state2}</div>
              <div style={{ padding: "0px 10px" }}>
                &nbsp;<b>.</b>&nbsp;
              </div>
              <div style={{ color: "red", cursor: "pointer" }}>
                <a onClick={removeButton}>Remove</a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
