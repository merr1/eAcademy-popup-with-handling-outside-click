import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import ballon from "../img/ballon.png";

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const popupOpen = () => setIsOpen((value) => !value);

  useEffect(() => {
    const IsOutsideClick = (event) => {
      if (!popupRef.current.contains(event.target) && isOpen) setIsOpen(false);
    };
    document.addEventListener("click", IsOutsideClick);
    return () => {
      document.removeEventListener("click", IsOutsideClick);
    };
  });

  return (
    <div className="wrapper">
      <button
        className={`whitebtn ${isOpen ? "close" : ""}`}
        onClick={popupOpen}
      >
        open
      </button>

      <div className={`popup  ${isOpen ? "" : "close"}`} ref={popupRef}>
        <div className="ballAnim">
          <img className="ballon" alt="red_ballon " src={ballon} />
          <span className="shadow"></span>
        </div>
        <p>Things aren’t always #000000 and #FFFFFF</p>
        <button className="btn" onClick={popupOpen}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUp;
