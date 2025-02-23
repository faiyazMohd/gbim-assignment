import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";
import HelpIcon from "../../.././assets/icons/Body/HelpIcon.svg";

const CustomTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef(null);

  // Handle click outside to close tooltip
  useEffect(() => {
    function handleClickOutside(event) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="tooltip-button-container">
      {/* <button className="tooltip-button" onClick={() => setIsOpen(!isOpen)}>
        Click Me
      </button> */}
      <img
        src={HelpIcon}
        style={{ width: "20px", height: "20px", marginLeft: "12px", cursor:"pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="tooltip-box" ref={tooltipRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div className="tooltip-arrow"></div>
        </div>
      )} 
    </div>
  );
};

export default CustomTooltip;
