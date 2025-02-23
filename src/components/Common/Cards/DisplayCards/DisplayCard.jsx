import React from "react";
import "./DisplayCard.css";
import greenPlaneIcon from "../../../.././assets/icons/Body/greenPlaneIcon.svg";

const DisplayCard = ({ title, value, percentage, icon, borderColor }) => {
  return (
    <div className="card">
      <div className="card-left-border" style={{ backgroundColor: borderColor }}></div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <div className="card-data">
          <span className="card-value">{value}</span>
          <span className="card-percentage">
            {percentage}% <span className="card-icon"><img style={{width:"20px",height:"20px"}} src={greenPlaneIcon}/></span>
          </span>
        </div>
      </div>
      <div className="card-icon-container">
        <img src={icon} alt="icon" className="w-full h-full" />
      </div>
    </div>
  );
};

export default DisplayCard;
