import React from "react";
import "./Button.css";

const Button = ({
  text,
  variant = "primary",
  iconClass,
  icon,
  textClass = "",
  svgIcon
}) => {
  return (
    <button className={`custom-button ${variant}`}>
      {iconClass && <i className={`ri-${iconClass} button-icon`}></i>}
      {icon && icon}
      {text && <span className={textClass}>{text}</span>}
      {svgIcon && <img src={svgIcon}/>}
    </button>
  );
};

export default Button;
